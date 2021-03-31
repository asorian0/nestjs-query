(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),s=n(7),a=(n(0),n(219)),o=n(223),i=n(224),l={title:"Assemblers"},c={unversionedId:"concepts/advanced/assemblers",id:"concepts/advanced/assemblers",isDocsHomePage:!1,title:"Assemblers",description:"Assemblers are used to translate your DTO into the underlying database type and back.",source:"@site/docs/concepts/advanced/assemblers.mdx",slug:"/concepts/advanced/assemblers",permalink:"/nestjs-query/docs/concepts/advanced/assemblers",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/advanced/assemblers.mdx",version:"current",sidebar:"docs",previous:{title:"QueryService",permalink:"/nestjs-query/docs/concepts/services"},next:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"}},u=[{value:"When to use Assemblers",id:"when-to-use-assemblers",children:[]},{value:"Why?",id:"why",children:[{value:"Resolvers",id:"resolvers",children:[]},{value:"Services",id:"services",children:[]},{value:"Assemblers",id:"assemblers",children:[]},{value:"Why not use the assembler in the resolver?",id:"why-not-use-the-assembler-in-the-resolver",children:[]}]},{value:"ClassTransformerAssembler",id:"classtransformerassembler",children:[]},{value:"AbstractAssembler",id:"abstractassembler",children:[{value:"Converting the Query",id:"converting-the-query",children:[]},{value:"Converting the DTO",id:"converting-the-dto",children:[]},{value:"Converting the Entity",id:"converting-the-entity",children:[]},{value:"Converting Aggregate Query",id:"converting-aggregate-query",children:[]},{value:"Converting Aggregate Response",id:"converting-aggregate-response",children:[]},{value:"Converting Create DTO",id:"converting-create-dto",children:[]},{value:"Converting Update DTO",id:"converting-update-dto",children:[]}]},{value:"AssemblerQueryService",id:"assemblerqueryservice",children:[{value:"Module",id:"module",children:[]},{value:"Auto Generated Resolver",id:"auto-generated-resolver",children:[]},{value:"Manual Resolver",id:"manual-resolver",children:[]}]}],b={toc:u};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Assemblers are used to translate your DTO into the underlying database type and back."),Object(a.b)("h2",{id:"when-to-use-assemblers"},"When to use Assemblers"),Object(a.b)("p",null,"In most cases an Assembler will not be required because your Entity and DTO will be the same shape."),Object(a.b)("p",null,"The only time you need to define an assembler is when the DTO and Entity are different. The most common scenarios are"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Additional computed fields and you do not want to include the business logic in your DTO definition."),Object(a.b)("li",{parentName:"ul"},"Different field names because of poorly named columns in the database or to make a DB change passive to the end user."),Object(a.b)("li",{parentName:"ul"},"You need to transform the create or update DTO before being passed to your persistence QueryService")),Object(a.b)("h2",{id:"why"},"Why?"),Object(a.b)("p",null,"Separation of concerns."),Object(a.b)("h3",{id:"resolvers"},"Resolvers"),Object(a.b)("p",null,"Your resolvers only concern is dealing with graphql and translating the request (a DTO) into something the service cares about."),Object(a.b)("p",null,"The resolver should not care about how it is persisted. The underlying Entity ",Object(a.b)("strong",{parentName:"p"},"could")," have additional fields that you do not want to expose in your API, or it may be persisted into multiple stores."),Object(a.b)("p",null,"By separating the resolver from the persistence layer you can evolve your API separate from your database model."),Object(a.b)("h3",{id:"services"},"Services"),Object(a.b)("p",null,"The services concern are operating on a DTO, preventing the leaking of persistence details to the API."),Object(a.b)("p",null," In ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," services can be composed. In the case of assemblers information is translated using the assembler and delegated to an underlying service."),Object(a.b)("p",null," This alleviates any awkwardness around passing in a DTO and receiving a different object type back. Instead, your service can use an assembler to alleviate these concerns."),Object(a.b)("h3",{id:"assemblers"},"Assemblers"),Object(a.b)("p",null,"The assembler provides a single, testable, place to provide a translation between the DTO and entity, and vice versa."),Object(a.b)("h3",{id:"why-not-use-the-assembler-in-the-resolver"},"Why not use the assembler in the resolver?"),Object(a.b)("p",null,"The resolvers concern is translating graphql requests into the specified DTO."),Object(a.b)("p",null,"The services concern is accepting and returning a DTO based contract. Then using an assembler to translate between the DTO and underlying entities."),Object(a.b)("p",null,"If you follow this pattern you ",Object(a.b)("strong",{parentName:"p"},"could")," use the same service with other transports (rest, microservices, etc) as long as the request can be translated into a DTO."),Object(a.b)("h2",{id:"classtransformerassembler"},"ClassTransformerAssembler"),Object(a.b)("p",null,"In most cases the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," package will properly map back and forth. Because of this there is a ",Object(a.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," that leverages the ",Object(a.b)("inlineCode",{parentName:"p"},"plainToClass")," method."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE")," The ",Object(a.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," is the default implementation if an ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," is not manually defined."),Object(a.b)("p",null,"If you find yourself in a scenario where you need to compute values and you dont want to add the business logic to your DTO you can extend the ",Object(a.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler"),"."),Object(a.b)("p",null,"Lets take a simple example, where we have ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItemDTO")," and we want to compute the ",Object(a.b)("inlineCode",{parentName:"p"},"age"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'},"import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    // compute the age\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n")),Object(a.b)("p",null,"While this example is fairly trivial, the same pattern should apply for more complex scenarios."),Object(a.b)("h2",{id:"abstractassembler"},"AbstractAssembler"),Object(a.b)("p",null,"To create your own ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," extend the ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractAssembler"),"."),Object(a.b)("p",null,"Lets assume we have the following ",Object(a.b)("inlineCode",{parentName:"p"},"UserDTO"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.dto.ts"',title:'"user.dto.ts"'},"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\n\n@ObjectType('User')\nclass UserDTO {\n  @FilterableField()\n  firstName!: string;\n\n  @FilterableField()\n  lastName!: string;\n\n  @FilterableField()\n  emailAddress!: string;\n}\n\n")),Object(a.b)("p",null,"But you inherited a DB schema that has names that are not as user friendly."),Object(a.b)(o.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"},{label:"Mongoose",value:"mongoose"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"typeorm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'},"import {Entity, Column} from 'typeorm'\n\n@Entity()\nclass UserEntity {\n  @Column()\n  first!: string;\n\n  @Column()\n  last!: string;\n\n  @Column()\n  email!: string;\n}\n"))),Object(a.b)(i.a,{value:"sequelize",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'},"import { Table, Column, Model } from 'sequelize-typescript';\n\n@Table\nexport class UserEntity extends Model<UserEntity, Partial<UserEntity>> {\n   @Column\n   first!: string;\n\n   @Column\n   last!: string;\n\n   @Column\n   email!: string;\n}\n\n"))),Object(a.b)(i.a,{value:"mongoose",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'},"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { Document } from 'mongoose';\n\n@Schema()\nexport class UserEntity extends Document {\n  @Prop({ required: true })\n  first!: string;\n\n  @Prop({ required: true })\n  last!: string;\n\n  @Prop({ required: true })\n  email!: string;\n}\n\nexport const UserEntityEntitySchema = SchemaFactory.createForClass(UserEntity);\n\n")))),Object(a.b)("p",null,"To properly translate the ",Object(a.b)("inlineCode",{parentName:"p"},"UserDTO")," into the ",Object(a.b)("inlineCode",{parentName:"p"},"UserEntity")," and back you can extend an ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," that the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," will use."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.assembler.ts"',title:'"user.assembler.ts"'},"import {\n  AbstractAssembler,\n  Assembler,\n  Query,\n  transformQuery,\n  transformAggregateQuery,\n  transformAggregateResponse\n} from '@nestjs-query/core';\nimport { UserDTO } from './dto/user.dto';\nimport { UserEntity } from './user.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(UserDTO, UserEntity)\nexport class UserAssembler extends AbstractAssembler<UserDTO, UserEntity> {\n  convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n    return transformQuery(query, {\n      firstName: 'first',\n      lastName: 'last',\n      emailAddress: 'email',\n    });\n  }\n\n  convertToDTO(entity: UserEntity): UserDTO {\n    const dto = new UserDTO();\n    dto.firstName = entity.first;\n    dto.lastName = entity.last;\n    return dto;\n  }\n\n  convertToEntity(dto: UserDTO): UserEntity {\n    const entity = new UserEntity();\n    entity.first = dto.firstName;\n    entity.last = dto.lastName;\n    return entity;\n  }\n\n  convertAggregateQuery(aggregate: AggregateQuery<TestDTO>): AggregateQuery<TestEntity> {\n     return transformAggregateQuery(aggregate, {\n       firstName: 'first',\n       lastName: 'last',\n       emailAddress: 'email',\n    });\n  }\n\n  convertAggregateResponse(aggregate: AggregateResponse<TestEntity>): AggregateResponse<TestDTO> {\n    return transformAggregateResponse(aggregate, {\n      first: 'firstName',\n      last: 'lastName',\n      email: 'emailAddress'\n    });\n  }\n\n  convertToCreateEntity({firstName, lastName}: DeepPartial<TestDTO>): DeepPartial<TestEntity> {\n    return {\n      first: firstName,\n      last: lastName,\n    };\n  }\n\n  convertToUpdateEntity({firstName, lastName}: DeepPartial<TestDTO>): DeepPartial<TestEntity> {\n    return {\n      first: firstName,\n      last: lastName,\n    };\n  }\n}\n\n")),Object(a.b)("p",null,"The first thing to look at is the ",Object(a.b)("inlineCode",{parentName:"p"},"@Assembler")," decorator. It will register the assembler with ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," so ",Object(a.b)("inlineCode",{parentName:"p"},"QueryServices")," can look it up later."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Assembler(UserDTO, UserEntity)\n")),Object(a.b)("h3",{id:"converting-the-query"},"Converting the Query"),Object(a.b)("p",null,"Next the ",Object(a.b)("inlineCode",{parentName:"p"},"convertQuery")," method."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n  return transformQuery(query, {\n    firstName: 'first',\n    lastName: 'last',\n    emailAddress: 'email',\n  });\n}\n")),Object(a.b)("p",null,"This method leverages the ",Object(a.b)("inlineCode",{parentName:"p"},"transformQuery")," function from ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/core"),". This method will remap all fields specified in the field map to correct field name."),Object(a.b)("p",null,"In this example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"{\n  filter: {\n    firstName: { eq: 'Bob' },\n    lastName: { eq: 'Yukon' },\n    emailAddress: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(a.b)("p",null,"Would be transformed into."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"{\n  filter: {\n    first: { eq: 'Bob' },\n    last: { eq: 'Yukon' },\n    email: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(a.b)("h3",{id:"converting-the-dto"},"Converting the DTO"),Object(a.b)("p",null,"The next piece is the ",Object(a.b)("inlineCode",{parentName:"p"},"convertToDTO"),", which will convert the entity into a the correct DTO."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertToDTO(entity: UserEntity): UserDTO {\n  const dto = new UserDTO();\n  dto.firstName = entity.first;\n  dto.lastName = entity.last;\n  return dto;\n}\n")),Object(a.b)("h3",{id:"converting-the-entity"},"Converting the Entity"),Object(a.b)("p",null,"The next piece is the ",Object(a.b)("inlineCode",{parentName:"p"},"convertToEntity"),", which will convert the DTO into a the correct entity."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertToEntity(dto: UserDTO): UserEntity {\n  const entity = new UserEntity();\n  entity.first = dto.firstName;\n  entity.last = dto.lastName;\n  return entity;\n}\n")),Object(a.b)("h3",{id:"converting-aggregate-query"},"Converting Aggregate Query"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"convertAggregateQuery")," is used to convert an ",Object(a.b)("inlineCode",{parentName:"p"},"AggregateQuery"),". This examples uses the ",Object(a.b)("inlineCode",{parentName:"p"},"transformAggregateQuery")," helper to map aggregate query fields."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertAggregateQuery(aggregate: AggregateQuery<TestDTO>): AggregateQuery<TestEntity> {\n   return transformAggregateQuery(aggregate, {\n     firstName: 'first',\n     lastName: 'last',\n     emailAddress: 'email',\n  });\n}\n")),Object(a.b)("h3",{id:"converting-aggregate-response"},"Converting Aggregate Response"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"convertAggregateResponse")," is used to convert an ",Object(a.b)("inlineCode",{parentName:"p"},"AggregateResponse"),". This examples uses the ",Object(a.b)("inlineCode",{parentName:"p"},"transformAggregateResponse")," helper to map aggregate response fields."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertAggregateResponse(aggregate: AggregateResponse<TestEntity>): AggregateResponse<TestDTO> {\n  return transformAggregateResponse(aggregate, {\n    first: 'firstName',\n    last: 'lastName',\n    email: 'emailAddress'\n  });\n}\n")),Object(a.b)("h3",{id:"converting-create-dto"},"Converting Create DTO"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"convertToCreateEntity")," is used to convert an incoming create DTO to the appropriate create entity, in this case\npartial."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertToCreateEntity({firstName, lastName}: DeepPartial<TestDTO>): DeepPartial<TestEntity> {\n  return {\n    first: firstName,\n    last: lastName,\n  };\n}\n")),Object(a.b)("h3",{id:"converting-update-dto"},"Converting Update DTO"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"convertToUpdateEntity")," is used to convert an incoming update DTO to the appropriate update entity, in this case a\npartial."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"convertToUpdateEntity({firstName, lastName}: DeepPartial<TestDTO>): DeepPartial<TestEntity> {\n  return {\n    first: firstName,\n    last: lastName,\n  };\n}\n")),Object(a.b)("p",null,"This is a pretty basic example but the same pattern should apply to more complex scenarios."),Object(a.b)("h2",{id:"assemblerqueryservice"},"AssemblerQueryService"),Object(a.b)("p",null,"An ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," is a special type of ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," that uses the Assembler to translate between the DTO and Entity."),Object(a.b)("p",null,"The easiest way to create an ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," is to use the ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator."),Object(a.b)("p",null,"Before using the decorator you need to register your Assembler with ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")),Object(a.b)("h3",{id:"module"},"Module"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.module.ts" {10}',title:'"user.module.ts"',"{10}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { Module } from '@nestjs/common';\nimport { UserDTO } from './user.dto';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [ /* set up your entity with a nestjs-query persitence package */],\n      assemblers: [UserAssembler],\n      resolvers: [ ],\n    }),\n  ],\n})\nexport class UserModule {}\n\n")),Object(a.b)("h3",{id:"auto-generated-resolver"},"Auto Generated Resolver"),Object(a.b)("p",null,"If you want your assembler to be used by the auto-generated resolver you can specify the ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerClass")," option."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.module.ts" {10,14}',title:'"user.module.ts"',"{10,14}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { Module } from '@nestjs/common';\nimport { UserDTO } from './user.dto';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [ /* set up your entity with a nestjs-query persitence package */],\n      assemblers: [UserAssembler],\n      resolvers: [\n        {\n          DTOClass: UserDTO,\n          AssemblerClass: UserAssembler\n        }\n      ],\n    }),\n  ],\n})\nexport class UserModule {}\n\n")),Object(a.b)("h3",{id:"manual-resolver"},"Manual Resolver"),Object(a.b)("p",null,"If you are manually defining you resolver or want to use the ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," in another service use the ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.resolver.ts" {8}',title:'"user.resolver.ts"',"{8}":!0},"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { UserDTO } from './user.dto';\nimport { UserAssembler } from './user.assembler'\n\n@Resolver(() => UserDTO)\nexport class UserResolver extends CRUDResolver(UserDTO) {\n  constructor(@InjectAssemblerQueryService(UserAssembler) readonly service: QueryService<UserDTO>) {\n    super(service);\n  }\n}\n")),Object(a.b)("p",null,"Notice ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService<UserDTO>"),"."))}m.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||a;return n?s.a.createElement(d,i(i({ref:t},c),{},{components:n})):s.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.a=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}},221:function(e,t,n){"use strict";var r=n(0),s=n(222);t.a=function(){const e=Object(r.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},222:function(e,t,n){"use strict";var r=n(0);const s=Object(r.createContext)(void 0);t.a=s},223:function(e,t,n){"use strict";var r=n(0),s=n.n(r),a=n(221),o=n(220),i=n(56),l=n.n(i);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:g}=Object(a.a)(),[y,O]=Object(r.useState)(i),h=r.Children.toArray(e.children),v=[];if(null!=m){const e=d[m];null!=e&&e!==y&&b.some((t=>t.value===e))&&O(e)}const f=e=>{const t=e.target,n=v.indexOf(t),r=h[n].props.value;O(r),null!=m&&(g(m,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:s}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return t>=0&&s<=o&&r<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((()=>t.classList.remove(l.a.tabItemActive)),2e3))}),150))},j=e=>{var t;let n;switch(e.keyCode){case u:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case c:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null===(t=n)||void 0===t||t.focus()};return s.a.createElement("div",{className:"tabs-container"},s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:j,onFocus:f,onClick:f},t)))),t?Object(r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},224:function(e,t,n){"use strict";var r=n(0),s=n.n(r);t.a=function({children:e,hidden:t,className:n}){return s.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);