import{_ as f,Y as C,o,c as n,b as e,F as h,l as v,m as d,$ as g,d as i,ah as p,a8 as w,t as _}from"./app.e6980e95.js";import{E as k,H as y}from"./hamburger-2.8adf8044.js";const T={props:{image:{type:String,required:!0},contents:{type:Array}},data(){return{ChevronDown:C,Expand:k,Hamburger:y,localContents:null,fullScreen:!1,viewCode:!1}},created(){this.contents&&this.$watch("contents",()=>{this.localContents=this.contents.map(r=>(r.active=!1,r))},{immediate:!0})},methods:{scrollTo(r,l){const c=this.$refs[r+"-"+l];window.scrollTo(0,c[0].offsetTop-105),this.localContents[l].active=!0},menu(){}}},H={class:"c-image-map"},L={class:"preview-container"},M={class:"top-container"},S=["innerHTML"],x=i(),b=["innerHTML"],D=i(),E={class:"middle-container"},V={class:"image-container"},B={class:"image-wrap"},N=["src"],F=i(),I={key:0},P=["onClick"],q={href:"#"},z=i(),A={class:"bottom-container"},Y=i("View Code "),j=["innerHTML"],G=i(),J={key:0,class:"code-container"},K=i(),O={key:0,class:"description-wrap"},Q=["onClick"],R={class:"circle-point"},U=i(),W={class:"h5"},X=i(),Z=["innerHTML"],$=i(),ee={key:0,class:"text"},se=i(),te={key:1,class:"full-view-wrap"};function oe(r,l,c,ne,t,u){return o(),n("div",H,[e("div",L,[e("div",M,[e("div",{onClick:l[0]||(l[0]=s=>t.fullScreen=!0),class:"icon me-4",innerHTML:t.Expand},null,8,S),x,e("div",{onClick:l[1]||(l[1]=(...s)=>u.menu&&u.menu(...s)),class:"icon",innerHTML:t.Hamburger},null,8,b)]),D,e("div",E,[e("div",V,[e("div",B,[e("img",{src:c.image,alt:""},null,8,N)]),F,c.contents?(o(),n("div",I,[(o(!0),n(h,null,v(t.localContents,(s,a)=>(o(),n(h,null,[s.x!==void 0&&s.y!==void 0?(o(),n("div",{key:0,class:"circle-point image-point",style:p({top:s.y+"%",left:s.x+"%"}),onClick:w(m=>u.scrollTo(c.image,a),["prevent"])},[e("a",q,_(a+1),1)],12,P)):d("",!0)],64))),256))])):d("",!0)])]),z,e("div",A,[e("div",{onClick:l[2]||(l[2]=s=>t.viewCode=!t.viewCode),class:"toggle"},[Y,e("span",{innerHTML:t.ChevronDown,class:"icon"},null,8,j)])]),G,t.viewCode?(o(),n("div",J,[g(r.$slots,"code")])):d("",!0)]),K,c.contents?(o(),n("div",O,[e("ul",null,[(o(!0),n(h,null,v(t.localContents,(s,a)=>(o(),n("li",{key:a,ref_for:!0,ref:c.image+"-"+a},[e("div",{class:"title",onClick:m=>s.active=!s.active},[e("div",R,[e("span",null,_(a+1),1)]),U,e("div",W,_(s.title),1),X,e("div",{class:"toggle",innerHTML:t.ChevronDown},null,8,Z)],8,Q),$,s.active?(o(),n("div",ee,_(s.text),1)):d("",!0)]))),128))])])):d("",!0),se,t.fullScreen?(o(),n("div",te)):d("",!0)])}var ce=f(T,[["render",oe],["__file","PreviewImage.vue"]]);export{ce as default};
