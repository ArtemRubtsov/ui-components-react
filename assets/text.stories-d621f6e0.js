import{j as e,a as q,F as N}from"./jsx-runtime-29545a09.js";import{c as $}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const k="_text_173yr_1",A="_xxs_173yr_5",B="_xs_173yr_9",G="_s_173yr_13",H="_m_173yr_17",J="_l_173yr_21",K="_xl_173yr_25",M="_xxl_173yr_29",Q="_xxxl_173yr_33",R="_light_173yr_41",U="_regular_173yr_45",X="_medium_173yr_49",Y="_bold_173yr_53",Z="_left_173yr_57",ee="_right_173yr_61",re="_center_173yr_65",ae="_balance_173yr_69",ne="_nowrap_173yr_73",se="_pretty_173yr_77",te="_stable_173yr_81",le="_wrap_173yr_85",n={text:k,xxs:A,xs:B,s:G,m:H,l:J,xl:K,xxl:M,xxxl:Q,"x-xl":"_x-xl_173yr_37",light:R,regular:U,medium:X,bold:Y,left:Z,right:ee,center:re,balance:ae,nowrap:ne,pretty:se,stable:te,wrap:le},r=a=>{const{align:P="left",as:j="p",children:C,className:W,size:D="m",style:F,textWrap:L="stable",weight:I="regular",...O}=a;return e(j,{className:$(n.text,n[D],n[I],n[P],n[L],W),style:F,...O,children:C})};try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'},{value:'"x-xl"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xxxl"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},textWrap:{defaultValue:null,description:"",name:"textWrap",required:!1,type:{name:"enum",value:[{value:'"balance"'},{value:'"nowrap"'},{value:'"pretty"'},{value:'"stable"'},{value:'"wrap"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"light"'},{value:'"medium"'},{value:'"regular"'}]}}}}}catch{}const oe={component:r,title:"Components/Text"},s={parameters:{group:"ElementType"},render:a=>q(N,{children:[e(r,{as:"p",...a,children:"This is a paragraph element"}),e(r,{as:"span",...a,children:"This is a span element"}),e(r,{as:"div",...a,children:"This is a div element"}),e(r,{as:"label",...a,children:"This is a label element"})]})},t={render:a=>e(r,{align:"center",as:"p",weight:"regular",wrap:"balance",...a,children:"This is a p element"})},l={render:a=>e(r,{align:"center",as:"span",weight:"regular",wrap:"balance",...a,children:"This is a span element"})},i={render:a=>e(r,{align:"left",as:"div",weight:"medium",wrap:"balance",...a,children:"This is a div element"})},c={render:a=>e(r,{align:"right",as:"label",weight:"light",wrap:"balance",...a,children:"This is a label element"})},x={parameters:{group:"Size"},render:()=>q(N,{children:[e(r,{align:"center",as:"div",size:"xxs",children:"xxs"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xs",children:"xs"}),e("hr",{}),e(r,{align:"center",as:"div",size:"s",children:"s"}),e("hr",{}),e(r,{align:"center",as:"div",size:"m",children:"m"}),e("hr",{}),e(r,{align:"center",as:"div",size:"l",children:"l"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xl",children:"xl"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xxl",children:"xxl"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xxxl",children:"xxl"}),e("hr",{}),e(r,{align:"center",as:"div",size:"x-xl",children:"x-xl"})]})};var d,o,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    group: 'ElementType'
  },
  render: (args: Props) => <>\r
      <Text as={'p'} {...args}>\r
        This is a paragraph element\r
      </Text>\r
      <Text as={'span'} {...args}>\r
        This is a span element\r
      </Text>\r
      <Text as={'div'} {...args}>\r
        This is a div element\r
      </Text>\r
      <Text as={'label'} {...args}>\r
        This is a label element\r
      </Text>\r
    </>
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Text align={'center'} as={'p'} weight={'regular'} wrap={'balance'} {...args}>\r
      This is a p element\r
    </Text>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,_,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Text align={'center'} as={'span'} weight={'regular'} wrap={'balance'} {...args}>\r
      This is a span element\r
    </Text>
}`,...(T=(_=l.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var v,y,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Text align={'left'} as={'div'} weight={'medium'} wrap={'balance'} {...args}>\r
      This is a div element\r
    </Text>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,f,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Text align={'right'} as={'label'} weight={'light'} wrap={'balance'} {...args}>\r
      This is a label element\r
    </Text>
}`,...(z=(f=c.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var E,S,V;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    group: 'Size'
  },
  render: () => <>\r
      <Text align={'center'} as={'div'} size={'xxs'}>\r
        xxs\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'xs'}>\r
        xs\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'s'}>\r
        s\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'m'}>\r
        m\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'l'}>\r
        l\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'xl'}>\r
        xl\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'xxl'}>\r
        xxl\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'xxxl'}>\r
        xxl\r
      </Text>\r
      <hr></hr>\r
      <Text align={'center'} as={'div'} size={'x-xl'}>\r
        x-xl\r
      </Text>\r
    </>
}`,...(V=(S=x.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const me=["ElementVariants","ElementP","ElementSpan","ElementDiv","ElementLabel","Size"];export{i as ElementDiv,c as ElementLabel,t as ElementP,l as ElementSpan,s as ElementVariants,x as Size,me as __namedExportsOrder,oe as default};
