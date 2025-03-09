import{j as n}from"./jsx-runtime-3dc6859f.js";import{I as d}from"./input-66b424bd.js";import"./index-d4014758.js";import"./clsx-1229b3e0.js";const m={argTypes:{type:{control:"select",options:["checkbox","color","date","datetime","datetime-local","file","number","password","radio","range","tel","text","submit"]},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","default"]}},component:d,tags:["autodocs"],title:"Components/Input"},e={render:()=>n.jsxs("div",{style:{display:"flex",gap:16},children:[n.jsx("label",{htmlFor:"test",children:"name "}),n.jsx(d,{name:"test",type:"text",variant:"default"})]})},r={args:{disabled:!1,type:"text",variant:"primary"}},a={args:{type:"checkbox"}},t={args:{disabled:!1,type:"color",variant:"secondary"}},s={args:{disabled:!1,type:"date",variant:"tertiary"}},o={args:{disabled:!1,fullWidth:!0,type:"password",variant:"primary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>\r
      <label htmlFor={'test'}>name </label>\r
      <Input name={'test'} type={'text'} variant={'default'} />\r
    </div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'text',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'color',
    variant: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    type: 'date',
    variant: 'tertiary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    fullWidth: true,
    type: 'password',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","Primary","Checkbox","Secondary","Tertiary","FullWidth"];export{a as Checkbox,e as Default,o as FullWidth,r as Primary,t as Secondary,s as Tertiary,u as __namedExportsOrder,m as default};
