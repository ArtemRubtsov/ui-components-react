import{j as F}from"./jsx-runtime-d9bc4622.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const G={"badge-complete":"_badge-complete_1ar2h_1","badge-progress":"_badge-progress_1ar2h_10","badge-review":"_badge-review_1ar2h_19","badge-check":"_badge-check_1ar2h_28","badge-danger":"_badge-danger_1ar2h_37","badge-refactoring":"_badge-refactoring_1ar2h_46","badge-test":"_badge-test_1ar2h_55","badge-warning":"_badge-warning_1ar2h_64","badge-clossed":"_badge-clossed_1ar2h_73"},H=["Complete","Progress","Review","Check","Danger","Refactoring","Test","Warning","Clossed"],g=({as:d,title:L,variant:l,...O})=>{const z=d||"span",A=l?`${G[`badge-${l.toLowerCase()}`]}`:"";return F(z,{className:A,...O,children:L})};try{g.displayName="Badge",g.__docgenInfo={description:"",displayName:"Badge",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Complete"'},{value:'"Progress"'},{value:'"Review"'},{value:'"Check"'},{value:'"Danger"'},{value:'"Refactoring"'},{value:'"Test"'},{value:'"Warning"'},{value:'"Clossed"'}]}}}}}catch{}const Q={argTypes:{variant:{control:{options:H,type:"select"}}},component:g,tags:["autodocs"],title:"Components/Badge"},e={args:{title:"Complete",variant:"Complete"}},a={args:{title:"In Progress",variant:"Progress"}},r={args:{title:"Review",variant:"Review"}},s={args:{title:"Check task",variant:"Check"}},t={args:{title:"Status danger",variant:"Danger"}},n={args:{title:"Refactoring",variant:"Refactoring"}},o={args:{title:"Run test",variant:"Test"}},c={args:{title:"Warning",variant:"Warning"}},i={args:{title:"Clossed",variant:"Clossed"}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Complete',
    variant: 'Complete'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,_,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'In Progress',
    variant: 'Progress'
  }
}`,...(C=(_=a.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Review',
    variant: 'Review'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var R,w,k;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Check task',
    variant: 'Check'
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,y,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Status danger',
    variant: 'Danger'
  }
}`,...(P=(y=t.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var T,W,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Refactoring',
    variant: 'Refactoring'
  }
}`,...(D=(W=n.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var B,V,q;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Run test',
    variant: 'Test'
  }
}`,...(q=(V=o.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var x,I,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    variant: 'Warning'
  }
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var j,E,$;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Clossed',
    variant: 'Clossed'
  }
}`,...($=(E=i.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const U=["Complete","Progress","Review","Check","Danger","Refactoring","Test","Warning","Clossed"];export{s as Check,i as Clossed,e as Complete,t as Danger,a as Progress,n as Refactoring,r as Review,o as Test,c as Warning,U as __namedExportsOrder,Q as default};
