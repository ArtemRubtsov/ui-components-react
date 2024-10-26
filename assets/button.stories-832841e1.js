import{j as n,a as t,F as J}from"./jsx-runtime-29545a09.js";import{c as K}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const M="_button_nw5vn_1",Q="_fullWidth_nw5vn_14",R="_primary_nw5vn_30",U="_secondary_nw5vn_43",X="_link_nw5vn_56",Y="_link2_nw5vn_69",Z="_circle_nw5vn_82",a={button:M,fullWidth:Q,default:"_default_nw5vn_18",primary:R,secondary:U,link:X,link2:Y,circle:Z},r=p=>{const{as:E="button",circle:T,className:I,fullWidth:O,variant:z="primary",...G}=p,H=K(a.button,a[z],O&&a.fullWidth,T&&a.circle,I);return n(E,{className:H,...G})};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},circle:{defaultValue:null,description:"",name:"circle",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"link2"'}]}}}}}catch{}const an={argTypes:{circle:{control:{type:"check"},options:["circle"]},onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","link","default"]}},component:r,tags:["autodocs"],title:"Components/Button"},e={render:()=>t(J,{children:[t("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"20px"},children:[n(r,{variant:"default",children:"Default Button"}),n(r,{variant:"primary",children:"Primary Button"}),n(r,{variant:"secondary",children:"Secondary Button"}),n(r,{variant:"link",children:"Link"}),n(r,{variant:"link2",children:"Link2"})]}),n("hr",{}),t("div",{style:{display:"flex",justifyContent:"space-around"},children:[t("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",maxWidth:"200px"},children:[n("h2",{style:{fontFamily:"monospace",fontWeight:"normal"},children:"Without circle property"}),n(r,{variant:"default",children:"Default Button"}),n(r,{variant:"primary",children:"Primary Button"}),n(r,{variant:"secondary",children:"Secondary Button"}),n(r,{variant:"link",children:"Link"}),n(r,{variant:"link2",children:"Link2"})]}),t("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",maxWidth:"200px"},children:[n("h2",{style:{fontFamily:"monospace",fontWeight:"normal"},children:"With circle property"}),n(r,{circle:!0,variant:"default",children:"Default Button"}),n(r,{circle:!0,variant:"primary",children:"Primary Button"}),n(r,{circle:!0,variant:"secondary",children:"Secondary Button"}),n(r,{circle:!0,variant:"link",children:"Link"}),n(r,{circle:!0,variant:"link2",children:"Link2"})]})]})]})},i={args:{children:"Primary Button",disabled:!1,variant:"primary"}},o={args:{children:"Default Button",disabled:!1,variant:"default"}},l={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},s={args:{children:"Button that looks like a link",disabled:!1,variant:"link"}},c={args:{children:"Button that looks like a link",disabled:!1,variant:"link2"}},d={args:{children:"Full Width Button",disabled:!1,fullWidth:!0,variant:"primary"}},u={args:{as:"a",children:"Link that looks like a button",href:"https://google.com",rel:"noopener noreferrer",target:"_blank",variant:"primary"}};var m,y,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(y=e.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,v,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var k,g,_;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    disabled: false,
    variant: 'default'
  }
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var x,W,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...(b=(W=l.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var S,L,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link'
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var D,P,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link2'
  }
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var C,j,q;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var N,V,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary'
  }
}`,...(A=(V=u.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const en=["ButtonStory","Primary","Default","Secondary","Link","Link2","FullWidth","AsLink"];export{u as AsLink,e as ButtonStory,o as Default,d as FullWidth,s as Link,c as Link2,i as Primary,l as Secondary,en as __namedExportsOrder,an as default};
