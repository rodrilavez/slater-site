import re, json, sys
# usage (from the repo root): python3 tools/build-wix-element.py src/public/custom-elements/slater-site.js
src = open('index.html').read()

css = src[src.index('<style>')+7 : src.index('</style>')]
body = src[src.index('<body>')+6 : src.index('<!-- Laylo sign-up pop-up')]
module = src[src.index('<script type="module">')+len('<script type="module">') : src.rindex('</script>')]

# ---------- CSS: page-level selectors -> the scroller inside the shadow root ----------
fontface = ''.join(re.findall(r'@font-face\{[^}]*\}\n?', css))
css = re.sub(r'@font-face\{[^}]*\}\n?', '', css)
css = css.replace(':root{', '.scroller{')
css = css.replace('html{background:', '.scroller{background:')
css = css.replace('html{background-color:', '.scroller{background-color:')
css = css.replace('body{font-family', '.scroller{font-family')
css = css.replace('body::after{', '.scroller::after{')
css = css.replace('html{scroll-snap-type:y proximity}', '.scroller{scroll-snap-type:y proximity}')
assert 'html{' not in css and 'body{' not in css and 'body::' not in css, [l for l in css.split('\n') if 'html{' in l or 'body' in l]
css = (""":host{all:initial}
.scroller{position:fixed;inset:0;z-index:2147483000;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
""" + css)
fontface = fontface.replace('url("assets/', 'url("__BASE__assets/')

# ---------- markup ----------
html = body.replace('src="assets/', 'src="__BASE__assets/').replace('srcset="assets/', 'srcset="__BASE__assets/').replace(', assets/', ', __BASE__assets/')
assert '"assets/' not in html

# ---------- module JS ----------
js = module
js = re.sub(r"^import .*?;\n", "", js, flags=re.M)
rep = [
 ("document.querySelectorAll(", "root.querySelectorAll("),
 ("document.querySelector(", "root.querySelector("),
 ("document.getElementById(", "root.getElementById("),
 ("document.activeElement", "root.activeElement"),
 ("addEventListener('scroll',()=>nav.classList.toggle('solid', scrollY > innerHeight*.6),{passive:true});",
  "scroller.addEventListener('scroll',()=>nav.classList.toggle('solid', scroller.scrollTop > innerHeight*.6),{passive:true});"),
 ("addEventListener('scroll',readProgress,{passive:true});", "scroller.addEventListener('scroll',readProgress,{passive:true});"),
 ("window.scrollTo(", "scroller.scrollTo("),
 ("window.scrollBy(", "scroller.scrollBy("),
 ("e.target===canvas", "e.composedPath()[0]===canvas"),
 ("stage.contains(e.target)", "e.composedPath().includes(stage)"),
 ("local:`covers/${id}.jpg`", "local:`${BASE}covers/${id}.jpg`"),
 ('src="merch/${img}.png"', 'src="${BASE}merch/${img}.png"'),
]
for a,b in rep:
    n = js.count(a)
    assert n, a
    js = js.replace(a,b)
assert 'scrollY' not in js and 'document.getElementById' not in js
assert "covers/" not in js.replace("${BASE}covers/","")
js = js.replace("window.__slater = {", "window.__slater = { root, scroller,")

