import{_ as r,W as _,X as d,r as m,o as s,c as a,b as e,m as o,t as i,q as k,w as h,s as u,d as n}from"./app.7bb1490b.js";const g={props:{image:{type:String},title:{type:String},componentsLink:{type:String,default:null},linkUrl:{type:String},linkText:{type:String,default:"Link"},compact:{type:Boolean,default:!1},text:{type:String}},data(){return{arrowRight:_,linkExternal:d}}},f={key:0,class:"card-img-top img-wrap"},x=["src","alt"],y=n(),L={class:"card-body"},p={class:"h4"},v=n(),C={key:0,class:"text"},S=n(),T=["href"],w=n("Components"),B=["innerHTML"],E=n(),H=n(),M=["innerHTML"];function R(b,N,t,U,c,V){const l=m("RouterLink");return s(),a("div",{class:u(["card c-card",{"c-card--compact":t.compact}])},[!t.compact&&t.image?(s(),a("div",f,[e("img",{src:t.image,alt:t.title},null,8,x)])):o("",!0),y,e("div",L,[e("p",p,i(t.title),1),v,t.text?(s(),a("div",C,i(t.text),1)):o("",!0),S,t.componentsLink&&t.componentsLink.length>0?(s(),a("a",{key:1,href:t.componentsLink,target:"_blank"},[w,e("span",{class:"icon ms-2",innerHTML:c.linkExternal},null,8,B)],8,T)):o("",!0),E,t.linkUrl?(s(),k(l,{key:2,to:t.linkUrl},{default:h(()=>[e("span",null,i(t.linkText),1),H,e("span",{class:"icon ms-2",innerHTML:c.arrowRight},null,8,M)]),_:1},8,["to"])):o("",!0)])],2)}var z=r(g,[["render",R],["__file","Card.vue"]]);export{z as default};
