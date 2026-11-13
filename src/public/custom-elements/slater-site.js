/* Slater: full-site custom element for Wix (Velo file: public/custom-elements/slater-site.js)
 * Tag name in the Wix editor: slater-site
 * Generated from index.html, so edit index.html and rebuild rather than this file by hand.
 */

// Where the images live (covers/, merch/, assets/). Must end with "/" and send CORS headers.
const BASE = 'https://cdn.jsdelivr.net/gh/rodrilavez/slater-site@main/';
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
const ROOM_URL  = 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/environments/RoomEnvironment.js/+esm';
const LAYLO = {
  id: '3e9e4154-9fed-4e8a-9d0a-97d71f56738c', minimal: false, customCTA: "", submitButtonText: "",
  color: 'b6bdce', theme: 'light', background: '', fullWidth: false
};

const CSS = ":host{all:initial}\n.scroller{position:fixed;inset:0;z-index:2147483000;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}\n\n\n/* ------------------------------------------------------------------\n   Colorway, sampled from the pier photo (management's main asset):\n   wet sand under the pier, his washed-out blue hoodie, low sun on sand.\n------------------------------------------------------------------- */\n.scroller{\n  --noise:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .93 0 0 0 0 .9 0 0 0 0 .83 0 0 0 .22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E\");\n  --tide:#1f1a15;      /* pier shadow / wet sand: page + scene ground */\n  --tide-2:#3a3227;\n  --surf:#8e9ca7;      /* the hoodie */\n  --sand:#ede5d3;      /* low sun on dry sand: text, highlight blocks */\n  --sun:#a9bfd1;       /* hoodie, lit: the one accent */\n  --ink:#16120e;\n\n  --display:\"Benzin\",\"Archivo\",sans-serif;\n  --body:\"Archivo\",system-ui,sans-serif;\n\n  --ease-out:cubic-bezier(.23,1,.32,1);\n  --ease-in-out:cubic-bezier(.77,0,.175,1);\n  --pad:clamp(1rem,4vw,3rem);\n  --safe-b:env(safe-area-inset-bottom,0px);\n}\n*{box-sizing:border-box;margin:0;padding:0}\n.scroller{background:var(--tide);color:var(--sand);-webkit-text-size-adjust:100%;scrollbar-color:var(--surf) var(--tide);caret-color:var(--sun)}\n.scroller{font-family:var(--body);font-stretch:100%;font-size:1rem;line-height:1.5;overflow-x:hidden}\na{color:inherit}\nimg{display:block;max-width:100%}\n:focus-visible{outline:2px solid var(--sun);outline-offset:3px}\n::selection{background:var(--sand);color:var(--ink)}\n.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n\n/* the voice of the current site: wide, italic, slanted forward */\n.disp{font-family:var(--display);font-stretch:125%;font-style:italic;font-weight:600;letter-spacing:-.01em}\n/* inverted block, as on slaterisburnt.com (\"Youtube\", \"Shop\", \"Frozen in the Past\") */\n.hl{background:var(--sand);color:var(--ink);padding:.02em .22em .06em;-webkit-box-decoration-break:clone;box-decoration-break:clone}\n/* the \u2671 ornament from the current site */\n.x{display:inline-block;font-style:normal;font-family:\"Segoe UI Symbol\",\"Apple Symbols\",\"Noto Sans Symbols\",serif;font-weight:400;margin:0 .45em;transform:translateY(-.04em)}\n\n.scroller{background-color:var(--tide);background-image:var(--noise)}\n.stage{background-blend-mode:normal}\n.scroller::after{\n  content:\"\";position:fixed;inset:-50%;z-index:60;pointer-events:none;opacity:.16;mix-blend-mode:overlay;\n  background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\");\n  animation:grain 1s steps(4) infinite;\n}\n@keyframes grain{0%{transform:translate(0,0)}25%{transform:translate(-3%,2%)}50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,-1%)}}\n\n/* ---------------- nav ---------------- */\n.nav{position:fixed;top:0;left:0;right:0;z-index:40;display:flex;align-items:center;justify-content:space-between;\n  padding:max(.9rem,env(safe-area-inset-top)) var(--pad) .9rem;transition:background-color .4s ease}\n.nav.solid{background:rgba(31,26,21,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}\n.nav__logo{width:112px;height:auto;filter:brightness(1.7) drop-shadow(0 0 8px rgba(237,229,211,.35));opacity:0;transform:translateY(-6px);transition:opacity .3s ease,transform .4s var(--ease-out)}\n.nav.solid .nav__logo{opacity:1;transform:none}\n.nav__links{display:flex;align-items:center;list-style:none;font-size:1rem}\n.nav__links a{text-decoration:none;display:inline-block;padding:.35rem .1rem}\n/* hover: the site's highlight block slides in behind the word */\n.sweep{position:relative;isolation:isolate;padding:.15rem .4rem !important;transition:color .18s ease}\n.sweep::before{content:\"\";position:absolute;inset:0;z-index:-1;background:var(--sand);transform:scaleX(0);transform-origin:left;transition:transform .24s var(--ease-out)}\n@media (hover:hover) and (pointer:fine){\n  .sweep:hover{color:var(--ink);text-shadow:none}\n  .sweep:hover::before{transform:scaleX(1)}\n}\n.sweep:focus-visible{color:var(--ink)}\n.sweep:focus-visible::before{transform:scaleX(1)}\n.nav:not(.solid) .nav__links{text-shadow:0 1px 14px rgba(22,18,14,.6)}\n.nav__links .hl{text-shadow:none;padding:.15rem .4rem}\n@media (hover:hover) and (pointer:fine){\n}\n\n/* ---------------- hero ---------------- */\n.hero{position:relative;min-height:100svh;display:grid;grid-template-rows:1fr auto auto;overflow:hidden;isolation:isolate}\n.hero__photo{position:absolute;inset:0;z-index:-2}\n.hero__photo img{width:100%;height:100%;object-fit:cover;object-position:40% 28%;transform:scale(1.06);animation:settle 2.4s var(--ease-out) forwards}\n.hero::before{content:\"\";position:absolute;inset:0;z-index:-1;\n  background:linear-gradient(180deg,rgba(31,26,21,.35) 0%,rgba(31,26,21,0) 22%,rgba(31,26,21,0) 46%,rgba(31,26,21,.82) 82%,var(--tide) 100%)}\n@keyframes settle{to{transform:scale(1)}}\n.hero__mark{align-self:end;padding:0 var(--pad);margin-bottom:clamp(.8rem,2.4vh,1.6rem)}\n.hero__mark img{width:min(88vw,680px);height:auto;filter:brightness(1.75) contrast(1.15) drop-shadow(0 0 2px rgba(237,229,211,.55)) drop-shadow(0 0 18px rgba(237,229,211,.38)) drop-shadow(0 0 46px rgba(169,191,209,.32));\n  opacity:0;transform:translateY(20px);animation:rise 1.2s .3s var(--ease-out) forwards}\n@keyframes rise{to{opacity:1;transform:none}}\n.drop{display:grid;grid-template-columns:auto 1fr auto;align-items:end;gap:1.25rem 3rem;padding:0 var(--pad) calc(2rem + var(--safe-b));\n  opacity:0;animation:rise 1s .75s var(--ease-out) forwards}\n.drop__what{font-size:clamp(1.05rem,1.6vw,1.35rem);line-height:1.35}\n.drop__what .hl{display:inline-block;margin-top:.3rem}\n.count{display:flex;gap:clamp(.9rem,2.2vw,2rem);font-variant-numeric:tabular-nums}\n.count div{display:flex;flex-direction:column}\n.count b{font-weight:700;font-size:clamp(2.4rem,6vw,4.8rem);line-height:.9}\n.count small{font-size:.8rem;opacity:.75;margin-top:.4rem}\n\n/* buttons: the highlight block, made pressable */\n.btn{display:inline-flex;align-items:center;padding:.8rem 1.15rem;border:0;cursor:pointer;text-decoration:none;white-space:nowrap;\n  background:var(--sand);color:var(--ink);font-size:.92rem;\n  transition:transform .16s var(--ease-out),background-color .2s ease}\n.btn:active{transform:scale(.97)}\n.btn--ghost{background:transparent;color:var(--sand);box-shadow:inset 0 0 0 1.5px rgba(237,229,211,.55)}\n@media (hover:hover) and (pointer:fine){\n  .btn:hover{transform:translateY(-2px)}\n  .btn--ghost:hover{box-shadow:inset 0 0 0 1.5px var(--sand)}\n}\n\n/* ---------------- records (pinned 3D stack) ---------------- */\n.records{position:relative;height:var(--track-h,320vh)}\n.stage{position:sticky;top:0;height:100svh;overflow:hidden;background:radial-gradient(80% 70% at 60% 50%,rgba(58,50,39,.9) 0%,rgba(31,26,21,.6) 72%)}\n#gl{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:pan-y}\n.stage__head{position:absolute;z-index:2;top:calc(5rem + env(safe-area-inset-top));left:var(--pad);width:min(34vw,420px);transition:opacity .25s ease}\n.stage__head h2{font-size:clamp(2.2rem,4.6vw,4.2rem);line-height:.95}\n.stage__head p{margin-top:.9rem;max-width:30ch;font-size:.95rem;opacity:.75}\n.modes{display:flex;flex-wrap:wrap;align-items:center;margin-top:1.4rem;font-size:1rem}\n.modes button,.kinds button{background:none;border:0;color:var(--sand);font:inherit;cursor:pointer;padding:.35rem .1rem;opacity:.7;transition:opacity .2s ease}\n.modes button[aria-pressed=\"true\"],.kinds button[aria-pressed=\"true\"]{opacity:1}\n.modes button[aria-pressed=\"true\"] span.t,.kinds button[aria-pressed=\"true\"] span.t{background:var(--sand);color:var(--ink);padding:.12rem .4rem}\n.modes small,.kinds small{font-style:normal;font-stretch:100%;opacity:.6;margin-left:.3rem;font-variant-numeric:tabular-nums;font-size:.8em}\n@media (hover:hover) and (pointer:fine){.modes button:hover,.kinds button:hover{opacity:1}}\n.kinds{display:flex;flex-wrap:wrap;align-items:center;margin-top:.4rem;font-size:.9rem;\n  opacity:0;transform:translateY(-4px);pointer-events:none;transition:opacity .2s ease,transform .25s var(--ease-out)}\n.kinds.on{opacity:1;transform:none;pointer-events:auto}\n\n/* current record, under the heading */\n.now{position:absolute;z-index:2;left:var(--pad);bottom:calc(2.2rem + var(--safe-b));width:min(34vw,420px);transition:opacity .25s ease}\n.now b{display:block;font-size:clamp(1.3rem,2vw,1.8rem);line-height:1.05}\n.now span{display:block;margin-top:.45rem;font-size:.9rem;opacity:.75}\n\n/* timeline rail on the right: the stack is chronological, top = newest */\n.rail{position:absolute;z-index:2;right:var(--pad);top:calc(5.5rem + env(safe-area-inset-top));bottom:calc(2.4rem + var(--safe-b));width:3.2rem;transition:opacity .25s ease}\n.rail__line{position:absolute;right:0;top:0;bottom:0;width:1px;background:rgba(237,229,211,.22)}\n.rail__fill{position:absolute;right:-1px;top:0;bottom:0;width:3px;background:var(--sun);transform:scaleY(0);transform-origin:top}\n.rail__tick{position:absolute;right:.7rem;transform:translateY(-50%);background:none;border:0;color:var(--sand);font:500 .78rem/1 var(--body);\n  opacity:.55;cursor:pointer;padding:.3rem 0;font-variant-numeric:tabular-nums}\n@media (hover:hover) and (pointer:fine){.rail__tick:hover{opacity:1}}\n\n/* opened record */\n.sheet{position:absolute;z-index:5;left:var(--pad);bottom:calc(2rem + var(--safe-b));width:min(300px,calc(100% - 2*var(--pad)));\n  padding:.85rem .9rem .9rem 1rem;background:rgba(22,18,14,.82);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);\n  box-shadow:0 18px 50px -20px rgba(0,0,0,.6),inset 0 0 0 1px rgba(237,229,211,.12);\n  opacity:0;transform:translateY(10px) scale(.98);transform-origin:bottom left;pointer-events:none;\n  transition:opacity .2s ease,transform .28s var(--ease-out)}\n.sheet.open{opacity:1;transform:none;pointer-events:auto}\n.sheet__top{display:flex;align-items:center;justify-content:space-between;gap:.5rem}\n.sheet__kind{font-size:.8rem;opacity:.7}\n.sheet h3{font-size:clamp(1.25rem,1.9vw,1.6rem);line-height:1.02;margin:.25rem 0 .8rem}\n.sheet__bar{display:flex;align-items:center;gap:.4rem}\n.listen{width:2.6rem;height:2.6rem;display:grid;place-items:center;background:var(--sand);color:var(--ink);\n  transition:transform .16s var(--ease-out),background-color .2s ease}\n.listen:active{transform:scale(.94)}\n.sheet__step{margin-left:auto;display:flex;gap:.15rem}\n.sheet__icon{width:2.2rem;height:2.2rem;display:grid;place-items:center;background:none;border:0;color:var(--sand);cursor:pointer;opacity:.75;\n  box-shadow:inset 0 0 0 1px rgba(237,229,211,.18);transition:opacity .2s ease,background-color .2s ease}\n.sheet__top .sheet__icon{width:1.9rem;height:1.9rem;box-shadow:none;margin:-.3rem -.4rem 0 0}\n.sheet__icon:disabled{opacity:.2;cursor:default}\n@media (hover:hover) and (pointer:fine){\n  .listen:hover{transform:translateY(-2px);background:#fff}\n  .sheet__icon:not(:disabled):hover{opacity:1;background:rgba(237,229,211,.08)}\n}\n.stage.is-open .now,.stage.is-open .rail{opacity:0}\n\n.stage::before,.stage::after{content:\"\";position:absolute;left:0;right:0;z-index:1;pointer-events:none}\n@media (max-width:760px){\n  .stage::before{top:0;height:calc(12.5rem + env(safe-area-inset-top));background-color:var(--tide);background-image:var(--noise);-webkit-mask-image:linear-gradient(180deg,#000 62%,transparent);mask-image:linear-gradient(180deg,#000 62%,transparent)}\n  .stage::after{bottom:0;height:calc(7.5rem + var(--safe-b));background-color:var(--tide);background-image:var(--noise);-webkit-mask-image:linear-gradient(0deg,#000 45%,transparent);mask-image:linear-gradient(0deg,#000 45%,transparent)}\n  .stage.mode-all::before{height:calc(15rem + env(safe-area-inset-top))}\n  .stage.is-open::before,.stage.is-open::after{opacity:0}\n}\n.snap{position:absolute;left:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}\n@media (max-width:760px) and (prefers-reduced-motion:no-preference){.scroller{scroll-snap-type:y proximity}}\n.loader{position:absolute;inset:0;display:grid;place-items:center;z-index:3;pointer-events:none;transition:opacity .5s ease}\n.loader.done{opacity:0}\n\n/* ---------------- below ---------------- */\n.band{padding:clamp(4rem,12vh,8rem) var(--pad);display:grid;grid-template-columns:repeat(12,1fr);gap:2rem var(--pad);align-items:end}\n.band h2{grid-column:1 / span 7;font-size:clamp(2.6rem,7vw,6rem);line-height:.95}\n.band__side{grid-column:9 / -1}\n.band__side p{max-width:34ch;margin-bottom:1.2rem;opacity:.85}\n.band + .band{border-top:1px solid rgba(237,229,211,.12)}\n.band--blue{background:var(--sun);color:var(--ink)}\n.band--blue .btn{background:var(--ink);color:var(--sand)}\n.bears-wrap{padding:clamp(3rem,10vh,6rem) var(--pad) 0}\n.bears{width:min(560px,80vw);height:auto;margin:0 auto;filter:brightness(1.6) drop-shadow(0 0 2px rgba(237,229,211,.5)) drop-shadow(0 0 16px rgba(237,229,211,.35)) drop-shadow(0 0 40px rgba(169,191,209,.3))}\n.foot{padding:2.5rem var(--pad) calc(2.5rem + var(--safe-b));display:flex;flex-wrap:wrap;gap:1.4rem 2.5rem;align-items:center;justify-content:space-between}\n.foot img{width:120px;height:auto;filter:brightness(1.7) drop-shadow(0 0 10px rgba(237,229,211,.3))}\n.foot ul{display:flex;flex-wrap:wrap;align-items:center;list-style:none;font-size:.95rem}\n.foot a{text-decoration:none;display:inline-block}\n\n\n\n/* ---------------- merch runway ---------------- */\n.merch{padding:clamp(4rem,12vh,7rem) 0 clamp(3rem,8vh,5rem);overflow:hidden}\n.merch__head{display:grid;grid-template-columns:repeat(12,1fr);gap:1.5rem var(--pad);align-items:end;padding:0 var(--pad);margin-bottom:clamp(1.5rem,5vh,3rem)}\n.merch__head h2{grid-column:1 / span 6;font-size:clamp(2.6rem,7vw,6rem);line-height:.95}\n.merch__shops{grid-column:8 / -1}\n.merch__shops p{max-width:36ch;margin-bottom:1.1rem;opacity:.85}\n.merch__btns{display:flex;flex-wrap:wrap;gap:.5rem}\n.runway{position:relative;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}\n.runway__track{display:flex;width:max-content;list-style:none;animation:runway var(--runway-dur,70s) linear infinite}\n.runway:hover .runway__track,.runway.paused .runway__track{animation-play-state:paused}\n@keyframes runway{to{transform:translateX(-50%)}}\n.piece{width:clamp(220px,25vw,340px);flex:none;padding:0 clamp(.5rem,1.5vw,1.25rem)}\n.piece a{display:flex;flex-direction:column;align-items:center;text-decoration:none;color:inherit}\n/* the game pickup: floats, spins on its own axis, with a little thickness and a halo */\n.pickup{position:relative;width:100%;aspect-ratio:1;display:grid;place-items:center;perspective:900px}\n.pickup::before{content:\"\";position:absolute;inset:14% 14% 22%;border-radius:50%;background:radial-gradient(closest-side,rgba(169,191,209,.28),rgba(169,191,209,0));filter:blur(6px)}\n.pickup__float{position:relative;width:84%;height:84%;transform-style:preserve-3d;animation:bob 2.8s ease-in-out infinite alternate;animation-delay:var(--d,0s)}\n.pickup__spin{position:absolute;inset:0;transform-style:preserve-3d;animation:spin var(--spin,7s) linear infinite;animation-delay:var(--d,0s)}\n.pickup__spin img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;backface-visibility:visible}\n.pickup__spin img.l{filter:brightness(.42)}\n.pickup__shadow{position:absolute;left:30%;right:30%;bottom:6%;height:7%;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.55),rgba(0,0,0,0));animation:shadow 2.8s ease-in-out infinite alternate;animation-delay:var(--d,0s)}\n@keyframes spin{to{transform:rotateY(360deg)}}\n@keyframes bob{from{transform:translateY(-4%)}to{transform:translateY(4%)}}\n@keyframes shadow{from{transform:scale(.8);opacity:.6}to{transform:scale(1.05);opacity:1}}\n.piece__name{margin-top:.3rem;font-size:.95rem;line-height:1.2;text-align:center}\n.piece__price{margin-top:.35rem;font-size:.85rem;opacity:.75;font-variant-numeric:tabular-nums}\n.piece__price .hl{opacity:1;margin-left:.4rem;font-size:.8em}\n@media (hover:hover) and (pointer:fine){\n  .pickup{transition:scale .3s var(--ease-out)}\n  .piece a:hover .pickup{scale:1.06}\n  .piece a:hover .piece__name{text-decoration:underline;text-underline-offset:.3em}\n}\n@media (max-width:760px){\n  .merch__head{grid-template-columns:1fr;text-align:center}\n  .merch__head h2,.merch__shops{grid-column:1 / -1}\n  .merch__shops p{margin-left:auto;margin-right:auto}\n  .merch__btns{justify-content:center}\n  .piece{width:58vw}\n}\n@media (prefers-reduced-motion:reduce){\n  .runway{overflow-x:auto;-webkit-mask-image:none;mask-image:none}\n  .runway__track{animation:none}\n  .pickup__spin,.pickup__float,.pickup__shadow{animation:none}\n}\n\n/* ---------------- phones ---------------- */\n@media (max-width:760px){\n  /* phones: everything on one centred axis */\n  .hero__mark,.drop,.stage__head,.now,.band,.foot{text-align:center}\n  .hero__mark img{margin:0 auto}\n  .drop{justify-items:center}\n  .count{justify-content:center}\n  .modes,.kinds{justify-content:center}\n  .stage__head{left:var(--pad);right:var(--pad)}\n  .now{left:var(--pad);right:var(--pad)}\n  .band__side p{margin-left:auto;margin-right:auto}\n  .foot{flex-direction:column;justify-content:center}\n  .foot ul{justify-content:center}\n  .nav__links{font-size:.92rem}\n  .nav__links .hide-sm{display:none}\n  .nav__logo{width:84px}\n  .drop{grid-template-columns:1fr;gap:1rem}\n  .count b{font-size:clamp(2.3rem,12vw,3.2rem)}\n  .drop .btn{justify-self:center}\n  .stage__head{top:calc(4.2rem + env(safe-area-inset-top));width:auto;right:var(--pad)}\n  .stage__head h2{font-size:2.1rem}\n  .stage__head p{display:none}\n  .modes{margin-top:.7rem}\n  .now{width:auto;bottom:calc(1.4rem + var(--safe-b))}\n  .rail{width:1rem;right:.6rem;top:auto;height:38svh;bottom:calc(6rem + var(--safe-b))}\n  .rail__tick{display:none}\n  .stage.is-open .stage__head{opacity:0;pointer-events:none}\n  .sheet{left:.75rem;right:.75rem;width:auto;bottom:calc(.75rem + var(--safe-b))}\n  .band{grid-template-columns:1fr}\n  .band h2,.band__side{grid-column:1 / -1}\n}\n@media (prefers-reduced-motion:reduce){\n  *,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important}\n  .scroller::after{animation:none}\n}\n";
const FONTFACE = "@font-face{font-family:\"Benzin\";src:local(\"Benzin Medium\"),local(\"Benzin-Medium\"),url(\"__BASE__assets/fonts/Benzin-Medium.woff2\") format(\"woff2\");font-weight:500;font-display:swap}\n@font-face{font-family:\"Benzin\";src:local(\"Benzin Bold\"),local(\"Benzin-Bold\"),url(\"__BASE__assets/fonts/Benzin-Bold.woff2\") format(\"woff2\");font-weight:700;font-display:swap}\n";
const MARKUP = "\n\n<nav class=\"nav\" id=\"nav\" aria-label=\"Main\">\n  <a href=\"#top\" aria-label=\"Slater, back to top\"><img class=\"nav__logo\" src=\"__BASE__assets/slater-scratch.png\" alt=\"Slater\" width=\"607\" height=\"107\"></a>\n  <ul class=\"nav__links disp\">\n    <li><a class=\"sweep\" href=\"#records\">Music</a></li>\n    <li class=\"hide-sm\" aria-hidden=\"true\"><span class=\"x\">\u2671</span></li>\n    <li class=\"hide-sm\"><a class=\"sweep\" href=\"#merch\">Shop</a></li>\n    <li aria-hidden=\"true\"><span class=\"x\">\u2671</span></li>\n    <li><a class=\"hl\" data-laylo href=\"https://laylo.com/slatervv\" target=\"_blank\" rel=\"noopener\">Sign Up</a></li>\n  </ul>\n</nav>\n\n<header class=\"hero\" id=\"top\">\n  <div class=\"hero__photo\"><img src=\"__BASE__assets/hero-beach.jpg\" srcset=\"__BASE__assets/hero-beach-1200.jpg 1200w, __BASE__assets/hero-beach.jpg 2400w\" sizes=\"100vw\" alt=\"Slater on the beach by the pier at sunset, in a blue hoodie\" fetchpriority=\"high\"></div>\n  <h1 class=\"hero__mark\"><img src=\"__BASE__assets/slater-scratch.png\" alt=\"Slater\" width=\"607\" height=\"107\"></h1>\n  <div class=\"drop\">\n    <p class=\"drop__what disp\">The new album <span class=\"x\" aria-hidden=\"true\">\u2671</span><br><span class=\"hl\">November 17</span></p>\n    <div class=\"count disp\" id=\"count\" role=\"timer\" aria-label=\"Time until the new album\">\n      <div><b data-u=\"d\">00</b><small>days</small></div>\n      <div><b data-u=\"h\">00</b><small>hours</small></div>\n      <div><b data-u=\"m\">00</b><small>min</small></div>\n      <div><b data-u=\"s\">00</b><small>sec</small></div>\n    </div>\n    <a class=\"btn disp\" data-laylo href=\"https://laylo.com/slatervv\" target=\"_blank\" rel=\"noopener\">Get notified on release</a>\n  </div>\n</header>\n\n<section class=\"records\" id=\"records\" aria-label=\"Discography\">\n  <div class=\"stage\" id=\"stage\">\n    <canvas id=\"gl\" aria-hidden=\"true\"></canvas>\n    <div class=\"loader disp\" id=\"loader\">Pulling records\u2026</div>\n\n    <div class=\"stage__head\">\n      <h2 class=\"disp\" id=\"stackTitle\">Latest</h2>\n      <p id=\"stackLede\">The newest releases. Scroll down the stack and click a sleeve to pull the record out.</p>\n      <div class=\"modes disp\" role=\"group\" aria-label=\"Which records to show\">\n        <button type=\"button\" data-mode=\"latest\" aria-pressed=\"true\"><span class=\"t\">Latest</span></button>\n        <span class=\"x\" aria-hidden=\"true\">\u2671</span>\n        <button type=\"button\" data-mode=\"all\" aria-pressed=\"false\"><span class=\"t\">All</span><small id=\"allCount\"></small></button>\n      </div>\n      <div class=\"kinds disp\" id=\"kinds\" role=\"group\" aria-label=\"Filter by type\"></div>\n    </div>\n\n    <p class=\"now\" id=\"now\" aria-live=\"polite\"></p>\n\n    <div class=\"rail\" id=\"rail\" aria-label=\"Release years\">\n      <div class=\"rail__line\"></div><div class=\"rail__fill\" id=\"fill\"></div>\n    </div>\n\n    <article class=\"sheet\" id=\"sheet\" aria-hidden=\"true\">\n      <div class=\"sheet__top\">\n        <p class=\"sheet__kind\" id=\"sKind\"></p>\n        <button class=\"sheet__icon\" id=\"close\" aria-label=\"Put the record back\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 18 18\" aria-hidden=\"true\"><path d=\"M3 3l12 12M15 3L3 15\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg></button>\n      </div>\n      <h3 class=\"disp\" id=\"sTitle\"></h3>\n      <div class=\"sheet__bar\">\n        <a class=\"listen\" id=\"sApple\" target=\"_blank\" rel=\"noopener\" aria-label=\"Play on Apple Music\" title=\"Apple Music\"><svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M19 3.2v11.6a3.1 3.1 0 1 1-2-2.9V7.4l-8 1.8v7.9a3.1 3.1 0 1 1-2-2.9V5.6c0-.5.3-.9.8-1l10-2.2c.6-.1 1.2.3 1.2.8z\"/></svg></a>\n        <a class=\"listen\" id=\"sSpotify\" target=\"_blank\" rel=\"noopener\" aria-label=\"Play on Spotify\" title=\"Spotify\"><svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10.5\" fill=\"currentColor\"/><path d=\"M6.8 9.3c3.7-1.1 7.6-.8 10.6.9M7.4 12.4c3.1-.9 6.3-.6 8.8.8M8 15.3c2.5-.7 4.9-.5 6.9.6\" fill=\"none\" stroke=\"var(--sand)\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></svg></a>\n        <span class=\"sheet__step\">\n          <button class=\"sheet__icon\" id=\"prev\" aria-label=\"Newer record\"><svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"M4 10l4-4 4 4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>\n          <button class=\"sheet__icon\" id=\"next\" aria-label=\"Older record\"><svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"M4 6l4 4 4-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>\n        </span>\n      </div>\n    </article>\n\n    <ul class=\"sr\" id=\"srList\"></ul>\n  </div>\n</section>\n\n<section class=\"merch\" id=\"merch\" aria-labelledby=\"merchTitle\">\n  <div class=\"merch__head\">\n    <h2 class=\"disp\" id=\"merchTitle\">Merch</h2>\n    <div class=\"merch__shops\">\n      <p>Tees, tanks, the hoodie, the trucker hat and ESI 2 on tape, CD and vinyl. Two shops carry it.</p>\n      <div class=\"merch__btns\">\n        <a class=\"btn disp\" href=\"https://slatervadavada.bigcartel.com/\" target=\"_blank\" rel=\"noopener\">Slater shop</a>\n        <a class=\"btn btn--ghost disp\" href=\"https://lagoonroommerch.com/collections/slater\" target=\"_blank\" rel=\"noopener\">Lagoon Room</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"runway\" id=\"runway\">\n    <ul class=\"runway__track\" id=\"runwayTrack\"></ul>\n  </div>\n</section>\n\n<section class=\"band\">\n  <h2 class=\"disp\">Hear it first</h2>\n  <div class=\"band__side\">\n    <p>New songs, tour dates and the album pre-save go to this list before anywhere else.</p>\n    <a class=\"btn disp\" data-laylo href=\"https://laylo.com/slatervv\" target=\"_blank\" rel=\"noopener\">Sign up for updates</a>\n  </div>\n</section>\n\n<div class=\"bears-wrap\"><img class=\"bears\" src=\"__BASE__assets/ca-bears.png\" alt=\"\" width=\"1400\" height=\"297\" loading=\"lazy\"></div>\n<footer class=\"foot\">\n  <img src=\"__BASE__assets/slater-scratch.png\" alt=\"Slater\" width=\"607\" height=\"107\">\n  <ul class=\"disp\">\n    <li><a class=\"sweep\" href=\"https://www.youtube.com/@slater_vv4730\" target=\"_blank\" rel=\"noopener\">YouTube</a></li>\n    <li aria-hidden=\"true\"><span class=\"x\">\u2671</span></li>\n    <li><a class=\"sweep\" href=\"https://open.spotify.com/artist/0axqUvPmS7PqZp0xJTdzdG\" target=\"_blank\" rel=\"noopener\">Spotify</a></li>\n    <li aria-hidden=\"true\"><span class=\"x\">\u2671</span></li>\n    <li><a class=\"sweep\" href=\"https://music.apple.com/us/artist/slater/1547971950\" target=\"_blank\" rel=\"noopener\">Apple Music</a></li>\n    <li aria-hidden=\"true\"><span class=\"x\">\u2671</span></li>\n    <li><a class=\"sweep\" href=\"https://www.instagram.com/slater_vv/\" target=\"_blank\" rel=\"noopener\">Instagram</a></li>\n    <li aria-hidden=\"true\"><span class=\"x\">\u2671</span></li>\n    <li><a class=\"sweep\" href=\"https://www.tiktok.com/@slater_vv\" target=\"_blank\" rel=\"noopener\">TikTok</a></li>\n  </ul>\n</footer>\n\n\n";

