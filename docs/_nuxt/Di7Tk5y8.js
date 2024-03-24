import{a2 as b,Z,bb as G,a0 as h,g as Q,$ as k,ab as X,ap as Y,a5 as R,z as t,c as P,ag as O,bc as p,bd as ee,aK as ae,aL as te,au as E,aE as ne,aF as _,r as re,H as B,b7 as le,be as se,b9 as ie,e as ue,aw as j,ax as oe,O as ce,aR as de,aD as ve,aW as ge,aV as C,a6 as me,a7 as fe,bf as ye,a1 as H,ai as Se,aj as _e,al as be,an as he,ao as Ve,bg as ze,a8 as Ce,a9 as Pe,az as ke,aJ as Re}from"./DjhGWi6L.js";function Fe(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",r=arguments.length>2?arguments[2]:void 0;return b()({name:r??Z(G(e.replace(/__/g,"-"))),props:{tag:{type:String,default:u},...h()},setup(n,v){let{slots:c}=v;return()=>{var g;return Q(n.tag,{class:[e,n.class],style:n.style},(g=c.default)==null?void 0:g.call(c))}}})}function Ie(e){return{aspectStyles:P(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const L=k({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...h(),...X()},"VResponsive"),x=b()({name:"VResponsive",props:L(),setup(e,u){let{slots:r}=u;const{aspectStyles:n}=Ie(e),{dimensionStyles:v}=Y(e);return R(()=>{var c;return t("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[t("div",{class:"v-responsive__sizer",style:n.value},null),(c=r.additional)==null?void 0:c.call(r),r.default&&t("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Te=k({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...L(),...h(),...O(),...p()},"VImg"),Be=b()({name:"VImg",directives:{intersect:ee},props:Te(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:r,slots:n}=u;const{backgroundColorClasses:v,backgroundColorStyles:c}=ae(te(e,"color")),{roundedClasses:g}=E(e),m=ne("VImg"),V=_(""),s=re(),l=_(e.eager?"loading":"idle"),f=_(),z=_(),o=P(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=P(()=>o.value.aspect||f.value/z.value||0);B(()=>e.src,()=>{I(l.value!=="idle")}),B(y,(a,i)=>{!a&&i&&s.value&&S(s.value)}),le(()=>I());function I(a){if(!(e.eager&&a)&&!(se&&!a&&!e.eager)){if(l.value="loading",o.value.lazySrc){const i=new Image;i.src=o.value.lazySrc,S(i,null)}o.value.src&&ie(()=>{var i;r("loadstart",((i=s.value)==null?void 0:i.currentSrc)||o.value.src),setTimeout(()=>{var d;if(!m.isUnmounted)if((d=s.value)!=null&&d.complete){if(s.value.naturalWidth||D(),l.value==="error")return;y.value||S(s.value,null),l.value==="loading"&&w()}else y.value||S(s.value),A()})})}}function w(){var a;m.isUnmounted||(A(),S(s.value),l.value="loaded",r("load",((a=s.value)==null?void 0:a.currentSrc)||o.value.src))}function D(){var a;m.isUnmounted||(l.value="error",r("error",((a=s.value)==null?void 0:a.currentSrc)||o.value.src))}function A(){const a=s.value;a&&(V.value=a.currentSrc||a.src)}let T=-1;ue(()=>{clearTimeout(T)});function S(a){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{if(clearTimeout(T),m.isUnmounted)return;const{naturalHeight:U,naturalWidth:W}=a;U||W?(f.value=W,z.value=U):!a.complete&&l.value==="loading"&&i!=null?T=window.setTimeout(d,i):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,z.value=1)};d()}const F=P(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var d;if(!o.value.src||l.value==="idle")return null;const a=t("img",{class:["v-img__img",F.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:w,onError:D},null),i=(d=n.sources)==null?void 0:d.call(n);return t(C,{transition:e.transition,appear:!0},{default:()=>[j(i?t("picture",{class:"v-img__picture"},[i,a]):a,[[ge,l.value==="loaded"]])]})},q=()=>t(C,{transition:e.transition},{default:()=>[o.value.lazySrc&&l.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",F.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),$=()=>n.placeholder?t(C,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&t("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,J=()=>n.error?t(C,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&t("div",{class:"v-img__error"},[n.error()])]}):null,K=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=_(!1);{const a=B(y,i=>{i&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),a())})}return R(()=>{const a=x.filterProps(e);return j(t(x,de({class:["v-img",{"v-img--booting":!N.value},v.value,g.value,e.class],style:[{width:ve(e.width==="auto"?f.value:e.width)},c.value,e.style]},a,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(ce,null,[t(M,null,null),t(q,null,null),t(K,null,null),t($,null,null),t(J,null,null)]),default:n.default}),[[oe("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:V,image:s,state:l,naturalWidth:f,naturalHeight:z}}}),we=k({start:Boolean,end:Boolean,icon:me,image:String,text:String,...h(),...fe(),...O(),...ye(),...H(),...Se(),..._e({variant:"flat"})},"VAvatar"),Ne=b()({name:"VAvatar",props:we(),setup(e,u){let{slots:r}=u;const{themeClasses:n}=be(e),{colorClasses:v,colorStyles:c,variantClasses:g}=he(e),{densityClasses:m}=Ve(e),{roundedClasses:V}=E(e),{sizeClasses:s,sizeStyles:l}=ze(e);return R(()=>t(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,v.value,m.value,V.value,s.value,g.value,e.class],style:[c.value,l.value,e.style]},{default:()=>[r.default?t(Pe,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[r.default()]}):e.image?t(Be,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t(Ce,{key:"icon",icon:e.icon},null):e.text,ke(!1,"v-avatar")]})),{}}}),De=k({fluid:{type:Boolean,default:!1},...h(),...H()},"VContainer"),Ue=b()({name:"VContainer",props:De(),setup(e,u){let{slots:r}=u;const{rtlClasses:n}=Re();return R(()=>t(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},r)),{}}});export{Ue as V,Ne as a,Be as b,Fe as c};