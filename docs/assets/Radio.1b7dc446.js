import{_,D as f,J as m,o as l,c as r,b as n,t as c,F as h,l as v,d}from"./app.7bb1490b.js";const k=d(),b=["value","id","checked"],g=d(),y=["for"],B={__name:"Radio",props:{label:{},id:{},type:{},options:{}},emits:["input"],setup(u){const a=u,i=f(null);return m(()=>{const t=i.value.getElementsByTagName("input");for(let e=0;e<t.length;e++)t[e].checked&&t[e].dispatchEvent(new Event("input"))}),(t,e)=>(l(),r("div",{ref_key:"radios",ref:i,class:"form-group p-2"},[n("label",null,c(a.label),1),k,(l(!0),r(h,null,v(a.options,(s,o)=>(l(),r("div",{key:"radio-"+o,class:"form-check"},[n("input",{class:"form-check-input",type:"radio",value:s.value,id:"radio-"+a.id+"-"+o,name:"radio",onInput:e[0]||(e[0]=p=>t.$emit("input",{value:p.target.value})),checked:s.checked},null,40,b),g,n("label",{class:"form-check-label",for:"radio-"+a.id+"-"+o},c(s.label),9,y)]))),128))],512))}};var x=_(B,[["__file","Radio.vue"]]);export{x as default};
