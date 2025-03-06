import{j as r}from"./jsx-runtime-c64c8078.js";import{c as i}from"./clsx-1229b3e0.js";import"./index-8365acb2.js";const x="_avatar_rfs2h_1",g="_xxs_rfs2h_1",h="_xs_rfs2h_5",m="_s_rfs2h_9",y="_m_rfs2h_13",v="_l_rfs2h_17",A="_xl_rfs2h_21",j="_xxl_rfs2h_25",b="_xxxl_rfs2h_29",w="_circle_rfs2h_41",z="_block_rfs2h_49",N="_flex_rfs2h_53",q="_inline_rfs2h_57",e={avatar:x,xxs:g,xs:h,s:m,m:y,l:v,xl:A,xxl:j,xxxl:b,default:"_default_rfs2h_34",circle:w,block:z,flex:N,"inline-block":"_inline-block_rfs2h_57",inline:q,"space-around":"_space-around_rfs2h_65","space-between":"_space-between_rfs2h_69","justify-center":"_justify-center_rfs2h_73","justify-start":"_justify-start_rfs2h_77","justify-end":"_justify-end_rfs2h_81","align-stretch":"_align-stretch_rfs2h_85","align-start":"_align-start_rfs2h_89","align-end":"_align-end_rfs2h_93","align-center":"_align-center_rfs2h_97","align-baseline":"_align-baseline_rfs2h_101"},S=["xxs","xs","s","m","l","xl","xxl","xxxl"],s=({align:n="align-stretch",alt:c,className:u,display:o="inline-block",size:l={height:"40px",width:"40px"},style:p,type:d,variantType:f,..._})=>r.jsx("span",{className:i(e.avatar,e[o],e[n]),style:{height:l.height,width:l.width},children:r.jsx("img",{alt:c||"avatar",className:i(e.avatar,e[d],e[f],e.size,u),style:p,..._})});try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{align:{defaultValue:{value:"align-stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"align-baseline"'},{value:'"align-center"'},{value:'"align-end"'},{value:'"align-start"'},{value:'"align-stretch"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"flex"'},{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-around"'},{value:'"space-between"'},{value:'"justify-center"'},{value:'"justify-end"'},{value:'"justify-start"'}]}},size:{defaultValue:{value:"{ height: '40px', width: '40px' }"},description:"",name:"size",required:!1,type:{name:"CustomSize"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"default"'}]}},variantType:{defaultValue:null,description:"",name:"variantType",required:!0,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xxxl"'}]}}}}}catch{}const C={argTypes:{align:{control:{type:"select"},description:"Size of the avatar",options:["justify-center","justify-end","justify-start","space-around","space-between"]},justify:{control:{type:"select"},description:"Size of the avatar",options:["justify-center","justify-end","justify-start","space-around","space-between"]},src:{control:"text",description:"URL of  the image"},type:{control:{type:"radio"},options:["default","circle"]},variantType:{control:{type:"select"},description:"Size of the avatar",options:S}},component:s,tags:["autodocs"],title:"Components/Avatar"},t={args:{align:"align-stretch",alt:"default",justify:"justify-center",size:{height:"24px",width:"24px"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s",type:"default",variantType:"xxl"}},a={args:{align:"align-stretch",alt:"default",justify:"justify-center",size:{height:"24px",width:"24px"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s",type:"circle",variantType:"xxl"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'align-stretch',
    alt: 'default',
    justify: 'justify-center',
    size: {
      height: '24px',
      width: '24px'
    },
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'default',
    variantType: 'xxl'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'align-stretch',
    alt: 'default',
    justify: 'justify-center',
    size: {
      height: '24px',
      width: '24px'
    },
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'circle',
    variantType: 'xxl'
  }
}`,...a.parameters?.docs?.source}}};const G=["Default","Circle"];export{a as Circle,t as Default,G as __namedExportsOrder,C as default};
