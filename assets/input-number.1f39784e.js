import{d as p,f as u,a as i,o as m,c as g,u as f,C as d}from"./index.42c7a497.js";const v=p({__name:"input-number",props:{select:{type:Object,require:!0},config:{type:Object,require:!0},group:String},setup(l){const e=l,n=u(()=>{var t;return(t=e.config)==null?void 0:t.key}),s=()=>e.group?e.select[e.group]:e.select.options[n.value]!==void 0?e.select.options:e.select,r=u({get:()=>s()[n.value],set:t=>{const o=s();o[n.value]=t}});return(t,o)=>{const a=i("el-input-number");return m(),g(a,{modelValue:f(r),"onUpdate:modelValue":o[0]||(o[0]=c=>d(r)?r.value=c:null),min:1,max:1/0,"controls-position":"right",size:"small"},null,8,["modelValue"])}}});export{v as default};
