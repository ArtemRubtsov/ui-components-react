import{j as e,a as q,F as N}from"./jsx-runtime-29545a09.js";import{c as $}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const k="_text_1h7rv_1",A="_xxs_1h7rv_5",B="_xs_1h7rv_9",G="_s_1h7rv_13",H="_m_1h7rv_17",J="_l_1h7rv_21",K="_xl_1h7rv_25",M="_xxl_1h7rv_29",Q="_xxxl_1h7rv_33",R="_light_1h7rv_41",U="_regular_1h7rv_45",W="_medium_1h7rv_49",X="_bold_1h7rv_53",Y="_left_1h7rv_57",Z="_right_1h7rv_61",ee="_center_1h7rv_65",re="_balance_1h7rv_69",ae="_nowrap_1h7rv_73",ne="_pretty_1h7rv_77",n={text:k,xxs:A,xs:B,s:G,m:H,l:J,xl:K,xxl:M,xxxl:Q,"x-xl":"_x-xl_1h7rv_37",light:R,regular:U,medium:W,bold:X,left:Y,right:Z,center:ee,balance:re,nowrap:ae,pretty:ne},r=a=>{const{align:j="left",as:P="span",children:C,className:D,size:F="m",weight:L="regular",wrap:I="balance",...O}=a;return e(P,{className:$(n.text,n[F],n[L],n[j],n[I],D),...O,children:C})};try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"x-xl"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xxxl"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"light"'},{value:'"medium"'},{value:'"regular"'}]}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"balance"'},{value:'"pretty"'}]}}}}}catch{}const ce={component:r,title:"Components/Text"},s={parameters:{group:"ElementType"},render:a=>q(N,{children:[e(r,{as:"p",...a,children:"This is a paragraph element"}),e(r,{as:"span",...a,children:"This is a span element"}),e(r,{as:"div",...a,children:"This is a div element"}),e(r,{as:"label",...a,children:"This is a label element"})]})},l={render:a=>e(r,{align:"center",as:"p",weight:"regular",wrap:"balance",...a,children:"This is a p element"})},t={render:a=>e(r,{align:"center",as:"span",weight:"regular",wrap:"balance",...a,children:"This is a span element"})},i={render:a=>e(r,{align:"left",as:"div",weight:"medium",wrap:"balance",...a,children:"This is a div element"})},c={render:a=>e(r,{align:"right",as:"label",weight:"light",wrap:"balance",...a,children:"This is a label element"})},x={parameters:{group:"Size"},render:()=>q(N,{children:[e(r,{align:"center",as:"div",size:"xxs",children:"xxs"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xs",children:"xs"}),e("hr",{}),e(r,{align:"center",as:"div",size:"s",children:"s"}),e("hr",{}),e(r,{align:"center",as:"div",size:"m",children:"m"}),e("hr",{}),e(r,{align:"center",as:"div",size:"l",children:"l"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xl",children:"xl"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xxl",children:"xxl"}),e("hr",{}),e(r,{align:"center",as:"div",size:"xxxl",children:"xxl"}),e("hr",{}),e(r,{align:"center",as:"div",size:"x-xl",children:"x-xl"})]})};var d,m,o;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(o=(m=s.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var h,p,u;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Text align={'center'} as={'p'} weight={'regular'} wrap={'balance'} {...args}>\r
      This is a p element\r
    </Text>
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Text align={'center'} as={'span'} weight={'regular'} wrap={'balance'} {...args}>\r
      This is a span element\r
    </Text>
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var T,b,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Text align={'left'} as={'div'} weight={'medium'} wrap={'balance'} {...args}>\r
      This is a div element\r
    </Text>
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,f,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Text align={'right'} as={'label'} weight={'light'} wrap={'balance'} {...args}>\r
      This is a label element\r
    </Text>
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var E,S,V;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(S=x.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const xe=["ElementVariants","ElementP","ElementSpan","ElementDiv","ElementLabel","Size"];export{i as ElementDiv,c as ElementLabel,l as ElementP,t as ElementSpan,s as ElementVariants,x as Size,xe as __namedExportsOrder,ce as default};
