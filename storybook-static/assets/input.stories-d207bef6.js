import{j as C}from"./jsx-runtime-29545a09.js";import{c as T}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o={default:"_default_z2mrc_1"},n=l=>{const{className:S,fullWidth:k,type:I="text",variant:N="default",...w}=l,q=T(o.input,o[N],k&&o.fullWidth,S);return C("input",{className:q,type:I,...w})};try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"color"'},{value:'"checkbox"'},{value:'"radio"'},{value:'"tel"'},{value:'"date"'},{value:'"datetime"'},{value:'"datetime-local"'},{value:'"file"'},{value:'"password"'},{value:'"range"'},{value:'"submit"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const z={argTypes:{type:{control:"select",options:["checkbox","color","date","datetime","datetime-local","file","number","password","radio","range","tel","text","submit"]},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","default"]}},component:n,tags:["autodocs"],title:"Components/Input"},e={args:{disabled:!1,type:"text",variant:"primary"}},a={args:{type:"checkbox"}},r={args:{disabled:!1,type:"color",variant:"secondary"}},t={args:{disabled:!1,type:"date",variant:"tertiary"}},s={args:{disabled:!1,fullWidth:!0,type:"password",variant:"primary"}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'text',
    variant: 'primary'
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,f,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'color',
    variant: 'secondary'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,b,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'date',
    variant: 'tertiary'
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,_,W;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: false,
    fullWidth: true,
    type: 'password',
    variant: 'primary'
  }
}`,...(W=(_=s.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const E=["Primary","Checkbox","Secondary","Tertiary","FullWidth"];export{a as Checkbox,s as FullWidth,e as Primary,r as Secondary,t as Tertiary,E as __namedExportsOrder,z as default};
