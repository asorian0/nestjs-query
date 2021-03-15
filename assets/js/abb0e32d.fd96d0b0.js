(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{157:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var r=o(3),n=(o(0),o(215));const s={title:"Custom Service"},i={unversionedId:"persistence/typegoose/custom-service",id:"persistence/typegoose/custom-service",isDocsHomePage:!1,title:"Custom Service",description:"To create a custom query service to add your own methods to you can extend the TypegooseQueryService.",source:"@site/docs/persistence/typegoose/custom-service.md",slug:"/persistence/typegoose/custom-service",permalink:"/nestjs-query/docs/persistence/typegoose/custom-service",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/typegoose/custom-service.md",version:"current",sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/persistence/typegoose/relations"},next:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/typegoose/serialization"}},c=[],a={toc:c};function u({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},a,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To create a custom query service to add your own methods to you can extend the ",Object(n.b)("inlineCode",{parentName:"p"},"TypegooseQueryService"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.service.ts"',title:'"todo-item.service.ts"'},"import { QueryService } from '@nestjs-query/core';\nimport { InjectModel } from 'nestjs-typegoose';\nimport { TypegooseQueryService } from '@nestjs-query/query-typegoose';\nimport { TodoItemEntity } from './entity/todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypegooseQueryService<TodoItemEntity> {\n  constructor(@InjectModel(TodoItemEntity) model: ReturnModelType<typeof TodoItemEntity>) {\n    super(model);\n  }\n\n  async markAllAsCompleted(): Promise<number> {\n    const entities = await this.query({ filter: { completed: { is: true } } });\n\n    const { updatedCount } = await this.updateMany(\n      { completed: true }, // update\n      { id: { in: entities.map((e) => e.id) } }, // filter\n    );\n    // do some other business logic\n    return updatedCount;\n  }\n}\n")),Object(n.b)("p",null,"To use the custom service in the auto-generated resolver you can specify the ",Object(n.b)("inlineCode",{parentName:"p"},"ServiceClass")," option."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12,16}',title:'"todo-item.module.ts"',"{12,16}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypegooseModule } from '@nestjs-query/query-typegoose';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypegooseModule.forFeature([TodoItemEntity])],\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}u.isMDXComponent=!0},215:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return y}));var r=o(0),n=o.n(r);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},m=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,y=m["".concat(i,".").concat(d)]||m[d]||l[d]||s;return o?n.a.createElement(y,c(c({ref:t},u),{},{components:o})):n.a.createElement(y,c({ref:t},u))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<s;u++)i[u]=o[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);