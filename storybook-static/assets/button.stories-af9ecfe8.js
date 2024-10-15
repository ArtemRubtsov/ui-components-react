import{j as V}from"./jsx-runtime-29545a09.js";import{c as j}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const A="_button_1tfco_1",E="_fullWidth_1tfco_13",I="_primary_1tfco_17",O="_secondary_1tfco_22",w="_tertiary_1tfco_27",z="_link_1tfco_32",D="_icon_1tfco_37",s={button:A,fullWidth:E,primary:I,secondary:O,tertiary:w,link:z,icon:D},i=l=>{const{as:N="button",className:x,fullWidth:F,variant:P="primary",...q}=l,C=j(s.button,s[P],F&&s.fullWidth,x);return V(N,{className:C,...q})};try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const M={argTypes:{onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","link"]}},component:i,tags:["autodocs"],title:"Components/Button"},r={args:{children:"Primary Button",disabled:!1,variant:"primary"}},a={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},e={args:{children:"Tertiary Button",disabled:!1,variant:"tertiary"}},t={args:{children:"Button that looks like a link",disabled:!1,variant:"link"}},n={args:{children:"Full Width Button",disabled:!1,fullWidth:!0,variant:"primary"}},o={args:{as:"a",children:"Link that looks like a button",href:"https://google.com",rel:"noopener noreferrer",target:"_blank",variant:"primary"}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var f,h,_;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'tertiary'
  }
}`,...(_=(h=e.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var g,k,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link'
  }
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var b,B,W;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var S,L,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary'
  }
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const Q=["Primary","Secondary","Tertiary","Link","FullWidth","AsLink"];export{o as AsLink,n as FullWidth,t as Link,r as Primary,a as Secondary,e as Tertiary,Q as __namedExportsOrder,M as default};
