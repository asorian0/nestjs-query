(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(215)),i={title:"Serialization"},s={unversionedId:"persistence/mongoose/serialization",id:"persistence/mongoose/serialization",isDocsHomePage:!1,title:"Serialization",description:"Using class-transformer is a popular libarary used in nestjs, unfortunately class-transformer does not place nicely with mongoose documents.",source:"@site/docs/persistence/mongoose/serialization.md",slug:"/persistence/mongoose/serialization",permalink:"/nestjs-query/docs/persistence/mongoose/serialization",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/mongoose/serialization.md",version:"current",sidebar:"docs",previous:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/mongoose/custom-service"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/typegoose/getting-started"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"class-transformer")," is a popular libarary used in ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs"),", unfortunately ",Object(a.b)("inlineCode",{parentName:"p"},"class-transformer")," does not place nicely with ",Object(a.b)("inlineCode",{parentName:"p"},"mongoose")," documents."),Object(a.b)("p",null,"For most use cases ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," will take care of the serialization for you through ",Object(a.b)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/advanced/assemblers"},"assemblers"),". If you find yourself in a situation where you want to use ",Object(a.b)("inlineCode",{parentName:"p"},"class-transformer")," with a model you should use the following patterns."),Object(a.b)("p",null,"To convert your DTO into a model you can inject your Model and create a new instance."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"new TodoItemModel(todoItemDTO);\n")),Object(a.b)("p",null,"When converting your entity into a DTO you can use the following."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const dto = plainToClass(TodoItemDTO, todoItemEntity.toObject({ virtuals: true }));\n")))}u.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);