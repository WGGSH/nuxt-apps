import{u as N}from"./Cl7cS9Rs.js";import{t as _}from"./Begke6kS.js";import{m as $,a as B}from"./B5jheRs-.js";import{d as z,c as d,a3 as H,a4 as R,t as a,L as g,A as p,M as o,v as c,a5 as b,S as v,P as A,Q as y,y as G,z as k,_ as V,N as w,O as F,R as D,x as I,B as L,U as q}from"./B0p4roPO.js";import{V as P}from"./DBiQfQ3t.js";import{V as T}from"./BRzB-ZQZ.js";const Q={key:0,class:"icon"},U={key:2,class:"icon"},j=z({__name:"cell",props:{cell:{},isGameOver:{type:Boolean},isGameClear:{type:Boolean}},emits:["click","hold"],setup(s,{emit:e}){const r=s,i=d(()=>r.cell.isMine),l=d(()=>r.cell.status),t=d(()=>r.cell.mineCount),n=N(),m=d(()=>l.value==="revealed"&&!i.value&&t.value===0?n.currentTheme.dark?{backgroundColor:_(n.currentTheme.colors.background).lighten(30).toRgbString()}:{backgroundColor:_(n.currentTheme.colors.background).darken(50).toRgbString()}:{}),f=d(()=>t.value===1?{color:"blue"}:t.value===2?{color:"green"}:t.value===3?{color:"red"}:t.value===4?{color:"purple"}:t.value===5?{color:"maroon"}:t.value===6?{color:"turquoise"}:t.value===7?{color:"black"}:t.value===8?{color:"gray"}:{}),u=e,M=()=>{u("click")},S=()=>{u("hold")};return(h,O)=>{const C=H("hold");return R((a(),g(P,{class:"cell",style:y(o(m)),onClick:M},{default:p(()=>[o(i)?(a(),c("div",Q,[h.isGameOver||o(l)==="revealed"?(a(),g(b,{key:0,icon:o($)},null,8,["icon"])):h.isGameClear||o(l)==="flagged"?(a(),g(b,{key:1,icon:o(B)},null,8,["icon"])):v("",!0)])):o(l)==="revealed"?(a(),c("div",{key:1,class:A(["icon",{"is-empty":o(t)===0}])},[o(t)>0?(a(),c("div",{key:0,style:y(o(f))},G(o(t)),5)):v("",!0)],2)):o(l)==="flagged"?(a(),c("div",U,[k(b,{icon:o(B)},null,8,["icon"])])):v("",!0)]),_:1},8,["style"])),[[C,S,"500"]])}}}),J=V(j,[["__scopeId","data-v-d325af85"]]),K=z({__name:"board",props:{field:{},isGameOver:{type:Boolean},isGameClear:{type:Boolean}},emits:["clickCell","holdCell"],setup(s,{emit:e}){const r=N(),i=s,l=e,t=(f,u)=>{l("clickCell",f,u)},n=(f,u)=>{l("holdCell",f,u)},m=d(()=>r.currentTheme.dark?_(r.currentTheme.colors.primary).darken(40).toRgbString():_(r.currentTheme.colors.primary).lighten(50).toRgbString());return(f,u)=>{const M=J;return a(),g(T,{class:"board pa-4",style:y({backgroundColor:o(m)})},{default:p(()=>[(a(!0),c(w,null,F(i.field,(S,h)=>(a(),c("div",{key:h,class:"row"},[(a(!0),c(w,null,F(S,(O,C)=>(a(),c("div",{key:C,class:"col"},[k(M,{cell:O,"is-game-over":i.isGameOver,"is-game-clear":i.isGameClear,onClick:E=>t(h,C),onHold:E=>n(h,C)},null,8,["cell","is-game-over","is-game-clear","onClick","onHold"])]))),128))]))),128))]),_:1},8,["style"])}}}),W=V(K,[["__scopeId","data-v-3c7ace7d"]]),X=D("useMineSweeper",{state:()=>({field:[],fieldSize:10,mineCount:30,isGameOver:!1,isFirstClick:!0}),getters:{lastMineCount(){return this.mineCount-this.field.flat().filter(s=>s.status==="flagged").length},isGameClear(){return this.field.flat().filter(s=>!s.isMine&&s.status==="revealed").length===this.fieldSize**2-this.mineCount}},actions:{initialize(){this.field=Array.from({length:this.fieldSize},()=>Array.from({length:this.fieldSize},()=>({isMine:!1,status:"hidden",mineCount:0}))),this.isGameOver=!1,this.isFirstClick=!0},start(s,e){this.field.forEach(r=>r.forEach(i=>{i.isMine=!1,i.mineCount=0}));for(let r=0;r<this.mineCount;r++){let i,l;do i=Math.floor(Math.random()*this.fieldSize),l=Math.floor(Math.random()*this.fieldSize);while(i===e&&l===s||this.field[l][i].isMine||Math.abs(i-e)<=1&&Math.abs(l-s)<=1);this.field[l][i].isMine=!0}this.field.forEach((r,i)=>r.forEach((l,t)=>{l.mineCount=this.getMineCount(i,t)})),this.isGameOver=!1,this.isFirstClick=!1},getMineCount(s,e){let r=0;for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){const t=s+i,n=e+l;t<0||t>=this.fieldSize||n<0||n>=this.fieldSize||this.field[t][n].isMine&&r++}return r},clickCell(s,e){if(!(this.isGameOver||this.isFirstClick)){if(this.field[s][e].status==="flagged"){this.field[s][e].status="hidden";return}if(this.field[s][e].isMine){this.isGameOver=!0,this.field.forEach(r=>r.forEach(i=>{i.isMine&&(i.status="revealed")}));return}if(this.field[s][e].status==="revealed"&&this.field[s][e].mineCount===this.getNeighborFlags(s,e)){for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){const l=s+r,t=e+i;l<0||l>=this.fieldSize||t<0||t>=this.fieldSize||l===s&&t===e||this.field[l][t].status==="hidden"&&this.clickCell(l,t)}return}this.revealNeighbors(s,e)}},getNeighborFlags(s,e){let r=0;for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){const t=s+i,n=e+l;t<0||t>=this.fieldSize||n<0||n>=this.fieldSize||t===s&&n===e||this.field[t][n].status==="flagged"&&r++}return r},holdCell(s,e){if(!(this.isGameOver||this.isFirstClick)&&this.field[s][e].status!=="revealed"){if(this.field[s][e].status==="flagged"){this.field[s][e].status="hidden";return}this.field[s][e].status="flagged"}},revealNeighbors(s,e){const r=this.field[s][e];if(!(r.isMine||r.status!=="hidden")&&(r.status="revealed",!(r.mineCount>0)))for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){const t=s+i,n=e+l;t<0||t>=this.fieldSize||n<0||n>=this.fieldSize||t===s&&n===e||this.revealNeighbors(t,n)}}}}),Y={key:0},Z={key:1},re=z({__name:"mine-sweeper",setup(s){const e=X(),r=d(()=>e.mineCount),i=d(()=>e.lastMineCount);e.initialize();const l=(t,n)=>{e.isFirstClick&&e.start(t,n),e.clickCell(t,n)};return(t,n)=>{const m=W;return a(),g(T,{class:"board"},{default:p(()=>[k(m,{field:o(e).field,"is-game-over":o(e).isGameOver,"is-game-clear":o(e).isGameClear,onClickCell:l,onHoldCell:o(e).holdCell},null,8,["field","is-game-over","is-game-clear","onHoldCell"]),I("div",null,G(o(i))+" / "+G(o(r)),1),o(e).isGameOver?(a(),c("div",Y," Game Over ")):o(e).isGameClear?(a(),c("div",Z," Game Clear ")):v("",!0),k(q,{onClick:o(e).initialize},{default:p(()=>[L(" Restart ")]),_:1},8,["onClick"])]),_:1})}}});export{re as default};