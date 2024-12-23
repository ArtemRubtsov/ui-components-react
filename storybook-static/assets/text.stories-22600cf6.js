import{j as e}from"./jsx-runtime-c64c8078.js";import{c as v}from"./clsx-1229b3e0.js";import"./index-8365acb2.js";const y="_text_173yr_1",b="_xxs_173yr_5",j="_xs_173yr_9",w="_s_173yr_13",f="_m_173yr_17",z="_l_173yr_21",E="_xl_173yr_25",S="_xxl_173yr_29",V="_xxxl_173yr_33",q="_light_173yr_41",N="_regular_173yr_45",P="_medium_173yr_49",C="_bold_173yr_53",W="_left_173yr_57",D="_right_173yr_61",F="_center_173yr_65",L="_balance_173yr_69",I="_nowrap_173yr_73",O="_pretty_173yr_77",R="_stable_173yr_81",$="_wrap_173yr_85",n={text:y,xxs:b,xs:j,s:w,m:f,l:z,xl:E,xxl:S,xxxl:V,"x-xl":"_x-xl_173yr_37",light:q,regular:N,medium:P,bold:C,left:W,right:D,center:F,balance:L,nowrap:I,pretty:O,stable:R,wrap:$},r=a=>{const{align:d="left",as:o="p",children:m,className:p,size:u="m",style:g,textWrap:h="stable",weight:_="regular",...T}=a;return e.jsx(o,{className:v(n.text,n[u],n[_],n[d],n[h],p),style:g,...T,children:m})};try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"x-xl"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xxxl"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},textWrap:{defaultValue:null,description:"",name:"textWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"balance"'},{value:'"pretty"'},{value:'"stable"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"light"'},{value:'"medium"'},{value:'"regular"'}]}}}}}catch{}const G={component:r,title:"Components/Text"},s={parameters:{group:"ElementType"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",...a,children:"This is a paragraph element"}),e.jsx(r,{as:"span",...a,children:"This is a span element"}),e.jsx(r,{as:"div",...a,children:"This is a div element"}),e.jsx(r,{as:"label",...a,children:"This is a label element"})]})},t={render:a=>e.jsx(r,{align:"center",as:"p",weight:"regular",wrap:"balance",...a,children:"This is a p element"})},l={render:a=>e.jsx(r,{align:"center",as:"span",weight:"regular",wrap:"balance",...a,children:"This is a span element"})},i={render:a=>e.jsx(r,{align:"left",as:"div",weight:"medium",wrap:"balance",...a,children:"This is a div element"})},x={render:a=>e.jsx(r,{align:"right",as:"label",weight:"light",wrap:"balance",...a,children:"This is a label element"})},c={parameters:{group:"Size"},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{align:"center",as:"div",size:"xxs",children:"xxs"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"xs",children:"xs"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"s",children:"s"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"m",children:"m"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"l",children:"l"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"xl",children:"xl"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"xxl",children:"xxl"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"xxxl",children:"xxl"}),e.jsx("hr",{}),e.jsx(r,{align:"center",as:"div",size:"x-xl",children:"x-xl"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Text align={'center'} as={'p'} weight={'regular'} wrap={'balance'} {...args}>\r
      This is a p element\r
    </Text>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Text align={'center'} as={'span'} weight={'regular'} wrap={'balance'} {...args}>\r
      This is a span element\r
    </Text>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Text align={'left'} as={'div'} weight={'medium'} wrap={'balance'} {...args}>\r
      This is a div element\r
    </Text>
}`,...i.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Text align={'right'} as={'label'} weight={'light'} wrap={'balance'} {...args}>\r
      This is a label element\r
    </Text>
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const H=["ElementVariants","ElementP","ElementSpan","ElementDiv","ElementLabel","Size"];export{i as ElementDiv,x as ElementLabel,t as ElementP,l as ElementSpan,s as ElementVariants,c as Size,H as __namedExportsOrder,G as default};
