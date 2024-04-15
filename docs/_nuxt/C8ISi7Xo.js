import{V as $}from"./oBjtFJNu.js";import{d as m,t as a,L as b,P as E,_ as p,v as d,N as k,O as v,z as O,R as z,c as f,M as _,x as F,y as u}from"./C-I2TLMd.js";import"./CPyl0SCg.js";const A=m({__name:"cell",props:{cell:{}},emits:["click"],setup(t,{emit:e}){const l=t,s=e,r=()=>{s("click")};return(i,o)=>(a(),b($,{class:E(["cell",{"is-fill":l.cell}]),color:i.cell?"primary":"background",onClick:r},null,8,["class","color"]))}}),B=p(A,[["__scopeId","data-v-2289aa20"]]),G={class:"board"},L=m({__name:"board",props:{field:{}},emits:["onClickCell"],setup(t,{emit:e}){const l=t,s=e,r=(i,o)=>{s("onClickCell",i,o)};return(i,o)=>{const c=B;return a(),d("div",G,[(a(!0),d(k,null,v(l.field,(n,h)=>(a(),d("div",{key:h,class:"row"},[(a(!0),d(k,null,v(n,(g,C)=>(a(),d("div",{key:C,class:E(["cell",{"cell--on":g}])},[O(c,{cell:g,onClick:I=>r(h,C)},null,8,["cell","onClick"])],2))),128))]))),128))])}}}),V=p(L,[["__scopeId","data-v-af9c1462"]]),X=z("useLightsOut",{state:()=>({field:[],startField:[],fieldY:5,fieldX:5,clickCount:0,answer:[[[],[],[[1,0],[2,0],[1,1],[2,1],[3,1],[0,2],[1,2],[4,2],[1,3],[4,3],[2,4],[3,4]],[[0,0],[1,0],[2,0],[0,2],[1,2],[2,2],[1,3],[3,3],[2,4],[3,4],[4,4]],[[0,0],[2,0],[3,0],[0,2],[2,2],[3,2],[0,3],[4,3],[1,4],[2,4],[4,4]]],[[[0,0]],[[2,0],[1,1],[2,1],[3,1],[0,2],[1,2],[4,2],[1,3],[4,3],[2,4],[3,4]],[[0,0],[2,0],[1,1],[2,1],[3,1],[2,2],[4,2],[3,3],[4,3],[4,4]],[[2,0],[1,1],[2,1],[3,1],[0,2],[3,2],[4,2],[0,3],[3,3],[1,4],[2,4]],[[0,0],[0,2],[4,2],[0,3],[1,3],[3,3],[4,3],[0,4],[4,4]]],[[[0,0],[2,0],[0,1],[1,1],[2,1],[3,1],[0,2],[1,2],[4,2],[1,3],[4,3],[2,4],[3,4]],[[1,1],[0,2],[1,2],[2,2],[1,3],[3,3],[2,4],[3,4],[4,4]],[[1,0],[2,0],[4,0],[0,1],[4,1],[0,2],[2,2],[3,2],[2,3],[0,4],[1,4]],[[2,0],[3,0],[4,0],[3,1]],[[3,0],[1,1],[2,1],[3,1],[4,1],[0,2],[2,2],[0,3],[1,3],[0,4]]],[[[2,0],[0,1],[2,1],[3,1],[0,2],[2,2],[4,2],[3,3],[4,3],[4,4]],[[2,0],[3,0],[1,1],[4,1],[0,2],[1,2],[4,2],[1,3],[2,3],[3,3],[2,4]],[[0,0],[0,2],[0,3],[1,3],[0,4]],[[1,0],[2,0],[0,1],[3,1],[0,2],[3,2],[4,2],[1,3],[2,3],[3,3],[2,4]],[[0,1],[1,1],[2,2],[0,3],[2,3],[3,3],[0,4],[2,4]]],[[[0,0],[2,0],[3,0],[4,1],[0,2],[2,2],[4,2],[0,3],[2,3],[3,4],[4,4]],[[2,0],[3,0],[4,0],[3,1],[3,3],[2,4],[3,4],[4,4]],[[0,0],[2,0],[3,0],[4,0],[1,1],[3,1],[1,2],[2,2],[0,3],[1,3],[1,4]],[[0,0],[1,0],[3,0],[4,0],[1,1],[2,2],[3,2],[4,2],[3,3]],[[1,0],[2,0],[3,0],[2,1],[4,1],[3,2],[4,2],[4,3]]]]}),getters:{isGameClear(){return this.field.flat().every(t=>!t)},fastestField(){const t=this.startField.map(l=>l.slice()),e=Array.from({length:this.fieldY},()=>Array.from({length:this.fieldX},()=>!1));return console.log(this.startField),console.log(t),t.forEach((l,s)=>l.forEach((r,i)=>{let o=0;console.log(s,i),console.log("-----"),this.answer[s][i].forEach(([c,n])=>{console.log(c,n,t[n][c]),t[n][c]&&o++}),console.log("-----"),console.log(o),e[s][i]=o%2===1})),e},shortestCount(){return this.fastestField.flat().filter(t=>t).length}},actions:{initialize(){this.field=Array.from({length:this.fieldY},()=>Array.from({length:this.fieldX},()=>!1))},start(){this.field.forEach((t,e)=>t.forEach((l,s)=>{Math.random()<.5&&this.toggle(e,s)})),this.startField=this.field.map(t=>t.slice()),this.clickCount=0},toggle(t,e){console.log(t,e),this.clickCount++,this.field[t][e]=!this.field[t][e],t>0&&(this.field[t-1][e]=!this.field[t-1][e]),t<this.fieldY-1&&(this.field[t+1][e]=!this.field[t+1][e]),e>0&&(this.field[t][e-1]=!this.field[t][e-1]),e<this.fieldX-1&&(this.field[t][e+1]=!this.field[t][e+1])}}}),Y={class:"lights-out"},w=m({__name:"lights-out",setup(t){const e=X(),l=f(()=>e.field),s=f(()=>e.isGameClear),r=f(()=>e.shortestCount),i=f(()=>e.clickCount);f(()=>e.fastestField);const o=(c,n)=>{e.toggle(c,n)};return e.initialize(),e.start(),(c,n)=>{const h=V;return a(),d("div",Y,[O(h,{field:_(l),onOnClickCell:o},null,8,["field"]),F("div",null,u(_(s)?"Game Clear!":""),1),F("div",null,u(_(r))+" / "+u(_(i)),1)])}}}),D=p(w,[["__scopeId","data-v-e3627451"]]);export{D as default};
