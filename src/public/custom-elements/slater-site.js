/* Slater: full-site custom element for Wix
 * Tag name in the Wix editor: slater-site
 *
 * This file does NOT contain the site. On every visit it downloads index.html
 * (and the images) straight from GitHub, so to change the site you only edit
 * index.html or upload images in the repo. Changes show up in about 5 minutes.
 */

// Where the site lives. Must end with "/". raw.githubusercontent.com caches for 5 minutes.
const BASE = 'https://raw.githubusercontent.com/rodrilavez/slater-site/main/';
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
const ROOM_URL  = 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/environments/RoomEnvironment.js/+esm';
const LAYLO = {
  id: '3e9e4154-9fed-4e8a-9d0a-97d71f56738c', minimal: false, customCTA: "", submitButtonText: "",
  color: 'b6bdce', theme: 'light', background: '', fullWidth: false
};

/* ---------- turn index.html into pieces that run inside a shadow root ---------- */
function between(src, a, b) {
  const i = src.indexOf(a); if (i < 0) throw new Error('index.html: missing ' + a);
  const j = src.indexOf(b, i + a.length); if (j < 0) throw new Error('index.html: missing ' + b);
  return src.slice(i + a.length, j);
}
function replaceAll(s, a, b) { return s.split(a).join(b); }

