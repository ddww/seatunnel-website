"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[55682],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),c=l,s=k["".concat(m,".").concat(c)]||k[c]||u[c]||i;return n?a.createElement(s,r(r({ref:e},d),{},{components:n})):a.createElement(s,r({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30227:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],o={},m="FakeSource",p={unversionedId:"connector-v2/source/FakeSource",id:"connector-v2/source/FakeSource",title:"FakeSource",description:"FakeSource connector",source:"@site/docs/connector-v2/source/FakeSource.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/FakeSource",permalink:"/docs/connector-v2/source/FakeSource",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/FakeSource.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/docs/connector-v2/source/Elasticsearch"},next:{title:"FtpFile",permalink:"/docs/connector-v2/source/FtpFile"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"Examples",id:"examples",level:4},{value:"rows",id:"rows",level:3},{value:"row.num",id:"rownum",level:3},{value:"split.num",id:"splitnum",level:3},{value:"split.read-interval",id:"splitread-interval",level:3},{value:"map.size",id:"mapsize",level:3},{value:"array.size",id:"arraysize",level:3},{value:"bytes.length",id:"byteslength",level:3},{value:"string.length",id:"stringlength",level:3},{value:"string.fake.mode",id:"stringfakemode",level:3},{value:"string.template",id:"stringtemplate",level:3},{value:"tinyint.fake.mode",id:"tinyintfakemode",level:3},{value:"tinyint.min",id:"tinyintmin",level:3},{value:"tinyint.max",id:"tinyintmax",level:3},{value:"tinyint.template",id:"tinyinttemplate",level:3},{value:"smallint.fake.mode",id:"smallintfakemode",level:3},{value:"smallint.min",id:"smallintmin",level:3},{value:"smallint.max",id:"smallintmax",level:3},{value:"smallint.template",id:"smallinttemplate",level:3},{value:"int.fake.mode",id:"intfakemode",level:3},{value:"int.min",id:"intmin",level:3},{value:"int.max",id:"intmax",level:3},{value:"int.template",id:"inttemplate",level:3},{value:"bigint.fake.mode",id:"bigintfakemode",level:3},{value:"bigint.min",id:"bigintmin",level:3},{value:"bigint.max",id:"bigintmax",level:3},{value:"bigint.template",id:"biginttemplate",level:3},{value:"float.fake.mode",id:"floatfakemode",level:3},{value:"float.min",id:"floatmin",level:3},{value:"float.max",id:"floatmax",level:3},{value:"float.template",id:"floattemplate",level:3},{value:"double.fake.mode",id:"doublefakemode",level:3},{value:"double.min",id:"doublemin",level:3},{value:"double.max",id:"doublemax",level:3},{value:"double.template",id:"doubletemplate",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],k={toc:u};function c(t){var e=t.components,n=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fakesource"},"FakeSource"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"FakeSource connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The FakeSource is a virtual data source, which randomly generates the number of rows according to the data structure of the user-defined schema,\njust for some test cases such as type conversion or connector new feature testing"),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"schema"),(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rows"),(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"row.num"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"split.num"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"split.read-interval"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"map.size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"array.size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bytes.length"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string.length"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string.fake.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tinyint.fake.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tinyint.min"),(0,i.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tinyint.max"),(0,i.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"127")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tinyint.template"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"smallint.fake.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"smallint.min"),(0,i.kt)("td",{parentName:"tr",align:null},"smallint"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"smallint.max"),(0,i.kt)("td",{parentName:"tr",align:null},"smallint"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"32767")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"smallint.template"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int.fake.template"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int.min"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int.max"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0x7fffffff")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int.template"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bigint.fake.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bigint.min"),(0,i.kt)("td",{parentName:"tr",align:null},"bigint"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bigint.max"),(0,i.kt)("td",{parentName:"tr",align:null},"bigint"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0x7fffffffffffffff")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bigint.template"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float.fake.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float.min"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float.max"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0x1.fffffeP+127")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float.template"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double.fake.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double.min"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double.max"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0x1.fffffffffffffP+1023")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double.template"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,i.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,i.kt)("p",null,"The schema of fake data that you want to generate"),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'  schema = {\n    fields {\n      c_map = "map<string, array<int>>"\n      c_array = "array<int>"\n      c_string = string\n      c_boolean = boolean\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n      c_decimal = "decimal(30, 8)"\n      c_null = "null"\n      c_bytes = bytes\n      c_date = date\n      c_timestamp = timestamp\n      c_row = {\n        c_map = "map<string, map<string, string>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n')),(0,i.kt)("h3",{id:"rows"},"rows"),(0,i.kt)("p",null,"The row list of fake data output per degree of parallelism"),(0,i.kt)("p",null,"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'  rows = [\n    {\n      kind = INSERT\n      fields = [1, "A", 100]\n    },\n    {\n      kind = UPDATE_BEFORE\n      fields = [1, "A", 100]\n    },\n    {\n      kind = UPDATE_AFTER\n      fields = [1, "A_1", 100]\n    },\n    {\n      kind = DELETE\n      fields = [1, "A_1", 100]\n    }\n  ]\n')),(0,i.kt)("h3",{id:"rownum"},"row.num"),(0,i.kt)("p",null,"The total number of data generated per degree of parallelism"),(0,i.kt)("h3",{id:"splitnum"},"split.num"),(0,i.kt)("p",null,"the number of splits generated by the enumerator for each degree of parallelism"),(0,i.kt)("h3",{id:"splitread-interval"},"split.read-interval"),(0,i.kt)("p",null,"The interval(mills) between two split reads in a reader"),(0,i.kt)("h3",{id:"mapsize"},"map.size"),(0,i.kt)("p",null,"The size of ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," type that connector generated"),(0,i.kt)("h3",{id:"arraysize"},"array.size"),(0,i.kt)("p",null,"The size of ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," type that connector generated"),(0,i.kt)("h3",{id:"byteslength"},"bytes.length"),(0,i.kt)("p",null,"The length of ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," type that connector generated"),(0,i.kt)("h3",{id:"stringlength"},"string.length"),(0,i.kt)("p",null,"The length of ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type that connector generated"),(0,i.kt)("h3",{id:"stringfakemode"},"string.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating string data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"string.template")," option"),(0,i.kt)("h3",{id:"stringtemplate"},"string.template"),(0,i.kt)("p",null,"The template list of string type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"tinyintfakemode"},"tinyint.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating tinyint data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"tinyint.template")," option"),(0,i.kt)("h3",{id:"tinyintmin"},"tinyint.min"),(0,i.kt)("p",null,"The min value of tinyint data that connector generated"),(0,i.kt)("h3",{id:"tinyintmax"},"tinyint.max"),(0,i.kt)("p",null,"The max value of tinyint data that connector generated"),(0,i.kt)("h3",{id:"tinyinttemplate"},"tinyint.template"),(0,i.kt)("p",null,"The template list of tinyint type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"smallintfakemode"},"smallint.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating smallint data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"smallint.template")," option"),(0,i.kt)("h3",{id:"smallintmin"},"smallint.min"),(0,i.kt)("p",null,"The min value of smallint data that connector generated"),(0,i.kt)("h3",{id:"smallintmax"},"smallint.max"),(0,i.kt)("p",null,"The max value of smallint data that connector generated"),(0,i.kt)("h3",{id:"smallinttemplate"},"smallint.template"),(0,i.kt)("p",null,"The template list of smallint type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"intfakemode"},"int.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating int data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"int.template")," option"),(0,i.kt)("h3",{id:"intmin"},"int.min"),(0,i.kt)("p",null,"The min value of int data that connector generated"),(0,i.kt)("h3",{id:"intmax"},"int.max"),(0,i.kt)("p",null,"The max value of int data that connector generated"),(0,i.kt)("h3",{id:"inttemplate"},"int.template"),(0,i.kt)("p",null,"The template list of int type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"bigintfakemode"},"bigint.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating bigint data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint.template")," option"),(0,i.kt)("h3",{id:"bigintmin"},"bigint.min"),(0,i.kt)("p",null,"The min value of bigint data that connector generated"),(0,i.kt)("h3",{id:"bigintmax"},"bigint.max"),(0,i.kt)("p",null,"The max value of bigint data that connector generated"),(0,i.kt)("h3",{id:"biginttemplate"},"bigint.template"),(0,i.kt)("p",null,"The template list of bigint type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"floatfakemode"},"float.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating float data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"float.template")," option"),(0,i.kt)("h3",{id:"floatmin"},"float.min"),(0,i.kt)("p",null,"The min value of float data that connector generated"),(0,i.kt)("h3",{id:"floatmax"},"float.max"),(0,i.kt)("p",null,"The max value of float data that connector generated"),(0,i.kt)("h3",{id:"floattemplate"},"float.template"),(0,i.kt)("p",null,"The template list of float type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"doublefakemode"},"double.fake.mode"),(0,i.kt)("p",null,"The fake mode of generating float data, support ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uff0cif use configured it to ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", user should also configured ",(0,i.kt)("inlineCode",{parentName:"p"},"double.template")," option"),(0,i.kt)("h3",{id:"doublemin"},"double.min"),(0,i.kt)("p",null,"The min value of double data that connector generated"),(0,i.kt)("h3",{id:"doublemax"},"double.max"),(0,i.kt)("p",null,"The max value of double data that connector generated"),(0,i.kt)("h3",{id:"doubletemplate"},"double.template"),(0,i.kt)("p",null,"The template list of double type that connector generated, if user configured it, connector will randomly select an item from the template list"),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Source plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Auto generate data rows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  row.num = 10\n  map.size = 10\n  array.size = 10\n  bytes.length = 10\n  string.length = 10\n  schema = {\n    fields {\n      c_map = "map<string, array<int>>"\n      c_array = "array<int>"\n      c_string = string\n      c_boolean = boolean\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n      c_decimal = "decimal(30, 8)"\n      c_null = "null"\n      c_bytes = bytes\n      c_date = date\n      c_timestamp = timestamp\n      c_row = {\n        c_map = "map<string, map<string, string>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Using fake data rows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  schema = {\n    fields {\n      pk_id = bigint\n      name = string\n      score = int\n    }\n  }\n  rows = [\n    {\n      kind = INSERT\n      fields = [1, "A", 100]\n    },\n    {\n      kind = INSERT\n      fields = [2, "B", 100]\n    },\n    {\n      kind = INSERT\n      fields = [3, "C", 100]\n    },\n    {\n      kind = UPDATE_BEFORE\n      fields = [1, "A", 100]\n    },\n    {\n      kind = UPDATE_AFTER\n      fields = [1, "A_1", 100]\n    },\n    {\n      kind = DELETE\n      fields = [2, "B", 100]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Using template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  row.num = 5\n  string.fake.mode = "template"\n  string.template = ["tyrantlucifer", "hailin", "kris", "fanjia", "zongwen", "gaojun"]\n  tinyint.fake.mode = "template"\n  tinyint.template = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n  smalling.fake.mode = "template"\n  smallint.template = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]\n  int.fake.mode = "template"\n  int.template = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]\n  bigint.fake.mode = "template"\n  bigint.template = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]\n  float.fake.mode = "template"\n  float.template = [40.0, 41.0, 42.0, 43.0]\n  double.fake.mode = "template"\n  double.template = [44.0, 45.0, 46.0, 47.0]\n  schema {\n    fields {\n      c_string = string\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Use range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  row.num = 5\n  string.template = ["tyrantlucifer", "hailin", "kris", "fanjia", "zongwen", "gaojun"]\n  tinyint.min = 1\n  tinyint.max = 9\n  smallint.min = 10\n  smallint.max = 19\n  int.min = 20\n  int.max = 29\n  bigint.min = 30\n  bigint.max = 39\n  float.min = 40.0\n  float.max = 43.0\n  double.min = 44.0\n  double.max = 47.0\n  schema {\n    fields {\n      c_string = string\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add FakeSource Source Connector")),(0,i.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Supports direct definition of data values(row) (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2839"},"2839"),")"),(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Improve fake source connector: (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2944"},"2944"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Support user-defined map size"),(0,i.kt)("li",{parentName:"ul"},"Support user-defined array size"),(0,i.kt)("li",{parentName:"ul"},"Support user-defined string length"),(0,i.kt)("li",{parentName:"ul"},"Support user-defined bytes length"))),(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Support multiple splits for fake source connector (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2974"},"2974"),")"),(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Supports setting the number of splits per parallelism and the reading interval between two splits (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3098"},"3098"),")")),(0,i.kt)("h3",{id:"next-version"},"next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Feature]"," Support config fake data rows ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3865"},"3865")),(0,i.kt)("li",{parentName:"ul"},"[Feature]"," Support config template or range for fake data ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3932"},"3932"))))}c.isMDXComponent=!0}}]);