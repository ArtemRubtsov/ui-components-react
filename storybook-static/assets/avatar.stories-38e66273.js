import{j as l}from"./jsx-runtime-29545a09.js";import{c}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const v="_avatar_1nze2_1",A="_xxs_1nze2_4",h="_xs_1nze2_8",y="_s_1nze2_12",f="_m_1nze2_16",z="_l_1nze2_20",w="_xl_1nze2_24",N="_xxl_1nze2_28",T="_xxxl_1nze2_32",b="_circle_1nze2_45",e={avatar:v,xxs:A,xs:h,s:y,m:f,l:z,xl:w,xxl:N,xxxl:T,default:"_default_1nze2_37",circle:b},q=["xxs","xs","s","m","l","xl","xxl","xxxl"],s=({alt:r,size:n={height:"40px",width:"40px"},type:m,variantType:_,...g})=>l("span",{className:c(e.avatar),style:{height:n.height,width:n.width},children:l("img",{alt:r||"avatar",className:c(e.avatarImg,e[m],e[_],e.size),...g})});try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"{ height: '40px', width: '40px' }"},description:"",name:"size",required:!1,type:{name:"CustomSize"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"default"'}]}},variantType:{defaultValue:null,description:"",name:"variantType",required:!0,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xxxl"'}]}}}}}catch{}const V={argTypes:{src:{control:"text",description:"URL of  the image"},type:{control:{type:"radio"},options:["default","circle"]},variantType:{control:{type:"select"},description:"Size of the avatar",options:q}},component:s,tags:["autodocs"],title:"Components/Avatar"},t={args:{alt:"default",size:{height:"24px",width:"24px"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s",type:"default",variantType:"xxl"}},a={args:{alt:"default",size:{height:"24px",width:"24px"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s",type:"circle",variantType:"xxl"}};var i,o,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    alt: 'default',
    size: {
      height: '24px',
      width: '24px'
    },
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'default',
    variantType: 'xxl'
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var x,d,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    alt: 'default',
    size: {
      height: '24px',
      width: '24px'
    },
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'circle',
    variantType: 'xxl'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Default","Circle"];export{a as Circle,t as Default,H as __namedExportsOrder,V as default};
