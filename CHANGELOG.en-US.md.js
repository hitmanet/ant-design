webpackJsonp([196,197],{1349:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var s=t(1),o=(a(s),t(2));a(o);e.exports={content:["article",{},["h2","2.0.0"],["p",["code","2016-09-28"]],["p","After four months, ",["code","antd@2.0.0"]," is published. We had refactored code and improve functionalities and details of existing components. What's more, we provide English version of the documentation. The antd community help us a lot in developing ",["code","antd@2.0.0"],"."],["p","If you meet any problem while you try to upgrade from ",["code","antd@1.0.0"],", feel free to ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues"},"create issues on GitHub"],"."],["h3","2.x Major changes"],["ul",["li",["p","Refactor components with TypeScript, and provide ",["strong",["code",".d.ts"]," files which are officially supported"],". Thanks to all the developers that contributed to ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1846"},"#1846"]," and @infeng."]],["li",["p",["strong","Translate the documentation into English"],", and we are going to provide both of Chinese and English versions of the documentation in the future. Thanks to all the translators and reviewers that contributed to ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1471"},"#1471"],"."]],["li",["p","DatePicker, TimePicker, Calendar and other components that are designed to select time ",["strong","are refactored to replace ",["a",{title:null,href:"github.com/yiminghe/gregorian-calendar"},"gregorian-calendar"]," with ",["a",{title:null,href:"http://momentjs.com/"},"moment"]],"."]],["li",["p","All the ",["a",{title:null,href:"http://ant.design/components/icon/"},"icons"]," are re-designed."]],["li",["p","New component ",["a",{title:null,href:"http://ant.design/components/mention/"},"Mention"],"."]],["li",["p","New component ",["a",{title:null,href:"http://ant.design/components/auto-complete/"},"AutoComplete"],"."]],["li",["p","The ",["code","getFieldProps"]," of Form is replaced with ",["code","getFieldDecorator"]," which will warn developers if they make mistakes. Related discussion ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1533"},"#1533"],"."]],["li",["p","Table supports ",["a",{title:null,href:"http://ant.design/components/table/#components-table-demo-grouping-columns"},"grouping columns"],". @yesmeck"]],["li",["p","Removed components and features which are deprecated in ",["code","antd@1.x"],", such as QueueAnim, Validation, Form.ValueMixin, Progress.Line, Progress.Circle, Popover","[overlay]"," and Slider","[marks]"," will not support array any more."]]],["h3","2.x Breaking changes"],["p","There are some breaking changes in ",["code","antd@2.0.0"],", and you need to modify your code to work with it."],["ul",["li",["p",["code","value"]," and ",["code","defaultValue"]," of all the time-related components will not support type ",["code","String/Date"],", please use ",["a",{title:null,href:"http://momentjs.com/"},"moment"],":"],["pre",{lang:"diff",highlighted:'<span class="token deleted" >- &lt;TimePicker defaultValue="12:08:23" /></span>\n<span class="token inserted" >+ &lt;TimePicker defaultValue={moment(\'12:08:23\', \'HH:mm:ss\')} /></span>\n\n<span class="token deleted" >- &lt;DatePicker defaultValue="2015/01/01" /></span>\n<span class="token inserted" >+ &lt;DatePicker defaultValue={moment(\'2015/01/01\', \'YYYY/MM/DD\')} /></span>\n\n<span class="token deleted" >- &lt;Calendar defaultValue={new Date(\'2010-10-10\')} /></span>\n<span class="token inserted" >+ &lt;Calendar defaultValue={moment(\'2010-10-10\', \'YYYY-MM-DD\')} /></span>'},["code","- <TimePicker defaultValue=\"12:08:23\" />\n+ <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />\n\n- <DatePicker defaultValue=\"2015/01/01\" />\n+ <DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} />\n\n- <Calendar defaultValue={new Date('2010-10-10')} />\n+ <Calendar defaultValue={moment('2010-10-10', 'YYYY-MM-DD')} />"]]],["li",["p","Parameters of type ",["code","Date/GregorianCalendar"]," of functions such as ",["code","onChange"]," and ",["code","onPanelChange"],", plus other callback functions had been changed to type moment. Please consult ",["a",{title:null,href:"https://github.com/yiminghe/gregorian-calendar"},"APIs of gregorian-calendar"]," and ",["a",{title:null,href:"http://momentjs.com/docs/"},"APIs of moment"],", and update your code accordingly. Because the return value of ",["code","JSON.stringy(date: moment)"]," will lost time zone, we should use ",["code",".format"]," to convert date to string first, see related issue ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3082"},"#3082"]," for details:"],["pre",{lang:"js",highlighted:'<span class="token function" >handleSubmit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> values <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >getFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  values<span class="token punctuation" >.</span>date <span class="token operator" >=</span> values<span class="token punctuation" >.</span>date<span class="token punctuation" >.</span><span class="token function" >format</span><span class="token punctuation" >(</span><span class="token string" >\'YYYY-MM-DD HH:mm:ss\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token comment" spellcheck="true">// or other format</span>\n  <span class="token keyword" >const</span> data <span class="token operator" >=</span> JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span>values<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token comment" spellcheck="true">// send data to server</span>\n<span class="token punctuation" >}</span>'},["code","handleSubmit() {\n  const values = this.props.form.getFieldsValue();\n  values.date = values.date.format('YYYY-MM-DD HH:mm:ss'); // or other format\n  const data = JSON.stringify(values);\n  // send data to server\n}"]]],["li",["p","The ",["code","format"]," of time-related components is the same as ",["a",{title:null,href:"http://momentjs.com/docs/"},"moment's format"]," now."]],["li",["p",["code","linkRender"]," and ",["code","nameRender"]," of Breadcrumb are removed, please use ",["code","itemRender"],"."]],["li",["p",["code","onClose"]," and ",["code","onOpen"]," of Menu are removed, please use ",["code","onOpenChange"],". As being totally different, please check ",["a",{title:null,href:"http://beta.ant.design/components/menu/#components-menu-demo-sider-current"},"this demo"]," first."]],["li",["p","Paging columns of Table were removed, please use ",["a",{title:null,href:"http://ant.design/components/table/#components-table-demo-fixed-columns"},"fixed columns"],"."]]],["p","The following change will throw some warnings in the console and it will still work, but we recommend to update your code."],["ul",["li",["p",["code","getFieldProps"]," of Form is deprecated, please use ",["code","getFieldDecorator"],":"],["pre",{lang:"diff",highlighted:'<span class="token inserted" >+ getFieldDecorator(\'userName\', { ... })(</span>\n    &lt;Input placeholder="\u8bf7\u8f93\u5165\u8d26\u6237\u540d"\n<span class="token deleted" >-     {...getFieldProps(\'userName\', { ... })}</span>\n    />\n<span class="token inserted" >+ )</span>'},["code","+ getFieldDecorator('userName', { ... })(\n    <Input placeholder=\"\u8bf7\u8f93\u5165\u8d26\u6237\u540d\"\n-     {...getFieldProps('userName', { ... })}\n    />\n+ )"]]],["li",["p",["code","toggleOpen"]," of DatePicker is deprecated, please use ",["code","onOpenChange"],":"],["pre",{lang:"diff",highlighted:'<span class="token deleted" >- handleToggleOpen({ open }) {</span>\n<span class="token inserted" >+ handleOpenChange(open) {</span>\n  ...\n}'},["code","- handleToggleOpen({ open }) {\n+ handleOpenChange(open) {\n  ...\n}"]]]],["h3","2.x Bug fixes"],["ul",["li",["p","Dropdown.Button","[disabled]"," should work. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3070"},"#3070"]]],["li",["p",["code","option.withRef"]," of Form.create should work. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2843"},"#2843"]]],["li",["p","Fix slow response of expanding sub menu in Menu","[inline]"," mode. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2701"},"#2701"]]],["li",["p","The button of Modal.confirm(and so on) should not be clickable while it is closed asynchronously. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2684"},"#2684"]]],["li",["p",["code","format"]," of DatePicker","[showtime]"," should work. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3123"},"#3123"]]],["li",["p","Fix Table","[datasource]"," treat key whose value is ",["code","0"]," as inexisting. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/3166"},"#3166"]," @noonnightstorm"]],["li",["p","Tree.Node should not show arrow if it has no child nodes. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2616"},"#2616"]]],["li",["p","Fix cursor style of arrows that are hidden of Tree.Node. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2748"},"#2748"]]]],["h3","2.x Other improvements"],["ul",["li",["p","Alert supports ",["a",{title:null,href:"http://ant.design/components/alert/#components-alert-demo-banner"},["code","banner"]," mode"],"."]],["li",["p","BackTop will scroll to top with animation."]],["li",["p","Badge supports ",["a",{title:null,href:"http://ant.design/components/badge/#components-badge-demo-status"},"status dot mode"],"."]],["li",["p","Cascader supports ",["a",{title:null,href:"http://ant.design/components/cascader/#components-cascader-demo-search"},"searching options directly"],"."]],["li",["p","Checkbox supports ",["a",{title:null,href:"http://ant.design/components/checkbox/#components-checkbox-demo-check-all"},"indeterminate mode"],"."]],["li",["p","Form supports ",["a",{title:null,href:"http://ant.design/components/form/#components-form-demo-validate-customized"},"vertical layout"],"."]],["li",["p","InputNumber supports long press to increase/decrease number. ",["a",{title:null,href:"http://ant.design/components/input-number/#components-input-number-demo-basic"},"#"]]],["li",["p","notification supports ",["a",{title:null,href:"http://ant.design/components/notification/#components-notification-demo-custom-icon"},"customized icon"],"."]],["li",["p","Spin allows ",["a",{title:null,href:"http://ant.design/components/spin/#components-spin-demo-tip"},"customized tips and animation work together"],". @jerrybendy"]],["li",["p","Transfer can handle event while options are checked/unchecked. ",["a",{title:null,href:"http://ant.design/components/transfer/#components-transfer-demo-basic"},"#"]]],["li",["p","Transfer can determine ",["a",{title:null,href:"http://ant.design/components/transfer/#components-transfer-demo-basic"},"whether an option is checkable"],"."]],["li",["p","Improve style of Alert and notification."]],["li",["p","Modal.confirm(and so on) can be closed by keyboard. @Dafrok"]],["li",["p","Improve the user experience of ",["a",{title:null,href:"http://ant.design/components/date-picker/#components-date-picker-demo-time"},"selecting time in DatePicker"],"."]],["li",["p","Improve the status changed animation of ",["a",{title:null,href:"http://ant.design/components/spin/#components-spin-demo-nested"},"Spin"],"."]],["li",["p","Update ",["a",{title:null,href:"https://github.com/ant-design/ant-design/commit/2f308b0f995cfcb2a3c8feb1e35ffd3f0bf93cfc"},"font-family"],"."]]],["h3","2.x Workflow"],["ul",["li",["p",["a",{title:null,href:"http://library.ant.design/"},"AntD Library"]," a collection of Axure files which includes components and patterns that follow Ant Design Specification."]],["li",["p","Rename ",["code","babel-plugin-antd"]," to ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},["code","babel-plugin-import"]],", and this means that ",["code","babel-plugin-import"]," becomes an common load-on-demand solution and not just for ",["code","antd"],"."],["p","Please update ",["code","package.json"],":"],["pre",{lang:"diff",highlighted:'{\n  "devDependencies": {\n<span class="token deleted" >-   "babel-plugin-antd": "^0.x.x",</span>\n<span class="token inserted" >+   "babel-plugin-import": "^1.0.0",</span>\n  }\n}'},["code",'{\n  "devDependencies": {\n-   "babel-plugin-antd": "^0.x.x",\n+   "babel-plugin-import": "^1.0.0",\n  }\n}']],["p","And update your babel config in ",["code",".babelrc"]," or other place:"],["pre",{lang:"diff",highlighted:'{\n<span class="token deleted" >-  "plugins": [["antd", { style: "css" }]]</span>\n<span class="token inserted" >+  "plugins": [["import", { libraryName: "antd", style: "css" }]]</span>\n}'},["code",'{\n-  "plugins": [["antd", { style: "css" }]]\n+  "plugins": [["import", { libraryName: "antd", style: "css" }]]\n}']]],["li",["p",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva@1.0.0"]," is published and it is officially recommended framework ",["a",{title:null,href:"http://ant.design/docs/react/practical-projects"},"in real world"],"."]],["li",["p","The officially recommended scaffold is ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," now, the old ",["code","antd-init"]," is just for studying and demo."]]],["h2","1.0.0"],["p","Visit ",["a",{title:null,href:"https://github.com/ant-design/ant-design/releases?after=2.0.0"},"GitHub"]," to read change logs from ",["code","0.x"]," to ",["code","1.x"],"\u3002"]],meta:{order:3,title:"Change Log",toc:!1,timeline:!0,filename:"CHANGELOG.en-US.md"},description:["section",["p","If you want to read change logs before ",["code","2.0.0"],", please visit ",["a",{title:null,href:"https://github.com/ant-design/ant-design/releases?after=2.0.0"},"GitHub"],"."]],toc:["ul",["li",["a",{href:"#2.0.0"},"2.0.0"]],["li",["a",{href:"#1.0.0"},"1.0.0"]]]}}});