function headOnce(id, make) {
  if (document.getElementById(id)) return document.getElementById(id);
  const el = make(); el.id = id; document.head.appendChild(el); return el;
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

function main(THREE, RoomEnvironment, root, scroller) {


/* ================= catalog (Apple Music, Nov 2026), newest first ================= */
const RAW = [
[6826082848,"Frozen in the Past - Single","2026-10-27",1,"Music221/v4/bd/41/5b/bd415b1b-d9d8-7cdd-4210-99a4f2105d81"],
[6808647287,"I Tried to Make You Fly - Single","2026-09-15",1,"Music221/v4/b2/b9/8e/b2b98e1a-0961-cfaf-eb39-d1232fcea8d9"],
[1819352937,"ESI 2","2025-06-24",10,"Music221/v4/2b/c6/9f/2bc69f4d-4949-2ca9-cb9c-3b910314115c"],
[1815061464,"No Mas - Single","2025-05-20",1,"Music211/v4/81/42/ab/8142ab72-2d3d-301f-a550-08fdadbf7294"],
[1810938166,"So Much Blood - Single","2025-04-29",1,"Music211/v4/3e/64/01/3e640188-7c6d-dc2d-6591-6ed0a8e4a1ee"],
[1753612202,"FM Thoughts","2024-06-28",8,"Music211/v4/c2/6d/c6/c26dc61e-204a-3211-036e-d1ed6a6daef1"],
[1742342169,"Lost Industries - Single","2024-05-05",1,"Music211/v4/52/98/6a/52986a3a-a1c9-93cc-bff2-d6fc109a9f77"],
[1731021594,"He's Always Down for Something - Single","2024-02-25",1,"Music112/v4/2b/7d/d0/2b7dd0c4-fb0e-bbf9-1231-6eb1b63d73fa"],
[1697261851,"Deep Cuts (2013-2017)","2023-07-16",12,"Music126/v4/07/03/40/07034037-90e3-3a96-4a25-73e3f79eb83f"],
[1682680711,"Beneath the Motel - EP","2023-05-07",6,"Music116/v4/4c/60/f9/4c60f988-0097-5f43-7919-d96563478ad6"],
[1679455572,"She Looked Just Like a Doll - Single","2023-04-02",1,"Music116/v4/c8/18/8d/c8188d81-da54-cf78-fbf2-6da956a34573"],
[1649890591,"No H8ters in My Vision - Single","2022-10-28",1,"Music122/v4/b3/42/56/b34256d3-dbb7-26bd-16e6-b55663357100"],
[1634123023,"Burnt - Single","2022-07-24",1,"Music112/v4/83/44/3f/83443fc5-7253-f035-fdf2-f06b2210e381"],
[1606566460,"Spy on the Wall - EP","2022-02-13",5,"Music116/v4/28/28/3d/28283d85-0bf5-28fc-878e-8e92ef96ee5d"],
[1579740368,"Esi","2021-08-08",7,"Music125/v4/e2/50/da/e250da3d-3182-d679-c5fc-67c655e9d428"],
[1577550371,"Trix (feat. Enjoy) - Single","2021-07-25",1,"Music125/v4/ce/73/cb/ce73cb04-616c-4fe4-95cd-04376c7ef047"],
[1563180607,"Pull Up On the Block - Single","2021-04-18",1,"Music125/v4/52/be/04/52be042e-72d2-f15e-1de0-0b72252b3ab9"],
[1557188541,"Imma Jerk - Single","2021-03-14",1,"Music124/v4/c7/b5/39/c7b53981-9d39-db4e-cbab-3e4ccac94b83"],
[1547680430,"i-Spy (Stay Fly) - Single","2021-01-10",1,"Music114/v4/e1/e4/d8/e1e4d837-f9b2-f099-671f-9be8b0d0eb0c"],
[1538092346,"Blood Again (feat. Slater) - Single","2020-10-31",1,"Music124/v4/68/0e/2f/680e2f07-74f5-5596-1676-9b7122688949"],
[1536074568,"Port City - EP","2020-10-25",6,"Music124/v4/a6/6f/91/a66f91da-0ae3-69fd-1909-e998d95061f0"],
[1536067173,"Load Up the Docs - Single","2020-10-23",1,"Music114/v4/c7/ab/68/c7ab68c7-f986-f6af-0f87-644c75f1d836"],
[1529961584,"When 'En Route (feat. Wondha Mountain) - Single","2020-08-30",1,"Music114/v4/76/03/d1/7603d15d-dc61-1c21-55f5-28651fe54c2b"],
[1510129396,"Open House - Single","2020-04-26",2,"Music123/v4/c8/84/e3/c884e325-e47d-2d88-aa2a-4a92bb1d5df1"],
[1504018245,"Ur'0000s - Single","2020-03-24",1,"Music123/v4/13/90/f5/1390f5ce-01ac-473e-d36b-f47dc20b2a94"],
[1497206122,"Spies Can't Get Caught - EP","2020-02-02",4,"Music113/v4/4c/ca/b3/4ccab3da-620e-191f-4c99-5969279801e3"],
[1495830632,"Spies Can't Get Caught - Single","2020-01-19",1,"Music113/v4/d5/0a/a6/d50aa6c1-09b8-9e06-e028-f628fef03a09"],
[1470329009,"Flight 777","2019-06-27",10,"Music113/v4/97/a0/05/97a00512-f220-07c8-ce70-c9ec181a5c1d"],
[1468854052,"I'll Put It on Metal - Single","2019-06-17",1,"Music113/v4/ac/30/ae/ac30ae17-1f6d-259e-80ab-36acc271401d"],
[1457305218,"Lights Out! - Single","2019-03-21",1,"Music113/v4/5f/62/a0/5f62a093-64dd-1995-2c81-abacde8e0075"],
[1447727105,"Desertion (feat. Puzzle & Wyatt) - Single","2018-12-20",1,"Music114/v4/2c/74/4d/2c744d1a-b372-4d70-c0b6-dede859d1abb"],
[1440400061,"Father - EP","2018-10-26",5,"Music118/v4/1b/1b/a4/1b1ba4ac-1d9b-4621-fa4f-81f1f244a501"],
[1400832343,"777 - EP","2018-06-15",5,"Music125/v4/73/aa/42/73aa4235-2992-f756-3019-0f16175722da"],
[1383510025,"Ghostie (feat. Kypha) - Single","2018-05-10",1,"Music114/v4/15/1d/ba/151dba54-e634-113c-7ac0-b8a64d2f32a0"],
[1329510042,"23","2017-12-24",10,"Music118/v4/af/ac/4c/afac4cdc-0d1d-34b7-7b7d-7fbb21e2abc0"],
];
const ALL = RAW.map(([id,name,date,tracks,art])=>{
  const kind = / - EP$/.test(name) ? 'EP' : / - Single$/.test(name) ? 'Single' : 'Album';
  return { id, kind, tracks, date, year:+date.slice(0,4), title:name.replace(/ - (EP|Single)$/,''),
    local:`${BASE}covers/${id}.jpg`,
    remote:`https://is1-ssl.mzstatic.com/image/thumb/${art}/artwork.jpg/600x600bb.jpg`,
    url:`https://music.apple.com/us/album/${id}` };
});

/* "Latest" = what came out within two years of the newest release, never fewer than 3 or more than 5.
   Updates itself when a new release is added to the list above. */
function latestSet(items){
  const newest = new Date(items[0].date+'T12:00:00');
  const cutoff = new Date(newest); cutoff.setMonth(cutoff.getMonth()-24);
  const recent = items.filter(it=> new Date(it.date+'T12:00:00') >= cutoff);
  return items.slice(0, Math.min(5, Math.max(3, recent.length)));
}
const LATEST = new Set(latestSet(ALL).map(i=>i.id));

/* ================= countdown ================= */
// Release: Nov 17, 2026, midnight Pacific (Orange County). Change here if the date moves.
const RELEASE = new Date('2026-11-17T00:00:00-08:00');
const units = {d:root.querySelector('[data-u=d]'),h:root.querySelector('[data-u=h]'),m:root.querySelector('[data-u=m]'),s:root.querySelector('[data-u=s]')};
function tick(){
  let t = Math.max(0, RELEASE - Date.now())/1000;
  if (t<=0){ root.querySelector('.drop__what').innerHTML='The new album <span class="x" aria-hidden="true">♱</span><br><span class="hl">Out now</span>'; root.getElementById('count').hidden=true; return; }
  const d=Math.floor(t/86400); t-=d*86400; const h=Math.floor(t/3600); t-=h*3600; const m=Math.floor(t/60); const s=Math.floor(t-m*60);
  units.d.textContent=String(d).padStart(2,'0'); units.h.textContent=String(h).padStart(2,'0');
  units.m.textContent=String(m).padStart(2,'0'); units.s.textContent=String(s).padStart(2,'0');
}
tick(); setInterval(tick,1000);

const nav=root.getElementById('nav');
scroller.addEventListener('scroll',()=>nav.classList.toggle('solid', scroller.scrollTop > innerHeight*.6),{passive:true});


/* ================= merch runway ================= */
{
  const BC='https://slatervadavada.bigcartel.com/', LR='https://lagoonroommerch.com/collections/slater';
  const MERCH=[
    ['m01','Cali Swag 3ra T blk','$32',BC],['m05','Sky Blue Logo Tee','From $32',LR],['m06','Graffiti Hoodie','$55',LR],
    ['m03','White Hibiscus Tank','$35',LR],['m10','Graffiti Star Trucker Hat','$30',LR],['m12','ESI 2 Tape','$20',LR],
    ['m08','ESI II World Tour Tee 2025','$35',LR],['m04','Pink Hibiscus Tank','$35',LR],['m07','Slater Sticker Bundle','$12',LR],
    ['m09','Graffiti Star Black Tee','$32',LR],['m14','ESI 2 Vinyl','$30',LR,1],['m02','Cali Swag 3ra T','$32',BC],
    ['m13','ESI 2 CD','$20',LR,1],['m11','Graffiti Star White Lighter','$25',LR,1],
  ];
  const LAYERS=[-4,-2.5,-1,1,2.5,4];   // px of "thickness" behind the face
  const card=([img,name,price,url,sold],i,dup)=>`<li class="piece"${dup?' aria-hidden="true"':''}><a href="${url}" target="_blank" rel="noopener"${dup?' tabindex="-1"':''}>
    <div class="pickup" style="--d:-${(i*0.73)%2.8}s;--spin:${6+(i%4)}s">
      <div class="pickup__float"><div class="pickup__spin">
        ${LAYERS.map(z=>`<img class="l" src="${BASE}merch/${img}.png" alt="" style="transform:translateZ(${z}px)">`).join('')}
        <img src="${BASE}merch/${img}.png" alt="${dup?'':name}" style="transform:translateZ(5px)" loading="lazy">
        <img src="${BASE}merch/${img}.png" alt="" style="transform:translateZ(-5px) rotateY(180deg)" loading="lazy">
      </div></div>
      <span class="pickup__shadow"></span>
    </div>
    <span class="piece__name disp">${name}</span>
    <span class="piece__price">${price}${sold?'<span class="hl">Sold out</span>':''}</span>
  </a></li>`;
  const track=root.getElementById('runwayTrack');
  track.innerHTML = MERCH.map((m,i)=>card(m,i,false)).join('') + MERCH.map((m,i)=>card(m,i,true)).join('');
  const runway=root.getElementById('runway');
  // only animate while on screen
  new IntersectionObserver(([e])=>runway.classList.toggle('paused',!e.isIntersecting)).observe(runway);
}

/* ================= 3D stack ================= */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = root.getElementById('gl');
const stage = root.getElementById('stage');
const section = root.getElementById('records');
const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true, powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth<760 ? 1.5 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(new THREE.Color('#241e18'), 4, 12);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
const camera = new THREE.PerspectiveCamera(32, 1, .1, 60);
scene.add(new THREE.AmbientLight('#e9dfcf', .55));
const key = new THREE.DirectionalLight('#ffe2b8', 1.3); key.position.set(-2,3,6); scene.add(key);
const rim = new THREE.DirectionalLight('#8e9ca7', 1.3); rim.position.set(-4,-1,-3); scene.add(rim);
const maxAniso = renderer.capabilities.getMaxAnisotropy();

const SPACING = 1.22;                       // vertical gap between sleeves (sleeve = 1 unit)
const sleeveGeo = new THREE.BoxGeometry(1, 1, .02);
const discGeo = new THREE.CylinderGeometry(.475,.475,.006,128,1);
const edgeMat = new THREE.MeshStandardMaterial({color:'#d9cfbb', roughness:.95});
const discSideMat = new THREE.MeshStandardMaterial({color:'#050505', roughness:.5, envMapIntensity:.3});
const rand = n => { const x=Math.sin(n*127.1+311.7)*43758.5453; return x-Math.floor(x); };

/* ---------- a lived-in copy: ring wear, soft edges, a store sticker on some ---------- */
const COVER_PX = innerWidth<760 ? 512 : 768;
const noise = document.createElement('canvas'); noise.width=noise.height=128;
{ const g=noise.getContext('2d'), d=g.createImageData(128,128);
  for(let i=0;i<d.data.length;i+=4){ const v=Math.random()*255; d.data[i]=d.data[i+1]=d.data[i+2]=v; d.data[i+3]=255; }
  g.putImageData(d,0,0); }

function wearSleeve(g,S,seed){
  const R=n=>rand(seed*13.7+n);
  // paper tone + grain
  g.globalCompositeOperation='multiply'; g.fillStyle='rgba(238,226,204,.10)'; g.fillRect(0,0,S,S);
  g.globalCompositeOperation='overlay'; g.globalAlpha=.07; g.fillStyle=g.createPattern(noise,'repeat'); g.fillRect(0,0,S,S);
  g.globalAlpha=1; g.globalCompositeOperation='screen';
  // ring wear where the record pressed through the jacket
  const cx=S*(.5+(R(1)-.5)*.05), cy=S*(.5+(R(2)-.5)*.05), r=S*.455, w=S*.025, a=.05+R(3)*.05;
  let rg=g.createRadialGradient(cx,cy,r-w,cx,cy,r+w);
  rg.addColorStop(0,'rgba(255,248,235,0)'); rg.addColorStop(.5,`rgba(255,248,235,${a})`); rg.addColorStop(1,'rgba(255,248,235,0)');
  g.fillStyle=rg; g.fillRect(0,0,S,S);
  rg=g.createRadialGradient(cx,cy,S*.15,cx,cy,S*.19);
  rg.addColorStop(0,'rgba(255,248,235,0)'); rg.addColorStop(.5,`rgba(255,248,235,${a*.6})`); rg.addColorStop(1,'rgba(255,248,235,0)');
  g.fillStyle=rg; g.fillRect(0,0,S,S);
  // edges handled for years: a soft light rim, stronger at the corners
  const e=S*.03;
  [[0,0,0,e],[0,S,0,S-e],[0,0,e,0],[S,0,S-e,0]].forEach(([x0,y0,x1,y1])=>{
    const lg=g.createLinearGradient(x0,y0,x1,y1); lg.addColorStop(0,'rgba(255,250,240,.12)'); lg.addColorStop(1,'rgba(255,250,240,0)');
    g.fillStyle=lg; g.fillRect(0,0,S,S);
  });
  [[0,0],[S,0],[0,S],[S,S]].forEach(([x,y],k)=>{
    const cg=g.createRadialGradient(x,y,0,x,y,S*(.04+R(10+k)*.04)); cg.addColorStop(0,'rgba(255,250,240,.28)'); cg.addColorStop(1,'rgba(255,250,240,0)');
    g.fillStyle=cg; g.fillRect(0,0,S,S);
  });
  // a couple of faint scuffs
  g.strokeStyle='rgba(255,250,240,.10)'; g.lineWidth=S*.002;
  for(let k=0;k<3;k++){ const x=R(20+k)*S, y=R(30+k)*S, l=S*(.05+R(40+k)*.1), an=R(50+k)*Math.PI;
    g.beginPath(); g.moveTo(x,y); g.lineTo(x+Math.cos(an)*l,y+Math.sin(an)*l); g.stroke(); }
  g.globalCompositeOperation='source-over';
  // store price sticker on some copies
  if(R(60)>.55){
    const price=['$12','$15','$18','$9.99','$14'][Math.floor(R(61)*5)];
    g.save(); g.translate(S*(.74+R(62)*.12),S*(.08+R(63)*.06)); g.rotate((R(64)-.5)*.25);
    g.fillStyle='rgba(246,241,230,.94)'; g.shadowColor='rgba(0,0,0,.18)'; g.shadowBlur=S*.006; g.shadowOffsetY=S*.002;
    const w2=S*.15, h2=S*.075; g.beginPath(); g.roundRect(-w2/2,-h2/2,w2,h2,S*.01); g.fill(); g.shadowColor='transparent';
    g.fillStyle='#b5382c'; g.font=`italic 600 ${S*.036}px Archivo, sans-serif`; g.textAlign='center'; g.textBaseline='middle';
    g.fillText(price,0,S*.002); g.restore();
  }
}
function coverTexture(draw, seed){
  const cv=document.createElement('canvas'); cv.width=cv.height=COVER_PX; const g=cv.getContext('2d');
  draw(g,COVER_PX); wearSleeve(g,COVER_PX,seed);
  const t=new THREE.CanvasTexture(cv); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=maxAniso; return t;
}

/* typographic stand-in sleeve, shown until (or if) the cover art can't load */
const STAND_IN = ['#ede5d3','#8e9ca7','#3a3227','#e5cda5','#564431'];
function drawStandIn(item,i){ return (g,S)=>{
  const bg=STAND_IN[i%STAND_IN.length], dark=['#3a3227','#564431','#8e9ca7'].includes(bg);
  g.fillStyle=bg; g.fillRect(0,0,S,S); g.fillStyle=dark?'#ede5d3':'#1f1a15';
  g.font=`italic 700 ${S*.11}px Archivo, sans-serif`;
  const words=item.title.split(' '); let y=S*.2, line='';
  for(const w of words){ const t=line+w+' '; if(g.measureText(t).width>S*.84 && line){ g.fillText(line,S*.07,y); y+=S*.12; line=w+' '; } else line=t; }
  g.fillText(line,S*.07,y);
  g.font=`italic 500 ${S*.045}px Archivo, sans-serif`; g.fillText(`Slater ♱ ${item.year}`,S*.07,S*.92);
};}

/* record: grooves, the cover as the centre label, light handling marks */
const DISC_PX = 512;
const grooves = document.createElement('canvas'); grooves.width=grooves.height=DISC_PX;
{ const g=grooves.getContext('2d'), c=DISC_PX/2;
  g.fillStyle='#0a0a0b'; g.beginPath(); g.arc(c,c,c,0,7); g.fill();
  for(let r=c*.36; r<c*.985; r+=1.15){ g.strokeStyle=`rgba(255,255,255,${.02+Math.random()*.045})`; g.lineWidth=.6; g.beginPath(); g.arc(c,c,r,0,7); g.stroke(); }
  [.52,.63,.74,.86].forEach(f=>{ g.strokeStyle='rgba(0,0,0,.9)'; g.lineWidth=2.2; g.beginPath(); g.arc(c,c,c*f,0,7); g.stroke(); });
  const cg=g.createConicGradient(0,c,c);
  cg.addColorStop(0,'rgba(255,255,255,.10)'); cg.addColorStop(.08,'rgba(255,255,255,0)'); cg.addColorStop(.5,'rgba(255,255,255,.10)'); cg.addColorStop(.58,'rgba(255,255,255,0)'); cg.addColorStop(1,'rgba(255,255,255,.10)');
  g.fillStyle=cg; g.beginPath(); g.arc(c,c,c,0,7); g.arc(c,c,c*.35,0,7,true); g.fill();
}
function discTexture(img, seed){
  const cv=document.createElement('canvas'); cv.width=cv.height=DISC_PX; const g=cv.getContext('2d'), c=DISC_PX/2, R=n=>rand(seed*7.1+n);
  g.drawImage(grooves,0,0);
  // hairline marks from being played, not damage
  g.strokeStyle='rgba(255,255,255,.07)'; g.lineWidth=.7;
  for(let k=0;k<4;k++){ const r=c*(.45+R(k)*.5), a=R(10+k)*6.28; g.beginPath(); g.arc(c,c,r,a,a+.2+R(20+k)*.5); g.stroke(); }
  g.fillStyle='rgba(255,255,255,.18)';
  for(let k=0;k<14;k++){ const r=c*(.4+R(30+k)*.58), a=R(50+k)*6.28; g.fillRect(c+Math.cos(a)*r, c+Math.sin(a)*r, 1.2, 1.2); }
  const lr=c*.34;
  g.save(); g.beginPath(); g.arc(c,c,lr,0,7); g.clip();
  if(img) g.drawImage(img,c-lr,c-lr,lr*2,lr*2); else { g.fillStyle='#ede5d3'; g.fillRect(c-lr,c-lr,lr*2,lr*2); }
  g.globalCompositeOperation='multiply'; g.fillStyle='rgba(238,226,204,.18)'; g.fillRect(c-lr,c-lr,lr*2,lr*2);
  g.restore();
  g.fillStyle='#0a0a0b'; g.beginPath(); g.arc(c,c,c*.025,0,7); g.fill();
  const t=new THREE.CanvasTexture(cv); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=maxAniso; return t;
}
function backTexture(item, color, seed){
  return coverTexture((g,S)=>{
    g.fillStyle=color; g.fillRect(0,0,S,S); g.fillStyle='rgba(0,0,0,.28)'; g.fillRect(0,0,S,S);
    g.fillStyle='rgba(255,255,255,.88)'; g.font=`italic 700 ${S*.09}px Archivo, sans-serif`; g.fillText('Slater',S*.07,S*.17);
    g.font=`italic 600 ${S*.055}px Archivo, sans-serif`; wrap(g,item.title,S*.07,S*.28,S*.86,S*.07);
    g.font=`500 ${S*.04}px Archivo, sans-serif`; g.fillStyle='rgba(255,255,255,.65)';
    g.fillText(`${item.kind}  ♱  ${item.year}  ♱  ${item.tracks} ${item.tracks===1?'track':'tracks'}`,S*.07,S*.92);
  }, seed+99);
}
function wrap(g,text,x,y,w,lh){ let line=''; for(const word of text.split(' ')){ const t=line+word+' '; if(g.measureText(t).width>w && line){ g.fillText(line,x,y); line=word+' '; y+=lh; } else line=t; } g.fillText(line,x,y); }
function avgColor(img){ const cv=document.createElement('canvas'); cv.width=cv.height=8; const g=cv.getContext('2d'); g.drawImage(img,0,0,8,8); const d=g.getImageData(0,0,8,8).data; let r=0,gg=0,b=0; for(let i=0;i<d.length;i+=4){r+=d[i];gg+=d[i+1];b+=d[i+2];} const n=d.length/4; return `rgb(${r/n|0},${gg/n|0},${b/n|0})`; }
function loadImage(item){
  return new Promise(res=>{
    const tryLoad=(src,next)=>{ const im=new Image(); im.crossOrigin='anonymous'; im.onload=()=>res(im); im.onerror=next; im.src=src; };
    tryLoad(item.local, ()=>tryLoad(item.remote, ()=>res(null)));
  });
}

/* the pile: tipped back a little, like records on a table seen from above */
const PILE_TILT = -.38;
const pile = new THREE.Group(); pile.rotation.x = PILE_TILT; scene.add(pile);
const W = new THREE.Vector3();
const shadowGeo = new THREE.PlaneGeometry(1.22,1.22);
const shadowTex = (()=>{ const cv=document.createElement('canvas'); cv.width=cv.height=128; const g=cv.getContext('2d');
  g.shadowColor='#fff'; g.shadowBlur=14; g.shadowOffsetX=600; g.fillStyle='#fff'; g.fillRect(16-600,16,96,96);   // blur via shadow (works in Safari too)
  const t=new THREE.CanvasTexture(cv); return t; })();
shadowTex.colorSpace = THREE.NoColorSpace;

const records = ALL.map((item,i)=>{
  const group = new THREE.Group(), tilt = new THREE.Group(); group.add(tilt);
  const frontMat = new THREE.MeshStandardMaterial({map:coverTexture(drawStandIn(item,i), i), roughness:.7, envMapIntensity:.35, transparent:true});
  const backMat  = new THREE.MeshStandardMaterial({color:'#3a3227', roughness:.85, envMapIntensity:.35, transparent:true});
  const sleeve = new THREE.Mesh(sleeveGeo,[edgeMat,edgeMat,edgeMat,edgeMat,frontMat,backMat]);
  tilt.add(sleeve);
  const discPivot = new THREE.Group(), spin = new THREE.Group();
  const discTopMat = new THREE.MeshStandardMaterial({map:discTexture(null,i), roughness:.6, metalness:0, envMapIntensity:.15, transparent:true});
  const disc = new THREE.Mesh(discGeo,[discSideMat,discTopMat,discSideMat]);
  disc.rotation.x = Math.PI/2;
  spin.add(disc); discPivot.add(spin); discPivot.position.set(.15,0,-.015); tilt.add(discPivot);
  sleeve.userData.index = i; disc.userData.index = i;
  // soft contact shadow on the record beneath
  const shadow = new THREE.Mesh(shadowGeo, new THREE.MeshBasicMaterial({map:shadowTex, color:'#000', transparent:true, opacity:.5, depthWrite:false}));
  shadow.position.set(.04,-.055,-.024); tilt.add(shadow);
  pile.add(group);
  const home = { x:(rand(i+5)-.5)*.2, y:(rand(i+50)-.5)*.1, rz:(rand(i+20)-.5)*.26 };
  const rec = { item, group, tilt, sleeve, shadow, discPivot, spin, frontMat, backMat, discTopMat, home,
    slot:i, visible:false, phase:rand(i+3)*Math.PI*2,
    pos:new THREE.Vector3(home.x, home.y - Math.min(i,7)*.17, -Math.min(i,7)*.045), rot:new THREE.Euler(0,0,home.rz),
    out:.15, hover:0, fade:0, loaded:false };
  rec.load = ()=>{
    if(rec.loaded) return; rec.loaded=true;
    loadImage(item).then(img=>{
      if(!img) return;
      frontMat.map.dispose(); frontMat.map=coverTexture((g,S)=>g.drawImage(img,0,0,S,S), i); frontMat.needsUpdate=true;
      discTopMat.map.dispose(); discTopMat.map=discTexture(img,i); discTopMat.needsUpdate=true;
      backMat.map=backTexture(item,avgColor(img),i); backMat.color.set('#ffffff'); backMat.needsUpdate=true;
      root.getElementById('loader').classList.add('done');
    });
  };
  return rec;
});
setTimeout(()=>root.getElementById('loader').classList.add('done'),3500);

/* ---------- Latest / All, then type filters ---------- */
let mode='latest', kind='All', list=[];
const kindsEl=root.getElementById('kinds');
root.getElementById('allCount').textContent=ALL.length;
['All','Album','EP','Single'].forEach(k=>{
  if(k!=='All'){ const sep=document.createElement('span'); sep.className='x'; sep.setAttribute('aria-hidden','true'); sep.textContent='♱'; kindsEl.appendChild(sep); }
  const n = k==='All'?ALL.length:ALL.filter(a=>a.kind===k).length;
  const b=document.createElement('button'); b.type='button'; b.dataset.kind=k; b.setAttribute('aria-pressed', k==='All');
  b.innerHTML=`<span class="t">${k==='All'?'Everything':k+'s'}</span><small>${n}</small>`;
  b.onclick=()=>{ kind=k; apply(true); };
  kindsEl.appendChild(b);
});
root.querySelectorAll('.modes button').forEach(b=>b.onclick=()=>{ mode=b.dataset.mode; kind='All'; apply(true); });

function apply(jump){
  closeRecord();
  root.querySelectorAll('.modes button').forEach(b=>b.setAttribute('aria-pressed', b.dataset.mode===mode));
  kindsEl.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed', b.dataset.kind===kind));
  kindsEl.classList.toggle('on', mode==='all'); stage.classList.toggle('mode-all', mode==='all');
  root.getElementById('stackTitle').textContent = mode==='latest' ? 'Latest' : 'Every record';
  root.getElementById('stackLede').textContent = mode==='latest'
    ? 'The newest releases. Scroll down the stack and click a sleeve to pull the record out.'
    : `All ${ALL.length} releases, newest on top. Scroll down the stack and click a sleeve to pull the record out.`;
  list = records.filter(r=> mode==='latest' ? LATEST.has(r.item.id) : (kind==='All' || r.item.kind===kind));
  records.forEach(r=>{ r.visible=list.includes(r); });
  list.forEach((r,i)=>{ r.slot=i; r.load(); });
  section.style.setProperty('--track-h', `${100 + Math.max(1,list.length-1)*(mobile?42:48)}vh`);
  buildRail(); buildSnaps(); readProgress();
  if(jump) scroller.scrollTo({top:section.offsetTop, behavior:reduce?'auto':'smooth'});
}

root.getElementById('srList').innerHTML = ALL.map(a=>`<li><a href="${a.url}">${a.title} (${a.kind}, ${a.year})</a></li>`).join('');

/* ---------- scroll → stack position ---------- */
let progress=0, smooth=0;
/* phones: gentle scroll-snap so a flick settles on a record instead of between two */
function buildSnaps(){
  section.querySelectorAll('.snap').forEach(n=>n.remove());
  if(!mobile || reduce) return;
  const total=section.offsetHeight-innerHeight;
  list.forEach((r,i)=>{ const d=document.createElement('div'); d.className='snap'; d.style.top=`${list.length>1 ? i/(list.length-1)*total : 0}px`; section.appendChild(d); });
}
function readProgress(){
  const r=section.getBoundingClientRect(), total=section.offsetHeight-innerHeight;
  progress = total>0 ? Math.min(1,Math.max(0,-r.top/total)) : 0;
}
scroller.addEventListener('scroll',readProgress,{passive:true});
function scrollToSlot(i){
  const total=section.offsetHeight-innerHeight, p = list.length>1 ? i/(list.length-1) : 0;
  scroller.scrollTo({top: section.offsetTop + p*total, behavior: reduce?'auto':'smooth'});
}
const railEl=root.getElementById('rail'), fillEl=root.getElementById('fill');
function buildRail(){
  railEl.querySelectorAll('.rail__tick').forEach(n=>n.remove());
  const seen=new Set();
  list.forEach((r,i)=>{
    if(seen.has(r.item.year)) return; seen.add(r.item.year);
    const b=document.createElement('button'); b.className='rail__tick'; b.textContent=r.item.year;
    b.style.top=`${list.length>1 ? i/(list.length-1)*100 : 0}%`; b.onclick=()=>scrollToSlot(i);
    railEl.appendChild(b);
  });
}

/* drag (mouse or finger) scrubs the stack; vertical swipes on phones stay native scrolling */
const pointer=new THREE.Vector2(0,0); let hasPointer=false, drag=null;
canvas.addEventListener('pointerdown',e=>{ if(!drag) drag={x:e.clientX,y:e.clientY,moved:false,id:e.pointerId}; });
addEventListener('pointermove',e=>{
  if(e.pointerType==='mouse'){ hasPointer=true; pointer.x=(e.clientX/innerWidth)*2-1; pointer.y=-(e.clientY/innerHeight)*2+1; }
  if(!drag || e.pointerId!==drag.id || openIdx!==null || e.pointerType!=='mouse') return;
  const dy=e.clientY-drag.y;
  if(!drag.moved && Math.abs(dy)>8) drag.moved=true;
  if(drag.moved){ scroller.scrollBy(0, -dy*2.2); drag.y=e.clientY; }
});
addEventListener('pointerup',e=>{ if(drag && e.pointerId===drag.id && !drag.moved && e.composedPath()[0]===canvas) pick(e); drag=null; });
addEventListener('pointercancel',()=>{ drag=null; });

/* ---------- picking ---------- */
const ray=new THREE.Raycaster();
let hovered=null, openIdx=null;
function hitTest(nx,ny){
  ray.setFromCamera({x:nx,y:ny},camera);
  const meshes=[]; records.forEach(r=>{ if(r.visible && r.group.visible) meshes.push(r.sleeve, r.spin.children[0]); });
  const h=ray.intersectObjects(meshes,false)[0];
  return h ? records[h.object.userData.index] : null;
}
function pick(e){
  const r=hitTest((e.clientX/innerWidth)*2-1, -(e.clientY/innerHeight)*2+1);
  if(openIdx!==null){ if(r!==records[openIdx]) closeRecord(); return; }
  if(r) openRecord(records.indexOf(r));
}

/* ---------- open / close ---------- */
const sheet=root.getElementById('sheet'), $=id=>root.getElementById(id);
let lastFocus=null;
function openRecord(idx){
  if(openIdx===null) lastFocus=root.activeElement;
  openIdx=idx; const r=records[idx], it=r.item;
  stage.classList.add('is-open');
  scrollToSlot(r.slot);
  $('sKind').textContent = `${it.kind}, ${new Date(it.date+'T12:00:00').toLocaleDateString('en-US',{month:'short',year:'numeric'})}, ${it.tracks} ${it.tracks===1?'track':'tracks'}`;
  $('sTitle').textContent = it.title;
  $('sApple').href = it.url;
  $('sSpotify').href = `https://open.spotify.com/search/${encodeURIComponent('Slater '+it.title)}`;
  $('prev').disabled = r.slot===0; $('next').disabled = r.slot===list.length-1;
  sheet.classList.add('open'); sheet.setAttribute('aria-hidden','false');
  canvas.style.cursor='default';
}
function closeRecord(){
  if(openIdx===null) return;
  openIdx=null; stage.classList.remove('is-open');
  sheet.classList.remove('open'); sheet.setAttribute('aria-hidden','true');
  if(lastFocus && sheet.contains(root.activeElement)) lastFocus.focus?.();
}
function step(d){ if(openIdx===null) return; const n=list[records[openIdx].slot+d]; if(n) openRecord(records.indexOf(n)); }
$('close').onclick=closeRecord; $('prev').onclick=()=>step(-1); $('next').onclick=()=>step(1);
addEventListener('keydown',e=>{
  if(e.key==='Escape') closeRecord();
  if(openIdx!==null && (e.key==='ArrowDown'||e.key==='ArrowRight')){ e.preventDefault(); step(1); }
  if(openIdx!==null && (e.key==='ArrowUp'||e.key==='ArrowLeft')){ e.preventDefault(); step(-1); }
});
const holdScroll=e=>{ if(openIdx!==null && e.composedPath().includes(stage)) e.preventDefault(); };
addEventListener('wheel',holdScroll,{passive:false});
addEventListener('touchmove',holdScroll,{passive:false});

/* ---------- sizing ---------- */
let mobile=innerWidth<760, camDist=3, openDist=3.2, visW=2, visH=2;
const TAN=()=>Math.tan(THREE.MathUtils.degToRad(camera.fov)/2);
function resize(){
  const w=stage.clientWidth, h=stage.clientHeight;
  renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix();
  mobile = w<760;
  // desktop: a sleeve is ~58% of the screen height; phone: ~70% of the width
  visH = mobile ? 1.55/camera.aspect : 1.72;
  camDist = (visH/2)/TAN(); visW = visH*camera.aspect;
  // opened: sleeve + record (~1.64 units) need room beside the info card
  openDist = Math.max(camDist*.92, ((mobile?1.9:2.4)/camera.aspect)/(2*TAN()));
  scene.fog.near = camDist+.8; scene.fog.far = camDist+6;
}
addEventListener('resize',()=>{ resize(); buildSnaps(); readProgress(); });

/* ---------- loop ---------- */
const damp=(a,b,k,dt)=>a+(b-a)*(1-Math.exp(-k*dt));
const nowEl=$('now'); let lastNow=null;
const clock=new THREE.Clock(), look=new THREE.Vector3();
let running=false;

function frame(){
  const dt=Math.min(clock.getDelta(),.05), t=clock.elapsedTime;
  readProgress();                                   // read scroll every frame: iOS throttles scroll events
  smooth = reduce ? progress : damp(smooth,progress,mobile?5.5:7,dt);
  fillEl.style.transform=`scaleY(${smooth})`;
  const cursor = smooth*Math.max(0,list.length-1);       // fractional index of the record on top

  // the pile sits right of centre on desktop, centred on phones; camera leans a touch with the mouse
  const baseX = mobile ? .06 : -visW*.12;
  const baseY = mobile ? -.12 - visH*(mode==='all' ? .02 : -.02) : -.16;
  const lx = (!reduce && hasPointer && openIdx===null) ? pointer.x : 0;
  const ly = (!reduce && hasPointer && openIdx===null) ? pointer.y : 0;
  camera.position.x = damp(camera.position.x, baseX + lx*.1, 4, dt);
  camera.position.y = damp(camera.position.y, baseY + ly*.06, 4, dt);
  camera.position.z = damp(camera.position.z, camDist, 4, dt);
  look.set(camera.position.x - lx*.08, camera.position.y - ly*.05, 0);
  camera.lookAt(look);
  camera.updateMatrixWorld();

  const cur = list[Math.round(cursor)];
  if(cur && cur!==lastNow){ lastNow=cur; nowEl.innerHTML=`<b class="disp">${cur.item.title}</b><span>${cur.item.kind}, ${cur.item.year}</span>`; }

  if(openIdx===null && !drag && hasPointer){
    const h=hitTest(pointer.x,pointer.y);
    if(h!==hovered){ hovered=h; canvas.style.cursor = h ? 'pointer':'default'; }
  } else if(openIdx!==null) hovered=null;

  const anyOpen = openIdx!==null;
  const openW = 2*openDist*TAN()*camera.aspect, openH = 2*openDist*TAN();
  records.forEach((r,i)=>{
    const isOpen = openIdx===i;
    let tx, ty, tz, rx=0, rz, out, show=1;
    if(!r.visible){ tx=r.pos.x; ty=r.pos.y-.6; tz=r.pos.z-.4; rz=r.home.rz; out=.15; show=0; }
    else if(isOpen){
      // lift the record off the pile, square to the camera, then slide the vinyl out
      out = .66;
      const pairCentre = (out+.475-.5)/2;
      W.set(camera.position.x + (mobile ? 0 : openW*.13) - pairCentre, camera.position.y + (mobile ? openH*.13 : 0), camDist - openDist);
      pile.worldToLocal(W);
      tx=W.x; ty=W.y; tz=W.z; rx=-PILE_TILT; rz=0;
    } else {
      const d = r.slot - cursor;                          // 0 = top of the pile, >0 = underneath, <0 = already flipped past
      if(d >= 0){
        // underneath: each one a little lower and deeper, so its edge shows below the one on top
        tx = r.home.x + d*.02; ty = r.home.y - d*.17; tz = -d*.045; rz = r.home.rz;
        show = d < 6 ? 1 : Math.max(0, 1-(d-6));
      } else {
        // flipped past: slides up and off the pile
        const e=-d; tx = r.home.x - e*.3; ty = r.home.y + e*1.6; tz = .03 + e*.05; rz = r.home.rz + e*.35;
        show = Math.max(0, 1-e*1.8);
      }
      if(anyOpen){ tz -= .6; show *= .22; }
      out = .15 + (hovered===r ? .28 : 0);
    }
    const k = isOpen ? 5 : 9;
    r.pos.x=damp(r.pos.x,tx,k,dt); r.pos.y=damp(r.pos.y,ty,k,dt); r.pos.z=damp(r.pos.z,tz,k,dt);
    r.rot.x=damp(r.rot.x,rx,5,dt); r.rot.y=0; r.rot.z=damp(r.rot.z,rz,k,dt);
    const outK = isOpen ? (r.pos.distanceTo(W)<.25 ? 4.5 : .4) : 8;
    r.out=damp(r.out,out,outK,dt);
    r.fade=damp(r.fade,show,8,dt);
    r.hover=damp(r.hover, hovered===r ? 1:0, 9, dt);
    r.group.position.copy(r.pos); r.group.rotation.copy(r.rot);
    r.group.visible = r.fade>.02;
    r.shadow.material.opacity = .5*r.fade*(isOpen?0:1);
    // materials stay transparent: toggling it recompiles shaders and caused hitches mid-scroll
    r.frontMat.opacity=r.backMat.opacity=r.discTopMat.opacity=r.fade;
    r.tilt.position.z = r.hover*.06;
    r.tilt.rotation.z = -r.hover*.03;
    r.discPivot.position.x = r.out;
    if(!reduce) r.spin.rotation.z -= dt*(isOpen ? 3.49*Math.min(1,Math.max(0,(r.out-.25)/.35)) : r.hover*.8);
  });

  renderer.render(scene,camera);
  if(running) requestAnimationFrame(frame);
}
new IntersectionObserver(([e])=>{
  if(e.isIntersecting && !running){ running=true; clock.getDelta(); requestAnimationFrame(frame); }
  else if(!e.isIntersecting){ running=false; closeRecord(); }
},{rootMargin:'100px'}).observe(stage);

resize(); apply(false);
window.__slater = { root, scroller, records, list:()=>list, open:openRecord, close:closeRecord, setMode:(m)=>{mode=m;kind='All';apply(false);} };

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
    headOnce('slater-fontface', () => { const s = document.createElement('style'); s.textContent = FONTFACE.split('__BASE__').join(BASE); return s; });

    // Mount on <body>, outside Wix's layout, so transforms on Wix containers can't trap the full-screen page.
    const host = document.createElement('div');
    host.setAttribute('data-slater-site', '');
    document.body.appendChild(host);
    this._host = host;
    const root = host.attachShadow({ mode: 'open' });
    root.innerHTML = '<style>' + CSS + '</style><div class="scroller" id="scroller">' + MARKUP.split('__BASE__').join(BASE) + '</div>';
    const scroller = root.getElementById('scroller');

    // the site scrolls inside its own layer; stop the Wix page behind it from scrolling too
    this._prevOverflow = [document.documentElement.style.overflow, document.body.style.overflow];
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

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

    loadThree().then(({ THREE, RoomEnvironment }) => main(THREE, RoomEnvironment, root, scroller))
      .catch(err => console.error('Slater site: could not load three.js', err));
  }

  disconnectedCallback() {
    // Wix page change: take the full-screen layer down and give the page its scroll back
    if (this._host) this._host.remove();
    if (this._prevOverflow) {
      document.documentElement.style.overflow = this._prevOverflow[0];
      document.body.style.overflow = this._prevOverflow[1];
    }
    this._mounted = false;
  }
}

if (!customElements.get('slater-site')) customElements.define('slater-site', SlaterSite);
