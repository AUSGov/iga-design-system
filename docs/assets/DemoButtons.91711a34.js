import r from"./Index.23d8f443.js";import{_ as u,D as d,j as p,o as c,q as m,w as f,b as o,s as b,h as v,d as s}from"./app.4c034d67.js";import"./hamburger-2.8adf8044.js";import"./Radio.90230c3e.js";import"./Checkbox.e98c5778.js";import"./Select.febbd14b.js";import"./Highlighter.c0273a24.js";import"./prism-line-numbers.dc22a1e8.js";const _=s(`
`),h=s(`

`),B={__name:"DemoButtons",setup(y){const i=[{label:"Variation",id:"variation",type:"select",options:[{label:"Primary",value:"btn-primary"},{label:"Ghost",value:"btn-outline-primary"}]},{label:"Size",id:"size",type:"radio",options:[{label:"Default",value:"",checked:!0},{label:"Small",value:"btn-sm"}]},{label:"Disabled",id:"disabledBtn",type:"checkbox",options:[{label:"Disabled",value:"disabled"}]}],e=d({}),l=p(()=>{const a=[];return typeof e.value.variation!="undefined"&&a.push(e.value.variation),typeof e.value.size!="undefined"&&a.push(e.value.size),typeof e.value.disabledBtn!="undefined"&&Object.keys(e.value.disabledBtn).forEach(t=>{a.push(e.value.disabledBtn[t])}),a.join(" ")}),n=a=>{e.value=a};return(a,t)=>(c(),m(r,{formConfig:i,onFormDataChanged:n},{default:f(D=>[o("pre",null,[_,o("button",{class:b(["btn",v(l)])},"Button",2),h])]),_:1}))}};var V=u(B,[["__file","DemoButtons.vue"]]);export{V as default};
