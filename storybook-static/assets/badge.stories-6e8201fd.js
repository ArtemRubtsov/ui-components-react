import{j as h}from"./jsx-runtime-c64c8078.js";import{c as j}from"./clsx-1229b3e0.js";import"./index-8365acb2.js";const C="_complete_1u8ew_1",b="_progress_1u8ew_10",S="_review_1u8ew_19",R="_check_1u8ew_28",x="_danger_1u8ew_37",V="_refactoring_1u8ew_46",q="_test_1u8ew_55",N="_warning_1u8ew_64",B="_closed_1u8ew_73",P="_block_1u8ew_83",T="_flex_1u8ew_87",E="_inline_1u8ew_91",e={complete:C,progress:b,review:S,check:R,danger:x,refactoring:V,test:q,warning:N,closed:B,block:P,flex:T,"inline-block":"_inline-block_1u8ew_91",inline:E,"space-around":"_space-around_1u8ew_99","space-between":"_space-between_1u8ew_103","justify-center":"_justify-center_1u8ew_107","justify-start":"_justify-start_1u8ew_111","justify-end":"_justify-end_1u8ew_115","align-stretch":"_align-stretch_1u8ew_119","align-start":"_align-start_1u8ew_123","align-end":"_align-end_1u8ew_127","align-center":"_align-center_1u8ew_131","align-baseline":"_align-baseline_1u8ew_135"},I=["complete","progress","review","check","danger","refactoring","test","warning","closed"],u=g=>{const{align:p="align-start",as:d="span",className:m,display:_="inline",justify:v="justify-start",style:f,title:w,variant:y="check",...k}=g;return h.jsx(d,{className:j(e[y],e[_],e[v],e[p],m),style:f,...k,children:w})};try{u.displayName="Badge",u.__docgenInfo={description:"",displayName:"Badge",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"align-baseline"'},{value:'"align-center"'},{value:'"align-end"'},{value:'"align-start"'},{value:'"align-stretch"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"flex"'},{value:'"inline"'},{value:'"inline-block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"justify-center"'},{value:'"justify-end"'},{value:'"justify-start"'},{value:'"space-around"'},{value:'"space-between"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"complete"'},{value:'"progress"'},{value:'"review"'},{value:'"check"'},{value:'"danger"'},{value:'"refactoring"'},{value:'"test"'},{value:'"warning"'},{value:'"closed"'}]}}}}}catch{}const z={argTypes:{variant:{control:{options:I,type:"select"}}},component:u,tags:["autodocs"],title:"Components/Badge"},a={args:{title:"Complete",variant:"complete"}},r={args:{title:"In Progress",variant:"progress"}},t={args:{title:"Review",variant:"review"}},s={args:{title:"Check task",variant:"check"}},n={args:{title:"Status danger",variant:"danger"}},i={args:{title:"Refactoring",variant:"refactoring"}},o={args:{title:"Run test",variant:"test"}},l={args:{title:"warning",variant:"warning"}},c={args:{title:"Closed",variant:"closed"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Complete',
    variant: 'complete'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'In Progress',
    variant: 'progress'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Review',
    variant: 'review'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Check task',
    variant: 'check'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Status danger',
    variant: 'danger'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Refactoring',
    variant: 'refactoring'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Run test',
    variant: 'test'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'warning',
    variant: 'warning'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Closed',
    variant: 'closed'
  }
}`,...c.parameters?.docs?.source}}};const A=["Complete","Progress","Review","Check","Danger","Refactoring","Test","Warning","Clossed"];export{s as Check,c as Clossed,a as Complete,n as Danger,r as Progress,i as Refactoring,t as Review,o as Test,l as Warning,A as __namedExportsOrder,z as default};
