import{_ as o,o as e,c as l,b as s,F as c,l as _,t as a,s as k,h as i,X as d,V as u,d as r}from"./app.7bb1490b.js";const x={class:"c-row-link-list"},h={class:"text"},L=r(),f=["href"],p={class:"text"},w=r(),E=["innerHTML"],m={__name:"RowLinkList",props:{list:Array},setup(n){return(v,R)=>(e(),l("div",x,[s("ul",null,[(e(!0),l(c,null,_(n.list,t=>(e(),l("li",null,[s("div",h,a(t.text),1),L,s("a",{href:t.linkUrl,class:k({"link-external":n.list.linkExternal,"link-internal":!n.list.linkExternal})},[s("span",p,a(t.linkText),1),w,s("span",{class:"icon",innerHTML:t.linkExternal?i(d):i(u)},null,8,E)],10,f)]))),256))])]))}};var g=o(m,[["__file","RowLinkList.vue"]]);export{g as default};
