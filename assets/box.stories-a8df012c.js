import{j as n}from"./jsx-runtime-3dc6859f.js";import{c as x}from"./clsx-1229b3e0.js";import"./index-d4014758.js";const y="_display_y5ska_1",h="_inline_y5ska_5",g={display:y,"inline-block":"_inline-block_y5ska_5",inline:h},e=l=>{const{as:o="div",children:d,className:c,display:t="block",...p}=l;return n.jsx(o,{className:x(g[t],c),...p,children:d})};try{e.displayName="Box",e.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'}]}}}}}catch{}const b={args:{},component:e,tags:["autodocs"],title:"Components/Box"},r={parameters:{group:"Display"},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{as:"div",display:"block",children:n.jsx("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})}),n.jsx(e,{as:"span",display:"inline-block",children:n.jsx("div",{style:{backgroundColor:"green",height:"64px",width:"64px"}})}),n.jsx(e,{as:"div",display:"inline",children:n.jsx("div",{style:{backgroundColor:"yellow",height:"64px",width:"64px"}})})]})},i={args:{children:"block",display:"block"},render:()=>n.jsx(n.Fragment,{children:n.jsx(e,{as:"div",children:n.jsx("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})})})},s={args:{display:"inline-block"},render:()=>n.jsx(n.Fragment,{children:n.jsx(e,{as:"div",display:"block",children:n.jsx("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})})})},a={args:{children:"inline",display:"inline"},render:()=>n.jsx(n.Fragment,{children:n.jsx(e,{as:"div",display:"inline",children:n.jsx("div",{style:{backgroundColor:"black",height:"64px",width:"64px"}})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Display","DisplayBlock","DisplayInlineBox","DisplayInline"];export{r as Display,i as DisplayBlock,a as DisplayInline,s as DisplayInlineBox,v as __namedExportsOrder,b as default};
