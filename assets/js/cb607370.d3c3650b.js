(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{180:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return a})),o.d(t,"default",(function(){return m}));var n=o(3),r=o(7),i=(o(0),o(219)),s={title:"Custom Service"},c={unversionedId:"persistence/mongoose/custom-service",id:"persistence/mongoose/custom-service",isDocsHomePage:!1,title:"Custom Service",description:"To create a custom query service to add your own methods to you can extend the SequelizeQueryService.",source:"@site/docs/persistence/mongoose/custom-service.md",slug:"/persistence/mongoose/custom-service",permalink:"/nestjs-query/docs/persistence/mongoose/custom-service",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/mongoose/custom-service.md",version:"current",sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/persistence/mongoose/relations"},next:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/mongoose/serialization"}},a=[],u={toc:a};function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To create a custom query service to add your own methods to you can extend the ",Object(i.b)("inlineCode",{parentName:"p"},"SequelizeQueryService"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.service.ts"',title:'"todo-item.service.ts"'},"import { QueryService } from '@nestjs-query/core';\nimport { InjectModel } from '@nestjs/mongoose';\nimport { MongooseQueryService } from '@nestjs-query/query-mongoose';\nimport { TodoItemEntity } from './entity/todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends MongooseQueryServices<TodoItemEntity> {\n  constructor(@InjectModel(TodoItemEntity.name) model:  Model<TodoItemEntity>) {\n    super(model);\n  }\n\n  async markAllAsCompleted(): Promise<number> {\n    const entities = await this.query({ filter: { completed: { is: true } } });\n\n    const { updatedCount } = await this.updateMany(\n      { completed: true }, // update\n      { id: { in: entities.map((e) => e.id) } }, // filter\n    );\n    // do some other business logic\n    return updatedCount;\n  }\n}\n")),Object(i.b)("p",null,"To use the custom service in the auto-generated resolver you can specify the ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceClass")," option."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12,16}',title:'"todo-item.module.ts"',"{12,16}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [\n        NestjsQueryMongooseModule.forFeature([\n          { document: TodoItemEntity, name: TodoItemEntity.name, schema: TodoItemEntitySchema },\n        ]),\n      ],\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")))}m.isMDXComponent=!0},219:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return y}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=r.a.createContext({}),m=function(e){var t=r.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=m(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=m(o),l=n,y=p["".concat(s,".").concat(l)]||p[l]||d[l]||i;return o?r.a.createElement(y,c(c({ref:t},u),{},{components:o})):r.a.createElement(y,c({ref:t},u))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=l;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<i;u++)s[u]=o[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,o)}l.displayName="MDXCreateElement"}}]);