out = f"""/* Slater: full-site custom element for Wix (Velo file: public/custom-elements/slater-site.js)
 * Tag name in the Wix editor: slater-site
 * Generated from index.html, so edit index.html and rebuild rather than this file by hand.
 */

// Where the images live (covers/, merch/, assets/). Must end with "/" and send CORS headers.
const BASE = 'https://cdn.jsdelivr.net/gh/rodrilavez/slater-site@main/';
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
const ROOM_URL  = 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/environments/RoomEnvironment.js/+esm';
const LAYLO = {{
  id: '3e9e4154-9fed-4e8a-9d0a-97d71f56738c', minimal: false, customCTA: "", submitButtonText: "",
  color: 'b6bdce', theme: 'light', background: '', fullWidth: false
}};

const CSS = {json.dumps(css)};
const FONTFACE = {json.dumps(fontface)};
const MARKUP = {json.dumps(html)};

function headOnce(id, make) {{
  if (document.getElementById(id)) return document.getElementById(id);
  const el = make(); el.id = id; document.head.appendChild(el); return el;
}}

function loadThree() {{
  if (window.__slaterThreeP) return window.__slaterThreeP;
  window.__slaterThreeP = new Promise((resolve, reject) => {{
    window.__slaterThreeReady = resolve;
    const s = document.createElement('script');
    s.type = 'module';
    s.textContent = "import * as THREE from '" + THREE_URL + "'; import {{ RoomEnvironment }} from '" + ROOM_URL + "'; window.__slaterThreeReady({{ THREE, RoomEnvironment }});";
    s.onerror = reject;
    document.head.appendChild(s);
  }});
  return window.__slaterThreeP;
}}

function loadLaylo() {{
  headOnce('slater-laylo-sdk', () => {{
    const s = document.createElement('script');
    s.src = 'https://embed.laylo.com/laylo-sdk.js';
    s.onload = () => {{
      // the SDK declares `const laylo` as a global binding; expose an opener and show the pop-up after 5 s
      const boot = document.createElement('script');
      boot.textContent = "window.__layloOpen = function(o){{ laylo.openPopup(o); }}; window.__layloOpen(" + JSON.stringify(Object.assign({{}}, LAYLO, {{ secondsToWait: 5 }})) + ");";
      document.head.appendChild(boot);
    }};
    return s;
  }});
}}

function main(THREE, RoomEnvironment, root, scroller) {{
{js}
}}

class SlaterSite extends HTMLElement {{
  connectedCallback() {{
    if (this._mounted) return;
    this._mounted = true;
    this.style.display = 'block';

    headOnce('slater-fonts', () => {{
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..800;1,62..125,400..800&display=swap';
      return l;
    }});
    headOnce('slater-fontface', () => {{ const s = document.createElement('style'); s.textContent = FONTFACE.split('__BASE__').join(BASE); return s; }});

    // Mount on <body>, outside Wix's layout, so transforms on Wix containers can't trap the full-screen page.
    const host = document.createElement('div');
    host.setAttribute('data-slater-site', '');
    document.body.appendChild(host);
    this._host = host;
    const root = host.attachShadow({{ mode: 'open' }});
    root.innerHTML = '<style>' + CSS + '</style><div class="scroller" id="scroller">' + MARKUP.split('__BASE__').join(BASE) + '</div>';
    const scroller = root.getElementById('scroller');

    // the site scrolls inside its own layer; stop the Wix page behind it from scrolling too
    this._prevOverflow = [document.documentElement.style.overflow, document.body.style.overflow];
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // in-page links (#records, #merch, #top) scroll the site's own layer
    root.addEventListener('click', e => {{
      const a = e.composedPath().find(n => n.tagName === 'A' && (n.getAttribute('href') || '').startsWith('#'));
      if (!a) return;
      const t = root.getElementById(a.getAttribute('href').slice(1));
      if (!t) return;
      e.preventDefault();
      scroller.scrollTo({{ top: t.offsetTop, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }});
    }});

    // sign-up buttons open the Laylo pop-up when it has loaded, otherwise they open laylo.com
    loadLaylo();
    root.querySelectorAll('[data-laylo]').forEach(a => a.addEventListener('click', e => {{
      if (typeof window.__layloOpen !== 'function') return;
      e.preventDefault();
      window.__layloOpen(Object.assign({{}}, LAYLO, {{ secondsToWait: 0 }}));
    }}, true));

    loadThree().then(({{ THREE, RoomEnvironment }}) => main(THREE, RoomEnvironment, root, scroller))
      .catch(err => console.error('Slater site: could not load three.js', err));
  }}

  disconnectedCallback() {{
    // Wix page change: take the full-screen layer down and give the page its scroll back
    if (this._host) this._host.remove();
    if (this._prevOverflow) {{
      document.documentElement.style.overflow = this._prevOverflow[0];
      document.body.style.overflow = this._prevOverflow[1];
    }}
    this._mounted = false;
  }}
}}

if (!customElements.get('slater-site')) customElements.define('slater-site', SlaterSite);
"""
open(sys.argv[1], 'w').write(out)
print('ok', len(out))
