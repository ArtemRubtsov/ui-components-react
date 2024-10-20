import{j as n,a as f,F as s}from"./jsx-runtime-29545a09.js";import{c as D}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const N="_display_y5ska_1",I="_inline_y5ska_5",S={display:N,"inline-block":"_inline-block_y5ska_5",inline:I},e=o=>{const{as:v="div",children:B,className:_,display:w="block",...C}=o;return n(v,{className:D(S[w],_),...C,children:B})};try{e.displayName="Box",e.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'},{value:'"inline-block"'}]}}}}}catch{}const F={args:{},component:e,tags:["autodocs"],title:"Components/Box"},r={parameters:{group:"Display"},render:()=>f(s,{children:[n(e,{as:"div",display:"block",children:n("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})}),n(e,{as:"span",display:"inline-block",children:n("div",{style:{backgroundColor:"green",height:"64px",width:"64px"}})}),n(e,{as:"div",display:"inline",children:n("div",{style:{backgroundColor:"yellow",height:"64px",width:"64px"}})})]})},i={args:{children:"block",display:"block"},render:()=>n(s,{children:n(e,{as:"div",children:n("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})})})},a={args:{display:"inline-block"},render:()=>n(s,{children:n(e,{as:"div",display:"block",children:n("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})})})},l={args:{children:"inline",display:"inline"},render:()=>n(s,{children:n(e,{as:"div",display:"inline",children:n("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})})})};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    group: 'Display'
  },
  render: () => <>\r
      <Box as={'div'} display={'block'}>\r
        <div style={{
        backgroundColor: 'black',
        height: '64px',
        width: '64px'
      }}></div>\r
      </Box>\r
      <Box as={'span'} display={'inline-block'}>\r
        <div style={{
        backgroundColor: 'green',
        height: '64px',
        width: '64px'
      }}></div>\r
      </Box>\r
      <Box as={'div'} display={'inline'}>\r
        <div style={{
        backgroundColor: 'yellow',
        height: '64px',
        width: '64px'
      }}></div>\r
      </Box>\r
    </>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var t,y,h;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'block',
    display: 'block'
  },
  render: () => <>\r
      <Box as={'div'}>\r
        <div style={{
        backgroundColor: 'black',
        height: '64px',
        width: '64px'
      }}></div>\r
      </Box>\r
    </>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,u,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    display: 'inline-block'
  },
  render: () => <>\r
      <Box as={'div'} display={'block'}>\r
        <div style={{
        backgroundColor: 'black',
        height: '64px',
        width: '64px'
      }}></div>\r
      </Box>\r
    </>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,k,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'inline',
    display: 'inline'
  },
  render: () => <>\r
      <Box as={'div'} display={'inline'}>\r
        <div style={{
        backgroundColor: 'black',
        height: '64px',
        width: '64px'
      }}></div>\r
      </Box>\r
    </>
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const O=["Display","DisplayBlock","DisplayInlineBox","DisplayInline"];export{r as Display,i as DisplayBlock,l as DisplayInline,a as DisplayInlineBox,O as __namedExportsOrder,F as default};
