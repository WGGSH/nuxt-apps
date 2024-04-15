import{u as Xe}from"./C2_MuzLq.js";import{d as ke,u as Fe,e as Ue,f as Ze,g as qe,h as je,i as Ke,j as Je,k as Qe,l as Ge,n as et,b as ye,c as be,V as tt}from"./rwBr9FRn.js";import{Z as A,ax as Ie,c as u,r as W,aC as Z,bj as at,as as H,aw as Be,aA as C,o as te,aD as Ce,bk as lt,bl as nt,I as ot,J as it,e as ae,$ as le,aH as de,a1 as X,aL as me,aM as fe,aR as F,z as c,a0 as ge,a$ as _e,b0 as Ee,b4 as Me,aN as ce,aO as q,b8 as Ne,bb as Le,bf as Pe,aY as He,aW as Q,bm as st,at as ut,H as R,aK as Re,ah as G,a5 as ee,F as rt,bn as ct,U as vt,bo as dt,bp as mt,aB as ft,aQ as gt,bq as ht,br as yt,a6 as bt,N as Ae,ao as pt,d as wt,t as se,L as pe,A as P,M as ue,B as we,V as St,v as xt,O as Vt,x as Tt,bs as kt,af as It,y as Bt,_ as Ct}from"./C-I2TLMd.js";import{c as _t,a as $e}from"./CPyl0SCg.js";import{V as Et}from"./DJt9lMj4.js";const ve=Symbol.for("vuetify:layout"),ze=Symbol.for("vuetify:layout-item"),Se=1e3,Mt=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Oe=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function De(e){const s=Ie(ve);if(!s)throw new Error("[Vuetify] Could not find injected layout");const l=e.id??`layout-item-${nt()}`,n=Be("useLayoutItem");Ce(ze,{id:l});const a=C(!1);ot(()=>a.value=!0),it(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:v}=s.register(n,{...e,active:u(()=>a.value?!1:e.active.value),id:l});return ae(()=>s.unregister(l)),{layoutItemStyles:t,layoutRect:s.layoutRect,layoutItemScrimStyles:v}}const Nt=(e,s,l,n)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const v of e){const h=s.get(v),b=l.get(v),m=n.get(v);if(!h||!b||!m)continue;const o={...a,[h.value]:parseInt(a[h.value],10)+(m.value?parseInt(b.value,10):0)};t.push({id:v,layer:o}),a=o}return t};function Lt(e){const s=Ie(ve,null),l=u(()=>s?s.rootZIndex.value-100:Se),n=W([]),a=Z(new Map),t=Z(new Map),v=Z(new Map),h=Z(new Map),b=Z(new Map),{resizeRef:m,contentRect:o}=at(),p=u(()=>{const i=new Map,f=e.overlaps??[];for(const r of f.filter(x=>x.includes(":"))){const[x,S]=r.split(":");if(!n.value.includes(x)||!n.value.includes(S))continue;const M=a.get(x),N=a.get(S),O=t.get(x),$=t.get(S);!M||!N||!O||!$||(i.set(S,{position:M.value,amount:parseInt(O.value,10)}),i.set(x,{position:N.value,amount:-parseInt($.value,10)}))}return i}),d=u(()=>{const i=[...new Set([...v.values()].map(r=>r.value))].sort((r,x)=>r-x),f=[];for(const r of i){const x=n.value.filter(S=>{var M;return((M=v.get(S))==null?void 0:M.value)===r});f.push(...x)}return Nt(f,a,t,h)}),g=u(()=>!Array.from(b.values()).some(i=>i.value)),V=u(()=>d.value[d.value.length-1].layer),T=u(()=>({"--v-layout-left":H(V.value.left),"--v-layout-right":H(V.value.right),"--v-layout-top":H(V.value.top),"--v-layout-bottom":H(V.value.bottom),...g.value?void 0:{transition:"none"}})),B=u(()=>d.value.slice(1).map((i,f)=>{let{id:r}=i;const{layer:x}=d.value[f],S=t.get(r),M=a.get(r);return{id:r,...x,size:Number(S.value),position:M.value}})),w=i=>B.value.find(f=>f.id===i),k=Be("createLayout"),I=C(!1);te(()=>{I.value=!0}),Ce(ve,{register:(i,f)=>{let{id:r,order:x,position:S,layoutSize:M,elementSize:N,active:O,disableTransitions:$,absolute:ne}=f;v.set(r,x),a.set(r,S),t.set(r,M),h.set(r,O),$&&b.set(r,$);const j=lt(ze,k==null?void 0:k.vnode).indexOf(i);j>-1?n.value.splice(j,0,r):n.value.push(r);const K=u(()=>B.value.findIndex(z=>z.id===r)),U=u(()=>l.value+d.value.length*2-K.value*2),_=u(()=>{const z=S.value==="left"||S.value==="right",D=S.value==="right",We=S.value==="bottom",he={[S.value]:0,zIndex:U.value,transform:`translate${z?"X":"Y"}(${(O.value?0:-110)*(D||We?-1:1)}%)`,position:ne.value||l.value!==Se?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!I.value)return he;const L=B.value[K.value];if(!L)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const ie=p.value.get(r);return ie&&(L[ie.position]+=ie.amount),{...he,height:z?`calc(100% - ${L.top}px - ${L.bottom}px)`:N.value?`${N.value}px`:void 0,left:D?void 0:`${L.left}px`,right:D?`${L.right}px`:void 0,top:S.value!=="bottom"?`${L.top}px`:void 0,bottom:S.value!=="top"?`${L.bottom}px`:void 0,width:z?N.value?`${N.value}px`:void 0:`calc(100% - ${L.left}px - ${L.right}px)`}}),J=u(()=>({zIndex:U.value-1}));return{layoutItemStyles:_,layoutItemScrimStyles:J,zIndex:U}},unregister:i=>{v.delete(i),a.delete(i),t.delete(i),h.delete(i),b.delete(i),n.value=n.value.filter(f=>f!==i)},mainRect:V,mainStyles:T,getLayoutItem:w,items:B,layoutRect:o,rootZIndex:l});const E=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),y=u(()=>({zIndex:s?l.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:E,layoutStyles:y,getLayoutItem:w,items:B,layoutRect:o,layoutRef:m}}const Pt=_t("v-spacer","div","VSpacer"),Ht=A({...le(),...Mt({fullHeight:!0}),...de()},"VApp"),Rt=X()({name:"VApp",props:Ht(),setup(e,s){let{slots:l}=s;const n=me(e),{layoutClasses:a,getLayoutItem:t,items:v,layoutRef:h}=Lt(e),{rtlClasses:b}=fe();return F(()=>{var m;return c("div",{ref:h,class:["v-application",n.themeClasses.value,a.value,b.value,e.class],style:[e.style]},[c("div",{class:"v-application__wrap"},[(m=l.default)==null?void 0:m.call(l)])])}),{getLayoutItem:t,items:v,theme:n}}}),At=A({text:String,...le(),...ge()},"VToolbarTitle"),$t=X()({name:"VToolbarTitle",props:At(),setup(e,s){let{slots:l}=s;return F(()=>{const n=!!(l.default||l.text||e.text);return c(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[n&&c("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,(a=l.default)==null?void 0:a.call(l)])]}})}),{}}}),zt=[null,"prominent","default","comfortable","compact"],Ye=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>zt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,..._e(),...le(),...Ee(),...Me(),...ge({tag:"header"}),...de()},"VToolbar"),xe=X()({name:"VToolbar",props:Ye(),setup(e,s){var g;let{slots:l}=s;const{backgroundColorClasses:n,backgroundColorStyles:a}=ce(q(e,"color")),{borderClasses:t}=Ne(e),{elevationClasses:v}=Le(e),{roundedClasses:h}=Pe(e),{themeClasses:b}=me(e),{rtlClasses:m}=fe(),o=C(!!(e.extended||(g=l.extension)!=null&&g.call(l))),p=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=u(()=>o.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return He({VBtn:{variant:"text"}}),F(()=>{var w;const V=!!(e.title||l.title),T=!!(l.image||e.image),B=(w=l.extension)==null?void 0:w.call(l);return o.value=!!(e.extended||B),c(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,t.value,v.value,h.value,b.value,m.value,e.class],style:[a.value,e.style]},{default:()=>[T&&c("div",{key:"image",class:"v-toolbar__image"},[l.image?c(Q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):c($e,{key:"image-img",cover:!0,src:e.image},null)]),c(Q,{defaults:{VTabs:{height:H(p.value)}}},{default:()=>{var k,I,E;return[c("div",{class:"v-toolbar__content",style:{height:H(p.value)}},[l.prepend&&c("div",{class:"v-toolbar__prepend"},[(k=l.prepend)==null?void 0:k.call(l)]),V&&c($t,{key:"title",text:e.title},{text:l.title}),(I=l.default)==null?void 0:I.call(l),l.append&&c("div",{class:"v-toolbar__append"},[(E=l.append)==null?void 0:E.call(l)])])]}}),c(Q,{defaults:{VTabs:{height:H(d.value)}}},{default:()=>[c(st,null,{default:()=>[o.value&&c("div",{class:"v-toolbar__extension",style:{height:H(d.value)}},[B])]})]})]})}),{contentHeight:p,extensionHeight:d}}}),Ot=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Dt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=s;let n=0;const a=W(null),t=C(0),v=C(0),h=C(0),b=C(!1),m=C(!1),o=u(()=>Number(e.scrollThreshold)),p=u(()=>ut((o.value-t.value)/o.value||0)),d=()=>{const g=a.value;!g||l&&!l.value||(n=t.value,t.value="window"in g?g.pageYOffset:g.scrollTop,m.value=t.value<n,h.value=Math.abs(t.value-o.value))};return R(m,()=>{v.value=v.value||t.value}),R(b,()=>{v.value=0}),te(()=>{R(()=>e.scrollTarget,g=>{var T;const V=g?document.querySelector(g):window;V&&V!==a.value&&((T=a.value)==null||T.removeEventListener("scroll",d),a.value=V,a.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ae(()=>{var g;(g=a.value)==null||g.removeEventListener("scroll",d)}),l&&R(l,d,{immediate:!0}),{scrollThreshold:o,currentScroll:t,currentThreshold:h,isScrollActive:b,scrollRatio:p,isScrollingUp:m,savedScroll:v}}const Yt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ye(),...Oe(),...Ot(),height:{type:[Number,String],default:64}},"VAppBar"),Wt=X()({name:"VAppBar",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const n=W(),a=Re(e,"modelValue"),t=u(()=>{var k;const w=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),v=u(()=>{const w=t.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!a.value}),{currentScroll:h,scrollThreshold:b,isScrollingUp:m,scrollRatio:o}=Dt(e,{canScroll:v}),p=u(()=>e.collapse||t.value.collapse&&(t.value.inverted?o.value>0:o.value===0)),d=u(()=>e.flat||t.value.elevate&&(t.value.inverted?h.value>0:h.value===0)),g=u(()=>t.value.fadeImage?t.value.inverted?1-o.value:o.value:void 0),V=u(()=>{var I,E;if(t.value.hide&&t.value.inverted)return 0;const w=((I=n.value)==null?void 0:I.contentHeight)??0,k=((E=n.value)==null?void 0:E.extensionHeight)??0;return w+k});G(u(()=>!!e.scrollBehavior),()=>{rt(()=>{t.value.hide?t.value.inverted?a.value=h.value>b.value:a.value=m.value||h.value<b.value:a.value=!0})});const{ssrBootStyles:T}=ke(),{layoutItemStyles:B}=De({id:e.name,order:u(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:V,elementSize:C(void 0),active:a,absolute:q(e,"absolute")});return F(()=>{const w=xe.filterProps(e);return c(xe,ee({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":g.value,height:void 0,...T.value},e.style]},w,{collapse:p.value,flat:d.value}),l)}),{}}}),Xt=A({...ct({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),re=X()({name:"VAppBarNavIcon",props:Xt(),setup(e,s){let{slots:l}=s;return F(()=>c(vt,ee(e,{class:["v-app-bar-nav-icon"]}),l)),{}}});function Ft(e){let{rootEl:s,isSticky:l,layoutItemStyles:n}=e;const a=C(!1),t=C(0),v=u(()=>{const m=typeof a.value=="boolean"?"top":a.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[m]:H(t.value)}:{top:n.value.top}]});te(()=>{R(l,m=>{m?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),ae(()=>{window.removeEventListener("scroll",b)});let h=0;function b(){const m=h>window.scrollY?"up":"down",o=s.value.getBoundingClientRect(),p=parseFloat(n.value.top??0),d=window.scrollY-Math.max(0,t.value-p),g=o.height+Math.max(t.value,p)-window.scrollY-window.innerHeight,V=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;o.height<window.innerHeight-p?(a.value="top",t.value=p):m==="up"&&a.value==="bottom"||m==="down"&&a.value==="top"?(t.value=window.scrollY+o.top-V,a.value=!0):m==="down"&&g<=0?(t.value=0,a.value="bottom"):m==="up"&&d<=0&&(V?a.value!=="top"&&(t.value=-d+V+p,a.value="top"):(t.value=o.top+d,a.value="top")),h=window.scrollY}return{isStuck:a,stickyStyles:v}}const Ut=100,Zt=20;function Ve(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Te(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const n=Ve(s),a=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);s+=(a-n)*Math.abs(a),l===e.length-1&&(s*=.5)}return Ve(s)*1e3}function qt(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new dt(Zt))).push([a.timeStamp,t])})}function l(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function n(a){var m;const t=(m=e[a])==null?void 0:m.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const v=t[0],h=[],b=[];for(const o of t){if(v[0]-o[0]>Ut)break;h.push({t:o[0],d:o[1].clientX}),b.push({t:o[0],d:o[1].clientY})}return{x:Te(h),y:Te(b),get direction(){const{x:o,y:p}=this,[d,g]=[Math.abs(o),Math.abs(p)];return d>g&&o>=0?"right":d>g&&o<=0?"left":g>d&&p>=0?"down":g>d&&p<=0?"up":jt()}}}return{addMovement:s,endTouch:l,getVelocity:n}}function jt(){throw new Error}function Kt(e){let{isActive:s,isTemporary:l,width:n,touchless:a,position:t}=e;te(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",k,{passive:!1}),window.addEventListener("touchend",I,{passive:!0})}),ae(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",k),window.removeEventListener("touchend",I)});const v=u(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:b,getVelocity:m}=qt();let o=!1;const p=C(!1),d=C(0),g=C(0);let V;function T(y,i){return(t.value==="left"?y:t.value==="right"?document.documentElement.clientWidth-y:t.value==="top"?y:t.value==="bottom"?document.documentElement.clientHeight-y:Y())-(i?n.value:0)}function B(y){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=t.value==="left"?(y-g.value)/n.value:t.value==="right"?(document.documentElement.clientWidth-y-g.value)/n.value:t.value==="top"?(y-g.value)/n.value:t.value==="bottom"?(document.documentElement.clientHeight-y-g.value)/n.value:Y();return i?Math.max(0,Math.min(1,f)):f}function w(y){if(a.value)return;const i=y.changedTouches[0].clientX,f=y.changedTouches[0].clientY,r=25,x=t.value==="left"?i<r:t.value==="right"?i>document.documentElement.clientWidth-r:t.value==="top"?f<r:t.value==="bottom"?f>document.documentElement.clientHeight-r:Y(),S=s.value&&(t.value==="left"?i<n.value:t.value==="right"?i>document.documentElement.clientWidth-n.value:t.value==="top"?f<n.value:t.value==="bottom"?f>document.documentElement.clientHeight-n.value:Y());(x||S||s.value&&l.value)&&(o=!0,V=[i,f],g.value=T(v.value?i:f,s.value),d.value=B(v.value?i:f),b(y),h(y))}function k(y){const i=y.changedTouches[0].clientX,f=y.changedTouches[0].clientY;if(o){if(!y.cancelable){o=!1;return}const x=Math.abs(i-V[0]),S=Math.abs(f-V[1]);(v.value?x>S&&x>3:S>x&&S>3)?(p.value=!0,o=!1):(v.value?S:x)>3&&(o=!1)}if(!p.value)return;y.preventDefault(),h(y);const r=B(v.value?i:f,!1);d.value=Math.max(0,Math.min(1,r)),r>1?g.value=T(v.value?i:f,!0):r<0&&(g.value=T(v.value?i:f,!1))}function I(y){if(o=!1,!p.value)return;h(y),p.value=!1;const i=m(y.changedTouches[0].identifier),f=Math.abs(i.x),r=Math.abs(i.y);(v.value?f>r&&f>400:r>f&&r>3)?s.value=i.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||Y()):s.value=d.value>.5}const E=u(()=>p.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*n.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*n.value}px))`:t.value==="top"?`translateY(calc(-100% + ${d.value*n.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*n.value}px))`:Y(),transition:"none"}:void 0);return{isDragging:p,dragProgress:d,dragStyles:E}}function Y(){throw new Error}const Jt=["start","end","left","right","top","bottom"],Qt=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Jt.includes(e)},sticky:Boolean,..._e(),...le(),...mt(),...Ee(),...Oe(),...Me(),...ge({tag:"nav"}),...de()},"VNavigationDrawer"),Gt=X()({name:"VNavigationDrawer",props:Qt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:l,emit:n,slots:a}=s;const{isRtl:t}=fe(),{themeClasses:v}=me(e),{borderClasses:h}=Ne(e),{backgroundColorClasses:b,backgroundColorStyles:m}=ce(q(e,"color")),{elevationClasses:o}=Le(e),{displayClasses:p,mobile:d}=ft(e),{roundedClasses:g}=Pe(e),V=gt(),T=Re(e,"modelValue",null,_=>!!_),{ssrBootStyles:B}=ke(),{scopeId:w}=Fe(),k=W(),I=C(!1),E=u(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),y=u(()=>ht(e.location,t.value)),i=u(()=>!e.permanent&&(d.value||e.temporary)),f=u(()=>e.sticky&&!i.value&&y.value!=="bottom");G(()=>e.expandOnHover&&e.rail!=null,()=>{R(I,_=>n("update:rail",!_))}),G(()=>!e.disableResizeWatcher,()=>{R(i,_=>!e.permanent&&pt(()=>T.value=!_))}),G(()=>!e.disableRouteWatcher&&!!V,()=>{R(V.currentRoute,()=>i.value&&(T.value=!1))}),R(()=>e.permanent,_=>{_&&(T.value=!0)}),yt(()=>{e.modelValue!=null||i.value||(T.value=e.permanent||!d.value)});const{isDragging:r,dragProgress:x,dragStyles:S}=Kt({isActive:T,isTemporary:i,width:E,touchless:q(e,"touchless"),position:y}),M=u(()=>{const _=i.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return r.value?_*x.value:_}),{layoutItemStyles:N,layoutItemScrimStyles:O}=De({id:e.name,order:u(()=>parseInt(e.order,10)),position:y,layoutSize:M,elementSize:E,active:u(()=>T.value||r.value),disableTransitions:u(()=>r.value),absolute:u(()=>e.absolute||f.value&&typeof $.value!="string")}),{isStuck:$,stickyStyles:ne}=Ft({rootEl:k,isSticky:f,layoutItemStyles:N}),oe=ce(u(()=>typeof e.scrim=="string"?e.scrim:null)),j=u(()=>({...r.value?{opacity:x.value*.2,transition:"none"}:void 0,...O.value}));He({VList:{bgColor:"transparent"}});function K(){I.value=!0}function U(){I.value=!1}return F(()=>{const _=a.image||e.image;return c(Ae,null,[c(e.tag,ee({ref:k,onMouseenter:K,onMouseleave:U,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":i.value,"v-navigation-drawer--active":T.value,"v-navigation-drawer--sticky":f.value},v.value,b.value,h.value,p.value,o.value,g.value,e.class],style:[m.value,N.value,S.value,B.value,ne.value,e.style]},w,l),{default:()=>{var J,z,D;return[_&&c("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?c(Q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},a.image):c($e,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),a.prepend&&c("div",{class:"v-navigation-drawer__prepend"},[(J=a.prepend)==null?void 0:J.call(a)]),c("div",{class:"v-navigation-drawer__content"},[(z=a.default)==null?void 0:z.call(a)]),a.append&&c("div",{class:"v-navigation-drawer__append"},[(D=a.append)==null?void 0:D.call(a)])]}}),c(bt,{name:"fade-transition"},{default:()=>[i.value&&(r.value||T.value)&&!!e.scrim&&c("div",ee({class:["v-navigation-drawer__scrim",oe.backgroundColorClasses.value],style:[j.value,oe.backgroundColorStyles.value],onClick:()=>T.value=!1},w),null)]})])}),{isStuck:$}}}),ea={class:"content"},ta=wt({__name:"default",setup(e){const s=Xe(),l=u(()=>s.themeName),n=W(!1),a=W([{title:"Home",icon:Ue,path:"/"},{title:"ライフゲーム",icon:Ze,path:"/app/life-game"},{title:"ハノイの塔",icon:qe,path:"/app/hanoi-tower"},{title:"ソリティア",icon:je,path:"/app/klondike"},{title:"マインスイーパー",icon:Ke,path:"/app/mine-sweeper"},{title:"ライツアウト",icon:Je,path:"/app/lights-out"}]),t=u(()=>s.themeName==="light"?Qe:Ge),v=()=>{location.reload()},h=()=>{s.toggleTheme()};return s.fetchByLocalStorage(),(b,m)=>(se(),pe(Rt,{theme:ue(l)},{default:P(()=>[c(Et,{class:"main"},{default:P(()=>[c(Wt,{color:"primary",height:"40"},{default:P(()=>[c(re,{onClick:m[0]||(m[0]=o=>n.value=!0)}),c(Pt),c(re,{icon:ue(et),class:"reload",onClick:v},null,8,["icon"]),c(re,{icon:ue(t),class:"theme-toggle",onClick:h},null,8,["icon"])]),_:1}),c(Gt,{modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=o=>n.value=o)},{default:P(()=>[c(ye,null,{default:P(()=>[c(be,{class:"text-h6"},{default:P(()=>[we(" Application ")]),_:1})]),_:1}),c(St),c(tt,{dense:"",nav:""},{default:P(()=>[(se(!0),xt(Ae,null,Vt(a.value,o=>(se(),pe(ye,{key:o.title,link:"",to:o.path},{default:P(()=>[c(It,{icon:o.icon},null,8,["icon"]),c(be,null,{default:P(()=>[we(Bt(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"]),Tt("div",ea,[kt(b.$slots,"default",{},void 0,!0)])]),_:3})]),_:3},8,["theme"]))}}),sa=Ct(ta,[["__scopeId","data-v-5ac75dac"]]);export{sa as default};
