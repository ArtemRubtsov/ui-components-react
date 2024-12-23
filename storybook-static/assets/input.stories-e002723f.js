import{j as y}from"./jsx-runtime-c64c8078.js";import{c as f}from"./clsx-1229b3e0.js";import"./index-8365acb2.js";const o={default:"_default_z2mrc_1"},n=l=>{const{className:i,fullWidth:c,type:d="text",variant:u="default",...p}=l,m=f(o.input,o[u],c&&o.fullWidth,i);return y.jsx("input",{className:m,type:d,...p})};try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"color"'},{value:'"checkbox"'},{value:'"radio"'},{value:'"tel"'},{value:'"date"'},{value:'"datetime"'},{value:'"datetime-local"'},{value:'"file"'},{value:'"password"'},{value:'"range"'},{value:'"submit"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const x={argTypes:{type:{control:"select",options:["checkbox","color","date","datetime","datetime-local","file","number","password","radio","range","tel","text","submit"]},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","default"]}},component:n,tags:["autodocs"],title:"Components/Input"},e={args:{disabled:!1,type:"text",variant:"primary"}},a={args:{type:"checkbox"}},r={args:{disabled:!1,type:"color",variant:"secondary"}},t={args:{disabled:!1,type:"date",variant:"tertiary"}},s={args:{disabled:!1,fullWidth:!0,type:"password",variant:"primary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'text',
    variant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'color',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'date',
    variant: 'tertiary'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    fullWidth: true,
    type: 'password',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};const h=["Primary","Checkbox","Secondary","Tertiary","FullWidth"];export{a as Checkbox,s as FullWidth,e as Primary,r as Secondary,t as Tertiary,h as __namedExportsOrder,x as default};
