(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[577],{653:function(e,t,n){!function(e){"use strict";function t(e){for(var t={},n=e.split(","),r=0;r<n.length;++r){var i=n[r].toUpperCase(),o=n[r].charAt(0).toUpperCase()+n[r].slice(1);t[n[r]]=!0,t[i]=!0,t[o]=!0}return t}function n(e){return e.eatWhile(/[\w\$_]/),"meta"}e.defineMode("vhdl",(function(e,r){var i,o=e.indentUnit,a=r.atoms||t("null"),l=r.hooks||{"`":n,$:n},u=r.multiLineStrings,s=t("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"),c=t("architecture,entity,begin,case,port,else,elsif,end,for,function,if"),p=/[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;function f(e,t){var n,r=e.next();if(l[r]){var o=l[r](e,t);if(!1!==o)return o}if('"'==r)return t.tokenize=(n=r,function(e,t){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==n&&!i){o=!0;break}i=!i&&"--"==r}return(o||!i&&!u)&&(t.tokenize=f),"string-2"}),t.tokenize(e,t);if("'"==r)return t.tokenize=function(e){return function(t,n){for(var r,i=!1,o=!1;null!=(r=t.next());){if(r==e&&!i){o=!0;break}i=!i&&"--"==r}return(o||!i&&!u)&&(n.tokenize=f),"string"}}(r),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(r))return i=r,null;if(/[\d']/.test(r))return e.eatWhile(/[\w\.']/),"number";if("-"==r&&e.eat("-"))return e.skipToEnd(),"comment";if(p.test(r))return e.eatWhile(p),"operator";e.eatWhile(/[\w\$_]/);var d=e.current();return s.propertyIsEnumerable(d.toLowerCase())?(c.propertyIsEnumerable(d)&&(i="newstatement"),"keyword"):a.propertyIsEnumerable(d)?"atom":"variable"}function d(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function m(e,t,n){return e.context=new d(e.indented,t,n,null,e.context)}function h(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new d((e||0)-o,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;i=null;var r=(t.tokenize||f)(e,t);if("comment"==r||"meta"==r)return r;if(null==n.align&&(n.align=!0),";"!=i&&":"!=i||"statement"!=n.type)if("{"==i)m(t,e.column(),"}");else if("["==i)m(t,e.column(),"]");else if("("==i)m(t,e.column(),")");else if("}"==i){for(;"statement"==n.type;)n=h(t);for("}"==n.type&&(n=h(t));"statement"==n.type;)n=h(t)}else i==n.type?h(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==i)&&m(t,e.column(),"statement");else h(t);return t.startOfLine=!1,r},indent:function(e,t){if(e.tokenize!=f&&null!=e.tokenize)return 0;var n=t&&t.charAt(0),r=e.context,i=n==r.type;return"statement"==r.type?r.indented+("{"==n?0:o):r.align?r.column+(i?0:1):r.indented+(i?0:o)},electricChars:"{}"}})),e.defineMIME("text/x-vhdl","vhdl")}(n(38))}}]);
//# sourceMappingURL=577.c39fb511.chunk.js.map