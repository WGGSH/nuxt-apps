import{R as e,ba as t}from"./B0p4roPO.js";const h=e("useTheme",{state:()=>({themeName:"light"}),getters:{currentTheme(){return t.theme.computedThemes.value[this.themeName]}},actions:{fetchByLocalStorage(){this.themeName=localStorage.getItem("theme")||"light"},toggleTheme(){this.themeName=this.themeName==="light"?"dark":"light",localStorage.setItem("theme",this.themeName)}}});export{h as u};