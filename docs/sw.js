if(!self.define){let e,t={};const n=(n,i)=>(n=new URL(n+".js",i).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const d=e=>n(e,o),f={module:{uri:o},exports:r,require:d};t[o]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"ea8079dcabbf606d7afafac798c2b3e6"},{url:"_nuxt/builds/meta/7e11ddd5-b772-4599-af75-d4298f55defe.json",revision:null},{url:"manifest.webmanifest",revision:"9fde5e584e4bfbcf42d2784ec9b97f72"}],{}),e.cleanupOutdatedCaches()}));
