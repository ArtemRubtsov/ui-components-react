import{j as n}from"./jsx-runtime-3dc6859f.js";import{B as r}from"./button-d39c675b.js";import"./index-d4014758.js";import"./clsx-1229b3e0.js";const y={argTypes:{circle:{control:{type:"check"},options:["circle"]},onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","link","default"]}},component:r,tags:["autodocs"],title:"Components/Button"},t={render:()=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"20px"},children:[n.jsx(r,{variant:"default",children:"Default Button"}),n.jsx(r,{variant:"primary",children:"Primary Button"}),n.jsx(r,{variant:"secondary",children:"Secondary Button"}),n.jsx(r,{variant:"link",children:"Link"}),n.jsx(r,{variant:"link2",children:"Link2"})]}),n.jsx("hr",{}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",maxWidth:"200px"},children:[n.jsx("h2",{style:{fontFamily:"monospace",fontWeight:"normal"},children:"Without circle property"}),n.jsx(r,{variant:"default",children:"Default Button"}),n.jsx(r,{variant:"primary",children:"Primary Button"}),n.jsx(r,{variant:"secondary",children:"Secondary Button"}),n.jsx(r,{variant:"link",children:"Link"}),n.jsx(r,{variant:"link2",children:"Link2"})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",maxWidth:"200px"},children:[n.jsx("h2",{style:{fontFamily:"monospace",fontWeight:"normal"},children:"With circle property"}),n.jsx(r,{circle:!0,variant:"default",children:"Default Button"}),n.jsx(r,{circle:!0,variant:"primary",children:"Primary Button"}),n.jsx(r,{circle:!0,variant:"secondary",children:"Secondary Button"}),n.jsx(r,{circle:!0,variant:"link",children:"Link"}),n.jsx(r,{circle:!0,variant:"link2",children:"Link2"})]})]})]})},a={args:{children:"Primary Button",disabled:!1,variant:"primary"}},e={args:{children:"Default Button",disabled:!1,variant:"default"}},i={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},o={args:{children:"Button that looks like a link",disabled:!1,variant:"link"}},s={args:{children:"Button that looks like a link",disabled:!1,variant:"link2"}},l={args:{children:"Full Width Button",disabled:!1,fullWidth:!0,variant:"primary"}},c={args:{as:"a",children:"Link that looks like a button",href:"https://google.com",rel:"noopener noreferrer",target:"_blank",variant:"primary"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    disabled: false,
    variant: 'default'
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link2'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary'
  }
}`,...c.parameters?.docs?.source}}};const h=["ButtonStory","Primary","Default","Secondary","Link","Link2","FullWidth","AsLink"];export{c as AsLink,t as ButtonStory,e as Default,l as FullWidth,o as Link,s as Link2,a as Primary,i as Secondary,h as __namedExportsOrder,y as default};
