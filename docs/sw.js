if(!self.define){let e,t={};const n=(n,i)=>(n=new URL(n+".js",i).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const c=e=>n(e,o),u={module:{uri:o},exports:r,require:c};t[o]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"b2aba03195e7f2383d2830ccadd0f840"},{url:"_nuxt/builds/meta/ee960c6a-4bda-4314-9ace-5c3caec00a84.json",revision:null},{url:"manifest.webmanifest",revision:"64437d31599f7afe7ee69609c5ec2158"}],{}),e.cleanupOutdatedCaches()}));
