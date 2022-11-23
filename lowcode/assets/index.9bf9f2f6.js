import{c as C,u as L}from"./lowcode.bca37bc6.js";import{d as A,f as h,r as I,o as n,B as D,q as b,t as S,F as T,K as w,u as s,a as _,c as f,w as o,p as B,D as z,l as J,T as y,Q as k,e as U,n as t,U as Q,V as W,m as X,_ as x,v as P,C as j,H as Y,W as G,X as Z,Y as ee}from"./index.42c7a497.js";import{e as M}from"./index.da5474a2.js";import{d as te}from"./dash-board.031a8ea0.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";import"./comp-wrap.12e7cace.js";const oe=C.basic.map(i=>C[i].init),le=C.data.map(i=>C[i].init),ne=C.container.map(i=>C[i].init),ae=C.form.map(i=>C[i].init),se=[{list:oe,title:"\u57FA\u7840\u7EC4\u4EF6"},{list:ne,title:"\u5BB9\u5668\u7C7B"},{list:ae,title:"\u8868\u5355\u7EC4\u4EF6"},{list:le,title:"\u6570\u636E\u5C55\u793A"},{list:[],title:"\u5BFC\u822A\u7EC4\u4EF6"},{list:[],title:"\u53CD\u9988\u7EC4\u4EF6"},{list:[],title:"\u5176\u4ED6"}],ue={class:"module-container"},re={class:"widget-list-title"},_e={class:"widget-cate"},ie=["onDragstart","onDrag","onDragend"],ce=A({__name:"left-comp-list",setup(i){const g=h(()=>se),m=I("Free"),O=(u,a)=>{var l;console.log("\u{1F680} ~ file: left-comp-list.vue ~ line 45 ~ dragstart ~ event",a),(l=a.dataTransfer)==null||l.setData("element",JSON.stringify(u))},V=(u,a)=>{var l;(l=a.dataTransfer)==null||l.setData("element",JSON.stringify(u)),M.emit("add-component",J.exports.cloneDeep(u))},v=u=>{M.emit("end-add-component",J.exports.cloneDeep(u))};return(u,a)=>{const l=_("free-tip-icon"),c=_("el-icon");return n(),D("div",ue,[b("div",re,S(m.value),1),(n(!0),D(T,null,w(s(g),(d,r)=>(n(),D(T,{key:r},[b("h5",_e,S(d.title),1),b("ul",null,[(n(!0),D(T,null,w(d.list,e=>(n(),D("li",{key:e.type,class:"widget-edit-label no-put",onDragstart:p=>O(e,p),onDrag:p=>V(e,p),onDragend:p=>v(e),draggable:"true",unselectable:"on"},[e.popover&&e.icon?(n(),f(l,{key:0,style:{"margin-left":"2px"},element:{iconOptions:{size:18,icon:e.icon},popoverOptions:{textDetail:e.popover,effect:"dark",placement:"top"}}},null,8,["element"])):e.icon?(n(),f(c,{key:1,size:16},{default:o(()=>[(n(),f(B(e.icon)))]),_:2},1024)):z("",!0),b("span",null,S(e.name),1)],40,ie))),128))])],64))),128))])}}}),de={style:{display:"flex","align-items":"center"}},pe=A({__name:"index",props:{config:{type:Object,default:()=>{}}},setup(i){const g=i,m=L(),O=I({switch:y(k(()=>x(()=>import("./switch.b4a9b222.js"),["assets/switch.b4a9b222.js","assets/index.42c7a497.js","assets/index.c89a9259.css"]))),radio:y(k(()=>x(()=>import("./radio.93aec223.js"),["assets/radio.93aec223.js","assets/index.42c7a497.js","assets/index.c89a9259.css"]))),select:y(k(()=>x(()=>import("./select.01f4bd51.js"),["assets/select.01f4bd51.js","assets/index.42c7a497.js","assets/index.c89a9259.css"]))),input:y(k(()=>x(()=>import("./input.17046dec.js"),["assets/input.17046dec.js","assets/index.42c7a497.js","assets/index.c89a9259.css"]))),"input-number":y(k(()=>x(()=>import("./input-number.1f39784e.js"),["assets/input-number.1f39784e.js","assets/index.42c7a497.js","assets/index.c89a9259.css"]))),color:y(k(()=>x(()=>import("./color.c0382183.js"),["assets/color.c0382183.js","assets/index.42c7a497.js","assets/index.c89a9259.css"]))),"dynamic-input":y(k(()=>x(()=>import("./dynamic-input.991e91aa.js"),["assets/dynamic-input.991e91aa.js","assets/dynamic-input.b53d456a.css","assets/index.42c7a497.js","assets/index.c89a9259.css","assets/_plugin-vue_export-helper.cdc0426e.js"])))}),V=h(()=>g.config.map(({label:v})=>v));return(v,u)=>{const a=_("free-tip-icon"),l=_("el-form-item"),c=_("el-form"),d=_("el-collapse-item"),r=_("el-collapse");return n(),f(r,{"model-value":s(V)},{default:o(()=>[(n(!0),D(T,null,w(i.config,e=>(n(),f(d,{key:e.key,name:e.label,title:e.label},{title:o(()=>[b("h5",de,[U(S(e.label)+" ",1),e.popover?(n(),f(a,{key:0,style:{"margin-left":"2px"},element:{iconOptions:{size:18,icon:"InfoFilled"},popoverOptions:{textDetail:e.popover,effect:"dark",placement:"top"}}},null,8,["element"])):z("",!0)])]),default:o(()=>[t(c,Q(W(e.conf)),{default:o(()=>[(n(!0),D(T,null,w(e.children,p=>(n(),f(l,X({key:p.key},p,{label:p.label,"show-message":!1}),{default:o(()=>[(n(),f(B(O.value[p.component]),{config:p,select:s(m).select,group:e.group},null,8,["config","select","group"]))]),_:2},1040,["label"]))),128))]),_:2},1040)]),_:2},1032,["name","title"]))),128))]),_:1},8,["model-value"])}}});const N=q(pe,[["__scopeId","data-v-6b8eabb0"]]),me={class:"module-container"},fe=b("h5",null," \u914D\u7F6E\u4E2D\u5FC3 ",-1),ge=A({__name:"configuration-center",setup(i){const{select:g}=P(L()),m=h(()=>C[g.value.component]),O=h(()=>m.value.confIndex),V=a=>{var l;return(l=v.value.find(({key:c})=>c===a))==null?void 0:l.component},v=I([{key:"\u5C5E\u6027",component:y(N)},{key:"\u6837\u5F0F",component:y(N)},{key:"\u52A8\u4F5C",component:y(k(()=>x(()=>import("./action.6b306222.js"),["assets/action.6b306222.js","assets/lowcode.bca37bc6.js","assets/index.42c7a497.js","assets/index.c89a9259.css","assets/comp-wrap.12e7cace.js","assets/comp-wrap.76d1abf0.css","assets/_plugin-vue_export-helper.cdc0426e.js"])))},{key:"\u9875\u9762",component:y(N)}]),u=h({get(){return O.value[0].key},set(){}});return(a,l)=>{const c=_("el-tab-pane"),d=_("el-tabs");return n(),D("section",me,[fe,t(d,{modelValue:s(u),"onUpdate:modelValue":l[0]||(l[0]=r=>j(u)?u.value=r:null)},{default:o(()=>[(n(!0),D(T,null,w(s(O),r=>(n(),f(c,{key:r.key,label:r.key,name:r.key},{default:o(()=>[(n(),f(B(V(r.key)),{config:s(m)[r.field]},null,8,["config"]))]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])])}}}),ve=b("h4",null,"\u6240\u6709\u5C5E\u6027",-1),ye=b("h4",null,"\u5F53\u524D\u9009\u4E2D",-1),he=b("h4",null,"\u4E8B\u4EF6\u6811",-1),be=b("h4",null,"\u52A8\u4F5C\u6811",-1),Ve=b("h4",null,"\u6570\u636E\u7ED1\u5B9A",-1),Ee=A({__name:"index",setup(i,{expose:g}){const{select:m,data:O,eventOption:V,modelMap:v,actionOption:u}=P(L()),a=h(()=>JSON.stringify(O.value,null,2)),l=h(()=>JSON.stringify(m.value,null,2)),c=h(()=>JSON.stringify(V.value,null,2)),d=h(()=>JSON.stringify(u.value,null,2)),r=h(()=>JSON.stringify(v.value,null,2)),e=I(!1);return g({open:()=>{e.value=!0}}),(Oe,R)=>{const E=_("el-col"),$=_("el-row"),F=_("free-raw-displayer"),H=_("el-dialog");return n(),f(H,{modelValue:e.value,"onUpdate:modelValue":R[0]||(R[0]=K=>e.value=K),width:"100%",style:{height:"80%"},title:"debugger","destroy-on-close":""},{default:o(()=>[t($,{class:"debugger-title"},{default:o(()=>[t(E,{span:5},{default:o(()=>[ve]),_:1}),t(E,{span:4},{default:o(()=>[ye]),_:1}),t(E,{span:5},{default:o(()=>[he]),_:1}),t(E,{span:5},{default:o(()=>[be]),_:1}),t(E,{span:4},{default:o(()=>[Ve]),_:1})]),_:1}),t($,{class:"debugger"},{default:o(()=>[t(E,{span:5,style:{height:"100%"}},{default:o(()=>[t(F,{readOnly:!0,defaultValue:s(a),modelValue:s(a)},null,8,["defaultValue","modelValue"])]),_:1}),t(E,{span:4,style:{height:"100%"}},{default:o(()=>[t(F,{readOnly:!0,defaultValue:s(l),modelValue:s(l)},null,8,["defaultValue","modelValue"])]),_:1}),t(E,{span:5,style:{height:"100%"}},{default:o(()=>[t(F,{readOnly:!0,defaultValue:s(c),modelValue:s(c)},null,8,["defaultValue","modelValue"])]),_:1}),t(E,{span:5,style:{height:"100%"}},{default:o(()=>[t(F,{readOnly:!0,defaultValue:s(d),modelValue:s(d)},null,8,["defaultValue","modelValue"])]),_:1}),t(E,{span:4,style:{height:"100%"}},{default:o(()=>[t(F,{readOnly:!0,defaultValue:s(r),modelValue:s(r)},null,8,["defaultValue","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),De=A({__name:"index",setup(i){const{data:g}=P(L()),m=h({get(){return g.value.children},set(a){g.value.children=a}});ee("updateItem",(a,{key:l,value:c})=>{a[l]=c});const V=I(!0);Y(()=>{V.value=!1});const v=I(),u=()=>{v.value.open()};return(a,l)=>{const c=_("el-button"),d=_("el-col"),r=_("el-row"),e=Z("loading");return n(),D(T,null,[G((n(),f(r,{class:"freedom-main"},{default:o(()=>[t(d,{span:3},{default:o(()=>[t(ce),t(c,{onClick:u,type:"primary",plain:"",class:"debugger-btn"},{default:o(()=>[U(" debugger ")]),_:1})]),_:1}),t(d,{span:17},{default:o(()=>[t(te,{"layout-data":s(m),"onUpdate:layout-data":l[0]||(l[0]=p=>j(m)?m.value=p:null),parent:s(g),class:"base-dashboard scrollbar"},null,8,["layout-data","parent"])]),_:1}),t(d,{span:4},{default:o(()=>[t(ge)]),_:1})]),_:1})),[[e,V.value]]),t(Ee,{ref_key:"debuggerRef",ref:v},null,512)],64)}}});const we=q(De,[["__scopeId","data-v-a37e8e75"]]);export{we as default};
