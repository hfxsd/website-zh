(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[477],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),k=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=k(a),u=l,h=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:l,o[1]=p;for(var k=2;k<r;k++)o[k]=a[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8321:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return m}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),o={title:"\u521b\u5efa Chaos Mesh Workflow",sidebar_label:"\u521b\u5efa Chaos Mesh Workflow"},p={unversionedId:"create-chaos-mesh-workflow",id:"create-chaos-mesh-workflow",isDocsHomePage:!1,title:"\u521b\u5efa Chaos Mesh Workflow",description:"Chaos Mesh Workflow \u7b80\u4ecb",source:"@site/docs/create-chaos-mesh-workflow.md",sourceDirName:".",slug:"/create-chaos-mesh-workflow",permalink:"/website-zh/docs/next/create-chaos-mesh-workflow",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/docs/create-chaos-mesh-workflow.md",version:"current",sidebar_label:"\u521b\u5efa Chaos Mesh Workflow",frontMatter:{title:"\u521b\u5efa Chaos Mesh Workflow",sidebar_label:"\u521b\u5efa Chaos Mesh Workflow"},sidebar:"docs",previous:{title:"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c",permalink:"/website-zh/docs/next/inspect-chaos-experiment"},next:{title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",permalink:"/website-zh/docs/next/run-chaos-experiments-in-serial-or-parallel"}},i=[{value:"Chaos Mesh Workflow \u7b80\u4ecb",id:"chaos-mesh-workflow-\u7b80\u4ecb",children:[]},{value:"\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e <code>kubectl</code> \u521b\u5efa Workflow",id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa-workflow",children:[]},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[{value:"Workflow \u5b57\u6bb5\u8bf4\u660e",id:"workflow-\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"Template \u5b57\u6bb5\u8bf4\u660e",id:"template-\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"Task \u5b57\u6bb5\u8bf4\u660e",id:"task-\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"ConditionalBranch \u5b57\u6bb5\u8bf4\u660e",id:"conditionalbranch-\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"Container \u5b57\u6bb5\u8bf4\u660e",id:"container-\u5b57\u6bb5\u8bf4\u660e",children:[]}]}],k={toc:i};function m(t){var e=t.components,a=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chaos-mesh-workflow-\u7b80\u4ecb"},"Chaos Mesh Workflow \u7b80\u4ecb"),(0,r.kt)("p",null,"\u5728 Chaos Mesh \u4e2d\u6a21\u62df\u771f\u5b9e\u7684\u7cfb\u7edf\u6545\u969c\u65f6\uff0c\u901a\u5e38\u4f34\u968f\u7740\u6301\u7eed\u9a8c\u8bc1\u3002\u4f60\u53ef\u80fd\u5e0c\u671b\u5728 Chaos Mesh \u5e73\u53f0\u4e0a\u6784\u5efa\u4e00\u7cfb\u5217\u6545\u969c\uff0c\u800c\u4e0d\u662f\u6267\u884c\u5355\u4e2a\u72ec\u7acb\u7684\u6df7\u6c8c\u6545\u969c\u6ce8\u5165\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u4e3a\u6ee1\u8db3\u8be5\u9700\u6c42\uff0cChaos Mesh \u63d0\u4f9b\u4e86 Chaos Mesh Workflow\uff0c\u4e00\u4e2a\u5185\u7f6e\u7684\u5de5\u4f5c\u6d41\u5f15\u64ce\u3002\u4f7f\u7528\u8be5\u5f15\u64ce\uff0c\u4f60\u53ef\u4ee5\u4e32\u884c\u6216\u5e76\u884c\u5730\u6267\u884c\u591a\u79cd\u4e0d\u540c\u7684 Chaos \u5b9e\u9a8c\uff0c \u7528\u4e8e\u6a21\u62df\u751f\u4ea7\u7ea7\u522b\u7684\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c Chaos Mesh Workflow \u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e32\u884c\u7f16\u6392"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u884c\u7f16\u6392"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4efb\u52a1 (Work In Progress)"),(0,r.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u5206\u652f (Work In Progress)")),(0,r.kt)("p",null,"\u4f7f\u7528\u573a\u666f\u4e3e\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e76\u884c\u7f16\u6392\u540c\u65f6\u6ce8\u5165\u591a\u4e2a NetworkChaos \u6a21\u62df\u590d\u6742\u7684\u7f51\u7edc\u73af\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e32\u884c\u7f16\u6392\u4e2d\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u4f7f\u7528\u6761\u4ef6\u5206\u652f\u51b3\u5b9a\u662f\u5426\u6267\u884c\u5269\u4e0b\u7684\u6b65\u9aa4")),(0,r.kt)("p",null,"Chaos Mesh Workflow \u5728\u8bbe\u8ba1\u65f6\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53c2\u8003\u4e86 Argo Workflow\u3002\u5982\u679c\u60a8\u719f\u6089 Argo Workflow \u60a8\u4e5f\u80fd\u5f88\u5feb\u5730\u4e0a\u624b Chaos Mesh Workflow\u3002"),(0,r.kt)("p",null,"Github \u4ed3\u5e93\u4e2d\u542b\u6709\u5176\u4ed6 Workflow \u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow"},"\u793a\u4f8b"),"."),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa-workflow"},"\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")," \u521b\u5efa Workflow"),(0,r.kt)("p",null,"Workflow \u7c7b\u4f3c\u4e8e\u5404\u79cd\u7c7b\u578b\u7684 Chaos \u5bf9\u8c61\uff0c\u540c\u6837\u4f5c\u4e3a CRD \u5b58\u5728\u4e8e kubernetes \u96c6\u7fa4\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create -f <workflow.yaml>")," \u521b\u5efa Chaos Mesh Workflow\u3002\u4ee5\u4e0b\u4e3a\u521b\u5efa\u7684\u5177\u4f53\u793a\u4f8b\u3002\n\u4f7f\u7528\u672c\u5730 YAML \u6587\u4ef6\u521b\u5efa Workflow\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f <workflow.yaml>\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u7f51\u7edc\u4e0a\u7684 YAML \u6587\u4ef6\u521b\u5efa Workflow\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml\n")),(0,r.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 Workflow YAML \u6587\u4ef6\u5b9a\u4e49\u5982\u4e0b\u6240\u793a\uff0c\u8fd9\u4e2a Workflow \u5c06\u4f1a\u540c\u65f6\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"StressChaos"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkChaos")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"PodChaos"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: the-entry\n  templates:\n    - name: the-entry\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n        - workflow-pod-chaos\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            "app": "hello-kubernetes"\n        delay:\n          latency: "90ms"\n          correlation: "25"\n          jitter: "90ms"\n    - name: workflow-pod-chaos-schedule\n      templateType: Schedule\n      deadline: 40s\n      schedule:\n        schedule: "@every 2s"\n        podChaos:\n          action: pod-kill\n          mode: one\n          selector:\n            labelSelectors:\n              "app": "hello-kubernetes"\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            "app": "hello-kubernetes"\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ["--cpu 1"\uff0c "--timeout 600"]\n')),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"templates")," \u5b9a\u4e49\u4e86\u5b9e\u9a8c\u4e2d\u7684\u5404\u4e2a\u6b65\u9aa4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u5b9a\u4e49\u4e86 Workflow \u6267\u884c\u65f6\u7684\u5165\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"templates")," \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u4ee3\u8868\u4e86\u4e00\u4e2a Workflow \u7684\u6b65\u9aa4\uff0c\u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: the-entry\ntemplateType: Parallel\ndeadline: 240s\nchildren:\n  - workflow-stress-chaos\n  - workflow-network-chaos\n  - workflow-pod-chaos\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"templateType: Parallel")," \u4ee3\u8868\u8282\u70b9\u7684\u7c7b\u578b\u4e3a\u5e76\u884c\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"deadline: 240s")," \u4ee3\u8868\u8fd9\u4e2a\u8282\u70b9\u4e0b\u7684\u6240\u6709\u5e76\u884c\u5b9e\u9a8c\u9884\u671f\u5728 240 \u79d2\u5185\u6267\u884c\u5b8c\u6210\uff0c\u5426\u5219\u5c06\u8d85\u65f6\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"children")," \u4ee3\u8868\u5c06\u8981\u5e76\u884c\u6267\u884c\u7684\u5176\u4ed6 template \u540d\u79f0\u3002"),(0,r.kt)("p",null,"\u518d\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: workflow-pod-chaos\ntemplateType: PodChaos\ndeadline: 40s\npodChaos:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'hello-kubernetes'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"templateType: PodChaos")," \u4ee3\u8868\u8282\u70b9\u7684\u7c7b\u578b\u4e3a PodChaos \u5b9e\u9a8c\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"deadline: 40s")," \u4ee3\u8868\u5f53\u524d Chaos \u5b9e\u9a8c\u5c06\u6301\u7eed 40 \u79d2\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"podChaos")," \u5b57\u6bb5\u662f PodChaos \u5b9e\u9a8c\u7684\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 YAML \u6587\u4ef6\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa Workflow \u8f83\u4e3a\u7075\u6d3b\uff0c\u4f60\u53ef\u4ee5\u5bf9\u4e32\u884c\u6d3b\u5e76\u884c\u7f16\u6392\u8fdb\u884c\u5d4c\u5957\uff0c\u58f0\u660e\u590d\u6742\u7684\u7f16\u6392\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0e\u6761\u4ef6\u5206\u652f\u7ec4\u5408\u8fbe\u5230\u5faa\u73af\u7684\u6548\u679c\u3002"),(0,r.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("h3",{id:"workflow-\u5b57\u6bb5\u8bf4\u660e"},"Workflow \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entry"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e Workflow \u7684\u5165\u53e3\uff0c\u503c\u4e3a templates \u4e2d\u67d0\u4e00 template \u7684\u540d\u79f0\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"templates"),(0,r.kt)("td",{parentName:"tr",align:null},"[]Template"),(0,r.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e Workflow \u4e2d\u53ef\u6267\u884c\u7684\u5404\u4e2a\u6b65\u9aa4\u7684\u884c\u4e3a\uff0c\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"#template-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Template \u5b57\u6bb5\u8bf4\u660e")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"template-\u5b57\u6bb5\u8bf4\u660e"},"Template \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"template \u7684\u540d\u79f0\uff0c\u9700\u8981\u7b26\u5408 DNS-1123 \u547d\u540d\u89c4\u8303\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"any-name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"template \u7684\u7c7b\u578b\u3002\u53ef\u9009\u503c\u6709: Task\u3001Serial\u3001Parallel\u3001Suspend\u3001Schedule\u3001AwsChaos\u3001DNSChaos\u3001GcpChaos\u3001HTTPChaos\u3001IOChaos\u3001JVMChaos\u3001KernelChaos\u3001NetworkChaos\u3001PodChaos\u3001StressChaos\u3001TimeChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"PodChaos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadline"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"template \u6301\u7eed\u7684\u65f6\u95f4\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"'5m30s'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u8be5 template \u4e0b\u7684\u5b50\u4efb\u52a1\uff0c\u5f53 type \u4e3a Serial \u6216 Parallel \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'["any-chaos-1", "another-serial-2", "any-shcedule"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"task"),(0,r.kt)("td",{parentName:"tr",align:null},"Task"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u4efb\u52a1\uff0c\u5f53 type \u4e3a Task \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"#task-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Task \u5b57\u6bb5\u8bf4\u660e")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditionalBranches"),(0,r.kt)("td",{parentName:"tr",align:null},"[]ConditionalBranch"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u81ea\u5b9a\u4efb\u52a1\u540e\u7684\u6761\u4ef6\u5206\u652f\uff0c\u5f53 type \u4e3a Task \u65f6\u53ef\u9009\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"#conditionalBranch-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"ConditionalBranch \u5b57\u6bb5\u8bf4\u660e")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e AwsChaos\uff0c\u5f53 type \u4e3a AwsChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-aws-chaos"},"\u6a21\u62df AWS \u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dnsChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e DNSChaos\uff0c\u5f53 type \u4e3a DNSChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-dns-chaos-on-kubernetes"},"\u6a21\u62df DNS \u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcpChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e GcpChaos\uff0c\u5f53 type \u4e3a GcpChaos\uff0c\u5f53 \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-gcp-chaos"},"\u6a21\u62df GCP \u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e HTTPChaos\uff0c\u5f53 type \u4e3a HTTPChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-http-chaos-on-kubernetes"},"\u6a21\u62df HTTP \u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ioChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e IOChaos\uff0c\u5f53 type \u4e3a IOChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-io-chaos-on-kubernetes"},"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvmChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e JVMChaos\uff0c\u5f53 type \u4e3a JVMChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-jvm-application-chaos"},"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kernelChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e KernelChaos\uff0c\u5f53 type \u4e3a KernelChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-kernel-chaos-on-kubernetes"},"\u6a21\u62df\u5185\u6838\u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"networkChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e NetworkChaos\uff0c\u5f53 type \u4e3a NetworkChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-aws-chaos"},"\u6a21\u62df AWS \u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e PodChaosd \uff0c\u5f53 type \u4e3a PodChaosd \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-network-chaos-on-kubernetes"},"\u6a21\u62df\u7f51\u7edc\u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stressChao"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e StressChaos\uff0c\u5f53 type \u4e3a StressChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-heavy-stress-on-kubernetes"},"\u6a21\u62df\u538b\u529b\u573a\u666f")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e TimeChaos\uff0c\u5f53 type \u4e3a TimeChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/simulate-time-chaos-on-kubernetes"},"\u6a21\u62df\u65f6\u95f4\u6545\u969c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schedule"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e Schedule \uff0c\u5f53 type \u4e3a Schedule \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/next/define-scheduling-rules"},"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5f53\u5728 Workflow \u4e2d\u5efa\u7acb\u6709\u6301\u7eed\u65f6\u95f4\u7684 Chaos \u65f6\uff0c\u9700\u8981\u5c06\u6301\u7eed\u65f6\u95f4\u586b\u5199\u5230\u5916\u5c42\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"deadline")," \u5b57\u6bb5\u4e2d\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Chaos \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," \u5b57\u6bb5\u3002"))),(0,r.kt)("h3",{id:"task-\u5b57\u6bb5\u8bf4\u660e"},"Task \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"container"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u4efb\u52a1\u5bb9\u5668\uff0c\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"#container-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Container \u5b57\u6bb5\u8bf4\u660e")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u82e5\u9700\u8981\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5bb9\u5668\u4e2d\u6302\u8f7d\u5377\uff0c\u5219\u9700\u8981\u5728\u8be5\u5b57\u6bb5\u58f0\u660e\u5377\u3002\u5173\u4e8e\u5b8c\u6574\u5b9a\u4e49\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://v1-17.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volume-v1-core"},"corev1.Volume")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"conditionalbranch-\u5b57\u6bb5\u8bf4\u660e"},"ConditionalBranch \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6761\u4ef6\u5206\u652f\u60f3\u8981\u6267\u884c\u7684 template \u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"another-chaos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expression"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u4e3a\u5e03\u5c14\u7684\u8868\u8fbe\u5f0f\uff0c\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5f53\u8868\u8fbe\u5f0f\u503c\u4e3a\u771f\u65f6\uff0c\u5f53\u524d\u6761\u4ef6\u5206\u652f\u5c06\u4f1a\u88ab\u6267\u884c\u3002\u672a\u8bbe\u7f6e\u8be5\u503c\u65f6\uff0c\u6761\u4ef6\u5206\u652f\u5c06\u4f1a\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5b8c\u6210\u540e\u76f4\u63a5\u6267\u884c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"exitCode == 0")))),(0,r.kt)("p",null,"\u76ee\u524d\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," \u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4e0a\u4e0b\u6587\u53d8\u91cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exitCode")," \u8868\u793a\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u9000\u51fa\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stdout")," \u8868\u793a\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u6807\u51c6\u8f93\u51fa\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u5c06\u5728\u540e\u7eed\u8865\u5145\u3002")),(0,r.kt)("p",null,"\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md"},"\u8be5\u6587\u6863"),"\u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," \u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("h3",{id:"container-\u5b57\u6bb5\u8bf4\u660e"},"Container \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ea\u5217\u4e3e\u4e86\u5e38\u7528\u5b57\u6bb5\uff0c\u5173\u4e8e\u5b8c\u6574\u5b9a\u4e49\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://v1-17.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#container-v1-core"},"corev1.Container")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"busybox:latest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u6267\u884c\u7684\u547d\u4ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["wget", "-q", "http://httpbin.org/status/201"]'))))))}m.isMDXComponent=!0}}]);