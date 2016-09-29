webpackJsonp([151,197],{1518:function(t,n,a){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var e=a(1),o=(s(e),a(2));s(o);t.exports={content:["section",["p","\u63d0\u53ca\u7ec4\u4ef6\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u7528\u4e8e\u5728\u8f93\u5165\u4e2d\u63d0\u53ca\u67d0\u4eba\u6216\u67d0\u4e8b\uff0c\u5e38\u7528\u4e8e\u53d1\u5e03\u3001\u804a\u5929\u6216\u8bc4\u8bba\u529f\u80fd\u3002"]],meta:{category:"Components",subtitle:"\u63d0\u53ca",cols:1,type:"Views",title:"Mention",filename:"components/mention/index.zh-CN.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Mention</span>\n  <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span>\n  <span class="token attr-name" >suggestions</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'afc163\'</span><span class="token punctuation" >,</span> <span class="token string" >\'benjycui\'</span><span class="token punctuation" >,</span> <span class="token string" >\'yiminghe\'</span><span class="token punctuation" >,</span> <span class="token string" >\'jljsj33\'</span><span class="token punctuation" >,</span> <span class="token string" >\'dqaria\'</span><span class="token punctuation" >,</span> <span class="token string" >\'RaoHai\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n<span class="token punctuation" >/></span></span>'},["code","<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]],["h3","Mention API"],["table",["thead",["tr",["th","API"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"]]],["tbody",["tr",["td","toString"],["td","\u628a EditorState \u8f6c\u6210\u5b57\u7b26\u4e32"],["td","Function(editorState: EditorState): String"]],["tr",["td","toEditorState"],["td","\u628a\u5b57\u7b26\u4e32\u8f6c\u6210 EditorState"],["td","Function(string: String): EditorState"]],["tr",["td","getMentions"],["td","\u83b7\u53d6\u5f53\u524d editorState \u4e2d\u63d0\u5230\u7684\u4eba\u7684\u5217\u8868"],["td","Function(editorState: EditorState): Array",["string"]]]]],["h3","Mention props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","suggestions"],["td","\u5efa\u8bae\u5185\u5bb9"],["td","Array",["string"]," or Array<Mention.Nav>"],["td","[]"]],["tr",["td","suggestionStyle"],["td","\u5f39\u51fa\u4e0b\u62c9\u6846\u6837\u5f0f"],["td","Object"],["td","{}"]],["tr",["td","onSearchChange"],["td","\u8f93\u5165\u6846\u4e2d @ \u53d8\u5316\u65f6\u56de\u8c03"],["td","function(value:String)"],["td","[]"]],["tr",["td","onChange"],["td","\u8f93\u5165\u6846\u5185\u5bb9\u53d8\u5316\u65f6\u56de\u8c03"],["td","function(editorState: EditorState)"],["td","null"]],["tr",["td","notFoundContent"],["td","\u672a\u627e\u5230\u65f6\u7684\u5185\u5bb9"],["td","string"],["td","'\u65e0\u5339\u914d\u7ed3\u679c\uff0c\u8f7b\u6572\u7a7a\u683c\u5b8c\u6210\u8f93\u5165'"]],["tr",["td","loading"],["td","\u52a0\u8f7d\u4e2d"],["td","boolean"],["td","false"]],["tr",["td","multiLines"],["td","\u591a\u884c\u6a21\u5f0f"],["td","boolean"],["td","false"]],["tr",["td","prefix"],["td","\u89e6\u53d1\u5f39\u51fa\u4e0b\u62c9\u6846\u7684\u5b57\u7b26"],["td","string"],["td","'@'"]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u503c"],["td","EditorState, \u53ef\u4ee5\u7528 Mention.toEditorState(text) \u628a\u6587\u5b57\u8f6c\u6362\u6210 EditorState"],["td","null"]],["tr",["td","value"],["td","\u503c"],["td","EditorState"],["td","null"]]]],["h3","Nav props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","value"],["td","\u5efa\u8bae\u503c\uff0c\u9009\u62e9\u5efa\u8bae\u65f6\uff0c\u7528\u6b64\u503c\u63d2\u5165\u5230\u8f93\u5165\u6846\u4e2d"],["td","string"],["td",'""']],["tr",["td","children"],["td","\u5efa\u8bae\u5185\u5bb9"],["td","Objet"],["td","{}"]]]]]}}});