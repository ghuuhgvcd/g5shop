import{d as D,a as N,i as P,_ as C,j as U,b as W,u as G,m as O}from"./index-a2579a4a.js";import{H as j,F as E,i as T}from"./footer-f6f851cd.js";import{o as J,r as X,g as Y}from"./router-4bf38355.js";import{h as g,a0 as q,q as r,W as Z,o as c,N as p,O as l,m as d,z as n,p as t,T as b,X as z,k as h,Z as B,Y as I,V as K,a4 as Q,a5 as ee,a6 as F,w as te,a7 as ne,l as H,M as se,a8 as oe,E as ae,i as re,I as le}from"./vue-18a0f25a.js";import{m as V}from"./layout-1858513c.js";const ce={class:"userinfo"},ie=["src"],ue={class:"username"},_e={class:"user-menus"},me={key:0,class:"user-menu-max-title"},de=["onClick"],pe=g({__name:"aside",setup(f){const _=q(),s=D(),i=N(),u=(o="",e)=>{document.body.clientWidth<992&&i.toggleMenuExpand(!1),o?_.push({name:o}):e&&J(e)};return(o,e)=>{const a=r("Icon"),v=r("el-button"),m=r("el-button-group"),w=r("el-aside"),R=Z("blur");return c(),p(w,{class:"ba-user-layouts"},{default:l(()=>[d("div",ce,[d("div",{onClick:e[0]||(e[0]=y=>u("account/profile")),class:"user-avatar-box"},[d("img",{class:"user-avatar",src:n(P)(n(s).avatar?n(s).avatar:"/static/images/avatar.png"),alt:""},null,8,ie),t(a,{class:"user-avatar-gender",name:n(s).getGenderIcon().name,size:"14",color:n(s).getGenderIcon().color},null,8,["name","color"])]),d("p",ue,b(n(s).nickname),1),t(m,null,{default:l(()=>[z((c(),p(v,{onClick:e[1]||(e[1]=y=>u("account/integral")),class:"userinfo-button-item",title:o.$t("Integral")+" "+n(s).score,size:"default",plain:""},{default:l(()=>[d("span",null,b(o.$t("Integral")+" "+n(s).score),1)]),_:1},8,["title"])),[[R]]),z((c(),p(v,{onClick:e[2]||(e[2]=y=>u("account/balance")),class:"userinfo-button-item",title:o.$t("Balance")+" "+n(s).money,size:"default",plain:""},{default:l(()=>[d("span",null,b(o.$t("Balance")+" "+n(s).money),1)]),_:1},8,["title"])),[[R]])]),_:1})]),d("div",_e,[(c(!0),h(I,null,B(n(i).state.viewRoutes,(y,A)=>{var x;return c(),h(I,{key:A},[n(i).state.showHeadline?(c(),h("div",me,b((x=y.meta)==null?void 0:x.title),1)):K("",!0),(c(!0),h(I,null,B(y.children,(k,L)=>{var $,M,S;return c(),h("div",{key:L,onClick:we=>u("",k),class:Q(["user-menu-item",(($=n(i).state.activeRoute)==null?void 0:$.name)==k.name?"active":""])},[t(a,{name:(M=k.meta)==null?void 0:M.icon,size:"16",color:"var(--el-text-color-secondary)"},null,8,["name"]),d("span",null,b((S=k.meta)==null?void 0:S.title),1)],10,de)}),128))],64)}),128))])]),_:1})}}});const fe=C(pe,[["__scopeId","data-v-723a7442"]]),ve=g({__name:"main",setup(f){const _=U();return(s,i)=>{const u=r("router-view"),o=r("el-main");return c(),p(o,{class:"layout-main"},{default:l(()=>[t(u,null,{default:l(({Component:e})=>[t(ee,{name:n(_).layout.mainAnimation,mode:"out-in"},{default:l(()=>[(c(),p(F(e)))]),_:2},1032,["name"])]),_:1})]),_:1})}}});const ye=C(ve,[["__scopeId","data-v-bc73de31"]]),be=g({__name:"default",setup(f){const _=te();return ne("mainScrollbarRef",_),(s,i)=>{const u=r("el-col"),o=r("el-row"),e=r("el-scrollbar"),a=r("el-container");return c(),p(a,{class:"is-vertical"},{default:l(()=>[t(j),t(e,{style:H(n(V)()),ref_key:"mainScrollbarRef",ref:_},{default:l(()=>[t(o,{class:"frontend-footer-brother",justify:"center"},{default:l(()=>[t(u,{class:"user-layouts",span:16,xs:24},{default:l(()=>[t(fe,{class:"hidden-sm-and-down"}),t(ye)]),_:1})]),_:1}),t(E)]),_:1},8,["style"])]),_:1})}}});const he=C(be,[["__scopeId","data-v-9c0a521c"]]),ge=g({__name:"disable",setup(f){return(_,s)=>{const i=r("el-alert"),u=r("el-col"),o=r("el-row"),e=r("el-scrollbar"),a=r("el-container");return c(),p(a,{class:"is-vertical"},{default:l(()=>[t(j),t(e,{style:H(n(V)()),ref:"mainScrollbarRef"},{default:l(()=>[t(o,{class:"frontend-footer-brother",justify:"center"},{default:l(()=>[t(u,{class:"user-layouts",span:16,xs:24},{default:l(()=>[t(i,{center:!0,title:_.$t("Member center disabled"),type:"error"},null,8,["title"])]),_:1})]),_:1}),t(E)]),_:1},8,["style"])]),_:1})}}});const ke=C(ge,[["__scopeId","data-v-e004cd2e"]]);function Ce(){return new Promise(f=>{f({type:"continue"})})}const Se=g({components:{Default:he,Disable:ke},__name:"user",setup(f){const{t:_}=W(),s=se(),i=q(),u=D(),o=G(),e=N();return oe(a=>{e.setActiveRoute(a)}),ae(async()=>{const a=await Ce();if(a.type=="break")return;if(a.type=="reload")return window.location.href=a.url;if(!u.token)return i.push({name:"userLogin"});const v=()=>{if(a.type=="jump")return i.push(a.url);if(s.params.to){const m=JSON.parse(s.params.to);if(m.path!=O.path){let w=re(m.query)?{}:m.query;X({path:m.path,query:w});return}}if(s.name=="userMainLoading"){let m=Y(e.state.viewRoutes);m?i.push({path:m.path}):le({type:"error",message:_("No route found to jump~")})}};o.userInitialize?v():T(v,!0),document.body.clientWidth<1024?e.setShrink(!0):e.setShrink(!1)}),(a,v)=>(c(),p(F(n(e).state.layoutMode)))}});export{Se as default};
