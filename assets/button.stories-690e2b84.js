import{j as n}from"./jsx-runtime-c64c8078.js";import{c as k}from"./clsx-1229b3e0.js";import"./index-8365acb2.js";const x="_button_nw5vn_1",g="_fullWidth_nw5vn_14",_="_primary_nw5vn_30",W="_secondary_nw5vn_43",j="_link_nw5vn_56",b="_link2_nw5vn_69",S="_circle_nw5vn_82",t={button:x,fullWidth:g,default:"_default_nw5vn_18",primary:_,secondary:W,link:j,link2:b,circle:S},r=u=>{const{as:p="button",circle:m,className:y,fullWidth:f,variant:h="primary",...v}=u,B=k(t.button,t[h],f&&t.fullWidth,m&&t.circle,y);return n.jsx(p,{className:B,...v})};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},circle:{defaultValue:null,description:"",name:"circle",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"link2"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const P={argTypes:{circle:{control:{type:"check"},options:["circle"]},onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","link","default"]}},component:r,tags:["autodocs"],title:"Components/Button"},a={render:()=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"20px"},children:[n.jsx(r,{variant:"default",children:"Default Button"}),n.jsx(r,{variant:"primary",children:"Primary Button"}),n.jsx(r,{variant:"secondary",children:"Secondary Button"}),n.jsx(r,{variant:"link",children:"Link"}),n.jsx(r,{variant:"link2",children:"Link2"})]}),n.jsx("hr",{}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",maxWidth:"200px"},children:[n.jsx("h2",{style:{fontFamily:"monospace",fontWeight:"normal"},children:"Without circle property"}),n.jsx(r,{variant:"default",children:"Default Button"}),n.jsx(r,{variant:"primary",children:"Primary Button"}),n.jsx(r,{variant:"secondary",children:"Secondary Button"}),n.jsx(r,{variant:"link",children:"Link"}),n.jsx(r,{variant:"link2",children:"Link2"})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",maxWidth:"200px"},children:[n.jsx("h2",{style:{fontFamily:"monospace",fontWeight:"normal"},children:"With circle property"}),n.jsx(r,{circle:!0,variant:"default",children:"Default Button"}),n.jsx(r,{circle:!0,variant:"primary",children:"Primary Button"}),n.jsx(r,{circle:!0,variant:"secondary",children:"Secondary Button"}),n.jsx(r,{circle:!0,variant:"link",children:"Link"}),n.jsx(r,{circle:!0,variant:"link2",children:"Link2"})]})]})]})},e={args:{children:"Primary Button",disabled:!1,variant:"primary"}},i={args:{children:"Default Button",disabled:!1,variant:"default"}},o={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},l={args:{children:"Button that looks like a link",disabled:!1,variant:"link"}},s={args:{children:"Button that looks like a link",disabled:!1,variant:"link2"}},c={args:{children:"Full Width Button",disabled:!1,fullWidth:!0,variant:"primary"}},d={args:{as:"a",children:"Link that looks like a button",href:"https://google.com",rel:"noopener noreferrer",target:"_blank",variant:"primary"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginBottom: '20px'
      }}>\r
          <Button variant={'default'}>Default Button</Button>\r
          <Button variant={'primary'}>Primary Button</Button>\r
          <Button variant={'secondary'}>Secondary Button</Button>\r
          <Button variant={'link'}>Link</Button>\r
          <Button variant={'link2'}>Link2</Button>\r
        </div>\r
        <hr />\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>\r
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          maxWidth: '200px'
        }}>\r
            <h2 style={{
            fontFamily: 'monospace',
            fontWeight: 'normal'
          }}>\r
              Without circle property\r
            </h2>\r
            <Button variant={'default'}>Default Button</Button>\r
            <Button variant={'primary'}>Primary Button</Button>\r
            <Button variant={'secondary'}>Secondary Button</Button>\r
            <Button variant={'link'}>Link</Button>\r
            <Button variant={'link2'}>Link2</Button>\r
          </div>\r
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          maxWidth: '200px'
        }}>\r
            <h2 style={{
            fontFamily: 'monospace',
            fontWeight: 'normal'
          }}>With circle property</h2>\r
            <Button circle variant={'default'}>\r
              Default Button\r
            </Button>\r
            <Button circle variant={'primary'}>\r
              Primary Button\r
            </Button>\r
            <Button circle variant={'secondary'}>\r
              Secondary Button\r
            </Button>\r
            <Button circle variant={'link'}>\r
              Link\r
            </Button>\r
            <Button circle variant={'link2'}>\r
              Link2\r
            </Button>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    disabled: false,
    variant: 'default'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link2'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary'
  }
}`,...d.parameters?.docs?.source}}};const F=["ButtonStory","Primary","Default","Secondary","Link","Link2","FullWidth","AsLink"];export{d as AsLink,a as ButtonStory,i as Default,c as FullWidth,l as Link,s as Link2,e as Primary,o as Secondary,F as __namedExportsOrder,P as default};
