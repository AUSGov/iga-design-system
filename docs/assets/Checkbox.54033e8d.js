import{_ as h,D as k,J as _,o,c as l,b as n,t as u,F as f,l as m,d}from"./app.7bb1490b.js";const b=d(),v=["value","id","onInput","checked"],g=d(),x=["for"],y={__name:"Checkbox",props:{label:{},id:{},type:{},options:{}},emits:["input"],setup(p){const e=p,r=k(null);return _(()=>{const t=r.value.getElementsByTagName("input");for(let c=0;c<t.length;c++)t[c].checked&&t[c].dispatchEvent(new Event("input"))}),(t,c)=>(o(),l("div",{ref_key:"checks",ref:r,class:"form-group p-2"},[n("label",null,u(e.label),1),b,(o(!0),l(f,null,m(e.options,(a,s)=>(o(),l("div",{key:e.id+"-"+s,class:"form-check"},[n("input",{class:"form-check-input",type:"checkbox",value:a.value,id:e.id+"-"+s,onInput:i=>t.$emit("input",{value:i.target.value,checked:i.target.checked,index:"check-"+s}),checked:a.checked},null,40,v),g,n("label",{class:"form-check-label",for:e.id+"-"+s},u(a.label),9,x)]))),128))],512))}};var E=h(y,[["__file","Checkbox.vue"]]);export{E as default};
