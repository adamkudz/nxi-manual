if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const f=e=>s(e,l),d={module:{uri:l},exports:o,require:f};i[l]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"nxi-manual"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/cautionMessages.js",revision:"019abd78e109a13ebbef39302651a0f4"},{url:"/css/app.b002409b.css",revision:null},{url:"/img/PFD-Bezel-Row.d3b51ab6.svg",revision:null},{url:"/img/option1.747f6b4b.svg",revision:null},{url:"/img/option2.11b955f8.svg",revision:null},{url:"/img/option3.ceb5b413.svg",revision:null},{url:"/img/pfdSimBackground.9abad852.svg",revision:null},{url:"/img/singleLabel.75753b01.svg",revision:null},{url:"/img/totalBezelKey.879885ef.svg",revision:null},{url:"/img/traffic.70fd528f.svg",revision:null},{url:"/index.html",revision:"7416740ef9228859c5501d3854218d66"},{url:"/js/app.ebf4f575.js",revision:null},{url:"/js/chunk-vendors.96e1c3af.js",revision:null},{url:"/manifest.json",revision:"8c9a1eebc52daaf4cc4317d3a1694d8f"},{url:"/nxitest.pdf",revision:"56af932fe48bcb03f2504f9fdfca5cac"},{url:"/pfd.js",revision:"449e16de73107051d34885fe8ddfa3b4"},{url:"/pfdImages/Horizon.png",revision:"4fbfc742e94b94cd09484f13f3b77b14"},{url:"/pfdImages/bezelbackground.png",revision:"3a4be0505833dd9c7db1490754fec839"},{url:"/pfdImages/pfdSimBackground.png",revision:"e3e953dcd154f1692615b04b89e2ed21"},{url:"/pfdImages/pfdSimBackground@2x.png",revision:"ae711ad404a73614ad230da8ab3493bd"},{url:"/pfdImages/rectangle_41.png",revision:"29f3a4e9b5c26bbe9849908f9a7731f1"},{url:"/pfdImages/totalSim.png",revision:"9118d3dd27221e5697fc8c5529940537"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"/systemMessages.js",revision:"6101e2ef75632ec7e658c6580179f0ba"},{url:"/warningMessages.js",revision:"ec9636258723b3f48e4420ac1bc18bbd"}],{})}));
//# sourceMappingURL=service-worker.js.map