function adapt(src) {
  let css = between(src, '<style>', '</style>');
  let body = between(src, '<body>', '<!-- Laylo sign-up pop-up');
  const mStart = src.indexOf('<script type="module">');
  if (mStart < 0) throw new Error('index.html: missing module script');
  let js = src.slice(mStart + '<script type="module">'.length, src.lastIndexOf('</script>'));

  // fonts declared with @font-face must live in the main document
  const fontface = (css.match(/@font-face\{[^}]*\}\n?/g) || []).join('');
  css = css.replace(/@font-face\{[^}]*\}\n?/g, '');
  css = replaceAll(css, ':root{', '.scroller{');
  css = replaceAll(css, 'html{background:', '.scroller{background:');
  css = replaceAll(css, 'html{background-color:', '.scroller{background-color:');
  css = replaceAll(css, 'body{font-family', '.scroller{font-family');
  css = replaceAll(css, 'body::after{', '.scroller::after{');
  css = replaceAll(css, 'html{scroll-snap-type:y proximity}', '.scroller{scroll-snap-type:y proximity}');
  css = ':host{all:initial}\n.scroller{position:fixed;inset:0;z-index:2147483000;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}\n' + css;

  // relative image paths -> GitHub
  body = body.replace(/(src|srcset)="(assets|covers|merch)\//g, '$1="' + BASE + '$2/')
             .replace(/, (assets|covers|merch)\//g, ', ' + BASE + '$1/');

  js = js.replace(/^import .*?;\n/gm, '');
  const rep = [
    ['document.querySelectorAll(', 'root.querySelectorAll('],
    ['document.querySelector(', 'root.querySelector('],
    ['document.getElementById(', 'root.getElementById('],
    ['document.activeElement', 'root.activeElement'],
    ["addEventListener('scroll',()=>nav.classList.toggle('solid', scrollY > innerHeight*.6),{passive:true});",
     "scroller.addEventListener('scroll',()=>nav.classList.toggle('solid', scroller.scrollTop > innerHeight*.6),{passive:true});"],
    ["addEventListener('scroll',readProgress,{passive:true});", "scroller.addEventListener('scroll',readProgress,{passive:true});"],
    ['window.scrollTo(', 'scroller.scrollTo('],
    ['window.scrollBy(', 'scroller.scrollBy('],
    ['e.target===canvas', 'e.composedPath()[0]===canvas'],
    ['stage.contains(e.target)', 'e.composedPath().includes(stage)'],
    ['local:`covers/${id}.jpg`', 'local:`${BASE}covers/${id}.jpg`'],
    ['src="merch/${img}.png"', 'src="${BASE}merch/${img}.png"'],
  ];
  for (const [a, b] of rep) {
    if (js.indexOf(a) < 0) console.warn('Slater site: pattern not found, index.html may have changed:', a);
    js = replaceAll(js, a, b);
  }
  js = replaceAll(js, 'window.__slater = {', 'window.__slater = { root, scroller,');
  return { css, body, js, fontface: fontface.replace(/url\("assets\//g, 'url("' + BASE + 'assets/') };
}

/* ---------- loaders ---------- */
function headOnce(id, make) {
  let el = document.getElementById(id);
  if (!el) { el = make(); el.id = id; document.head.appendChild(el); }
  return el;
}
function loadThree() {
  if (window.__slaterThreeP) return window.__slaterThreeP;
  window.__slaterThreeP = new Promise((resolve, reject) => {
    window.__slaterThreeReady = resolve;
    const s = document.createElement('script');
    s.type = 'module';
    s.textContent = "import * as THREE from '" + THREE_URL + "'; import { RoomEnvironment } from '" + ROOM_URL + "'; window.__slaterThreeReady({ THREE, RoomEnvironment });";
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return window.__slaterThreeP;
}
function loadLaylo() {
  headOnce('slater-laylo-sdk', () => {
    const s = document.createElement('script');
    s.src = 'https://embed.laylo.com/laylo-sdk.js';
    s.onload = () => {
      // the SDK declares `const laylo` as a global binding; expose an opener and show the pop-up after 5 s
      const boot = document.createElement('script');
      boot.textContent = "window.__layloOpen = function(o){ laylo.openPopup(o); }; window.__layloOpen(" + JSON.stringify(Object.assign({}, LAYLO, { secondsToWait: 5 })) + ");";
      document.head.appendChild(boot);
    };
    return s;
  });
}

class SlaterSite extends HTMLElement {
  connectedCallback() {
    if (this._mounted) return;
    this._mounted = true;
    this.style.display = 'block';

    headOnce('slater-fonts', () => {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..800;1,62..125,400..800&display=swap';
      return l;
    });

    // full-screen layer on <body>, outside Wix's layout, so Wix containers can't trap it
    const host = document.createElement('div');
    host.setAttribute('data-slater-site', '');
    host.style.cssText = 'position:fixed;inset:0;z-index:2147483000;background:#1f1a15';
    document.body.appendChild(host);
    this._host = host;
    const root = host.attachShadow({ mode: 'open' });
    this._prevOverflow = [document.documentElement.style.overflow, document.body.style.overflow];
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const three = loadThree();
    fetch(BASE + 'index.html', { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw new Error('index.html ' + r.status); return r.text(); })
      .then(html => {
        const p = adapt(html);
        headOnce('slater-fontface', () => { const s = document.createElement('style'); s.textContent = p.fontface; return s; });
        root.innerHTML = '<style>' + p.css + '</style><div class="scroller" id="scroller">' + p.body + '</div>';
        const scroller = root.getElementById('scroller');

        // in-page links (#records, #merch, #top) scroll the site's own layer
        root.addEventListener('click', e => {
          const a = e.composedPath().find(n => n.tagName === 'A' && (n.getAttribute('href') || '').startsWith('#'));
          if (!a) return;
          const t = root.getElementById(a.getAttribute('href').slice(1));
          if (!t) return;
          e.preventDefault();
          scroller.scrollTo({ top: t.offsetTop, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        });

        // sign-up buttons open the Laylo pop-up when it has loaded, otherwise they open laylo.com
        loadLaylo();
        root.querySelectorAll('[data-laylo]').forEach(a => a.addEventListener('click', e => {
          if (typeof window.__layloOpen !== 'function') return;
          e.preventDefault();
          window.__layloOpen(Object.assign({}, LAYLO, { secondsToWait: 0 }));
        }, true));

        return three.then(({ THREE, RoomEnvironment }) => {
          const run = new Function('THREE', 'RoomEnvironment', 'root', 'scroller', 'BASE', p.js);
          run(THREE, RoomEnvironment, root, scroller, BASE);
        });
      })
      .catch(err => {
        console.error('Slater site failed to load', err);
        this.disconnectedCallback();   // give the visitor the Wix page back instead of a blank screen
      });
  }

  disconnectedCallback() {
    if (this._host) { this._host.remove(); this._host = null; }
    if (this._prevOverflow) {
      document.documentElement.style.overflow = this._prevOverflow[0];
      document.body.style.overflow = this._prevOverflow[1];
      this._prevOverflow = null;
    }
    this._mounted = false;
  }
}

if (!customElements.get('slater-site')) customElements.define('slater-site', SlaterSite);
