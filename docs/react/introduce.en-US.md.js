webpackJsonp([85,197],{1740:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=e(1),i=(a(s),e(2));a(i);t.exports={content:["article",{},["h2","Features"],["ul",["li",["p","Following Ant Design, a design language for creating user friendly and beautiful websites."]],["li",["p","It is a set of high quality UI components and based on ",["a",{title:null,href:"http://react-component.github.io/badgeboard/"},"React Component"],"."]],["li",["p","Provides a work flow which is based on npm, webpack, and babel, supporting ES2015 and TypeScript."]]],["h2","Installation"],["pre",{lang:"bash",highlighted:'$ npm <span class="token function" >install</span> antd'},["code","$ npm install antd"]],["h2","Example"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'},["code","import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"]],["p","Import style:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token string" >\'antd/dist/antd.css\'</span><span class="token punctuation" >;</span>  <span class="token comment" spellcheck="true">// or \'antd/dist/antd.less\'</span>'},["code","import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"]],["p","You can use:"],["ul",["li",["p",["code","import DatePicker from 'antd/lib/date-picker';"]]],["li",["p",["code","import { DatePicker } from 'antd';"]," when ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," is also used."]]],["blockquote",["p","babel-plugin-import supports importing components and styles on demand."]],["h2","Version"],["ul",["li",["p","Stable: ",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"http://img.shields.io/npm/v/antd.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","Beta: ",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",alt:null}]]]]],["h2","Compatibility"],["p","Modern browsers and IE9+."],["blockquote",["p",["a",{title:null,href:"https://github.com/xcatliu/react-ie8"},"IE8 issues"]]],["h2","Useful Links"],["ul",["li",["p",["a",{title:null,href:"http://ant.design/"},"Home Page"]]],["li",["p",["a",{title:null,href:"/changelog"},"Change Log"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/"},"Scaffold"]]],["li",["p",["a",{title:null,href:"http://ant-tool.github.io/"},"Development Tools"]]],["li",["p",["a",{title:null,href:"http://react-component.github.io/"},"React Component"]]],["li",["p",["a",{title:null,href:"http://mobile.ant.design"},"Ant Design Mobile"]]],["li",["p",["a",{title:null,href:"https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md"},"React Code Style"]]],["li",["p",["a",{title:null,href:"https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md"},"Component Design Principles"]]],["li",["p",["a",{title:null,href:"https://os.alipayobjects.com/rmsportal/HTXUgPGkyyxEivE.png"},"Design Handbook"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/129"},"Scaffold and Demo Supported by Community"]]]],["h2","Who is using antd"],["ul",["li",["p","Ant Financial"]],["li",["p","Alibaba"]],["li",["p","Koubei"]],["li",["p","China Internet Plus"]],["li",["p","Didi"]]],["blockquote",["p","If your company or product uses Ant Design, you are welcome to comment in ",["a",{title:null,href:"(https://github.com/ant-design/ant-design/issues/477)"},"this issue"],". Thank you!"]],["h2","Contributing"],["p","Please read our ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING.md"]," first."],["p","If you have any idea to improve antd, just create a ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pulls"},"Pull Request"],". Also, you can also ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/new"},"issue"]," bugs or ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues"},"ask questions"],"."],["blockquote",["p","Recommend to read ",["a",{title:null,href:"http://www.catb.org/~esr/faqs/smart-questions.html"},["em","How To Ask Questions The Smart Way"]]," and ",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"How to Ask a Question in Open Source Community"]," and ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/~sgtatham/bugs.html"},"How to Report Bugs Effectively"],", a smart question will get right answer quickly."]]],meta:{order:0,title:"Ant Design of React",filename:"docs/react/introduce.en-US.md"},description:["section",["p","We supply a react implementation ",["code","antd"]," following Ant Design specification, which designed to help developing RIA such as dashboards or other enterprise-like complex UI needs."],["div",{"class":"pic-plus"},["img",{width:"150",src:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"]],toc:["ul",["li",["a",{href:"#Features"},"Features"]],["li",["a",{href:"#Installation"},"Installation"]],["li",["a",{href:"#Example"},"Example"]],["li",["a",{href:"#Version"},"Version"]],["li",["a",{href:"#Compatibility"},"Compatibility"]],["li",["a",{href:"#Useful-Links"},"Useful Links"]],["li",["a",{href:"#Who-is-using-antd"},"Who is using antd"]],["li",["a",{href:"#Contributing"},"Contributing"]]]}}});