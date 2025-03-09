import{j as e}from"./jsx-runtime-3dc6859f.js";import{R as E,r as W}from"./index-d4014758.js";import{c as b}from"./clsx-1229b3e0.js";import{T}from"./text-86a86712.js";const q="_textarea_wqc60_1",y="_textareaError_wqc60_42",S="_error_wqc60_47",j="_label_wqc60_51",w="_labelDisabled_wqc60_55",r={textarea:q,textareaError:y,error:S,label:j,labelDisabled:w},i=E.forwardRef(({className:p,disabled:x,error:d,label:m,onChange:g,...h},_)=>{const u=W.useId(),f=D=>{g?.(D)};return e.jsxs("div",{className:p,children:[m&&e.jsx(T,{as:"label",className:b(r.label,x?r.labelDisabled:""),htmlFor:u,children:m}),e.jsx("textarea",{...h,className:b(r.textarea,d?r.textareaError:""),disabled:x,id:u,onChange:f,ref:_}),d&&e.jsx(T,{as:"div",color:"red",children:d})]})});try{i.displayName="Textarea",i.__docgenInfo={description:"",displayName:"Textarea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}}}}}catch{}const v={argTypes:{disabled:{control:"boolean"},error:{control:"text"},label:{control:"text"},placeholder:{control:"text"},value:{control:"text"}},component:i,title:"Components/Textarea"},a={args:{}},t={args:{label:"Text-area"}},s={args:{placeholder:"Text-area"}},o={args:{error:"Error text"}},l={args:{disabled:!0}},c={args:{disabled:!0,label:"Text-area"}},n={args:{disabled:!0,placeholder:"Text-area"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Text-area'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Text-area'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Error text'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Text-area'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Text-area'
  }
}`,...n.parameters?.docs?.source}}};const C=["TextareaDefault","TextareaWithLabel","TextareaWithPlaceholder","TextareaWithError","TextareaDisable","TextareaDisableWithLabel","TextareaDisableWithPlaceholder"];export{a as TextareaDefault,l as TextareaDisable,c as TextareaDisableWithLabel,n as TextareaDisableWithPlaceholder,o as TextareaWithError,t as TextareaWithLabel,s as TextareaWithPlaceholder,C as __namedExportsOrder,v as default};
