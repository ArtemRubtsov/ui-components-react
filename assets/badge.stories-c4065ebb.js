import{j as Q}from"./jsx-runtime-29545a09.js";import{c as U}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const X="_complete_1u8ew_1",Y="_progress_1u8ew_10",Z="_review_1u8ew_19",$="_check_1u8ew_28",ee="_danger_1u8ew_37",ae="_refactoring_1u8ew_46",re="_test_1u8ew_55",te="_warning_1u8ew_64",se="_closed_1u8ew_73",ne="_block_1u8ew_83",ie="_flex_1u8ew_87",oe="_inline_1u8ew_91",e={complete:X,progress:Y,review:Z,check:$,danger:ee,refactoring:ae,test:re,warning:te,closed:se,block:ne,flex:ie,"inline-block":"_inline-block_1u8ew_91",inline:oe,"space-around":"_space-around_1u8ew_99","space-between":"_space-between_1u8ew_103","justify-center":"_justify-center_1u8ew_107","justify-start":"_justify-start_1u8ew_111","justify-end":"_justify-end_1u8ew_115","align-stretch":"_align-stretch_1u8ew_119","align-start":"_align-start_1u8ew_123","align-end":"_align-end_1u8ew_127","align-center":"_align-center_1u8ew_131","align-baseline":"_align-baseline_1u8ew_135"},le=["complete","progress","review","check","danger","refactoring","test","warning","closed"],u=g=>{const{align:z="align-start",as:A="span",className:F,display:G="inline",justify:H="justify-start",style:J,title:K,variant:L="check",...M}=g;return Q(A,{className:U(e[L],e[G],e[H],e[z],F),style:J,...M,children:K})};try{u.displayName="Badge",u.__docgenInfo={description:"",displayName:"Badge",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"align-baseline"'},{value:'"align-center"'},{value:'"align-end"'},{value:'"align-start"'},{value:'"align-stretch"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"flex"'},{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-around"'},{value:'"space-between"'},{value:'"justify-center"'},{value:'"justify-end"'},{value:'"justify-start"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"progress"'},{value:'"complete"'},{value:'"review"'},{value:'"check"'},{value:'"danger"'},{value:'"refactoring"'},{value:'"test"'},{value:'"warning"'},{value:'"closed"'}]}}}}}catch{}const de={argTypes:{variant:{control:{options:le,type:"select"}}},component:u,tags:["autodocs"],title:"Components/Badge"},a={args:{title:"Complete",variant:"complete"}},r={args:{title:"In Progress",variant:"progress"}},t={args:{title:"Review",variant:"review"}},s={args:{title:"Check task",variant:"check"}},n={args:{title:"Status danger",variant:"danger"}},i={args:{title:"Refactoring",variant:"refactoring"}},o={args:{title:"Run test",variant:"test"}},l={args:{title:"warning",variant:"warning"}},c={args:{title:"Closed",variant:"closed"}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Complete',
    variant: 'complete'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var _,v,f;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'In Progress',
    variant: 'progress'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var w,y,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Review',
    variant: 'review'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var h,j,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Check task',
    variant: 'check'
  }
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var b,S,R;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Status danger',
    variant: 'danger'
  }
}`,...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var V,q,x;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Refactoring',
    variant: 'refactoring'
  }
}`,...(x=(q=i.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var N,B,P;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Run test',
    variant: 'test'
  }
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var T,I,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'warning',
    variant: 'warning'
  }
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,W,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Closed',
    variant: 'closed'
  }
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const me=["Complete","Progress","Review","Check","Danger","Refactoring","Test","Warning","Clossed"];export{s as Check,c as Clossed,a as Complete,n as Danger,r as Progress,i as Refactoring,t as Review,o as Test,l as Warning,me as __namedExportsOrder,de as default};
