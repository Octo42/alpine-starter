import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.e95de379.js";import{u as d}from"./asyncData.270f5f51.js";import f from"./Ellipsis.e5059d71.js";import _ from"./ComponentPlaygroundData.195d21c3.js";import"./TabsHeader.25407842.js";import"./ComponentPlaygroundProps.95ee0409.js";import"./ProseH4.11725f84.js";import"./ProseCodeInline.6101b037.js";import"./Badge.09600bf1.js";import"./MDCSlot.66a343c6.js";import"./slot.b6440aff.js";import"./ProseP.7ed70c8a.js";import"./index.8cebe545.js";import"./ComponentPlaygroundSlots.vue.b8c78889.js";import"./ComponentPlaygroundTokens.vue.ac76b823.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-51227037"]]);export{V as default};
