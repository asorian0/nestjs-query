(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return g})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(7),r=(t(0),t(219)),i=t(223),l=t(224),s={title:"Aggregations"},d={unversionedId:"graphql/aggregations",id:"graphql/aggregations",isDocsHomePage:!1,title:"Aggregations",description:"When aggregations are enabled nestjs-query will expose a new query that enables using the following common aggregations count, avg, sum, min, and max.",source:"@site/docs/graphql/aggregations.mdx",slug:"/graphql/aggregations",permalink:"/nestjs-query/docs/graphql/aggregations",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/aggregations.mdx",version:"current",sidebar:"docs",previous:{title:"Authorization",permalink:"/nestjs-query/docs/graphql/authorization"},next:{title:"Subscriptions",permalink:"/nestjs-query/docs/graphql/subscriptions"}},g=[{value:"Enabling Aggregate Queries",id:"enabling-aggregate-queries",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"With GroupBy",id:"with-groupby",children:[]},{value:"With Filter",id:"with-filter",children:[]}]},{value:"Aggregating Relations",id:"aggregating-relations",children:[]},{value:"Examples",id:"examples-1",children:[{value:"Basic",id:"basic-1",children:[]},{value:"With GroupBy",id:"with-groupby-1",children:[]},{value:"With Filter",id:"with-filter-1",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Enabling Aggregates Only For Root",id:"enabling-aggregates-only-for-root",children:[]},{value:"Disable Aggregate for Single Relation",id:"disable-aggregate-for-single-relation",children:[]}]}],p={toc:g};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When aggregations are enabled ",Object(r.b)("inlineCode",{parentName:"p"},"nestjs-query")," will expose a new query that enables using the following common aggregations ",Object(r.b)("inlineCode",{parentName:"p"},"count"),", ",Object(r.b)("inlineCode",{parentName:"p"},"avg"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sum"),", ",Object(r.b)("inlineCode",{parentName:"p"},"min"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"max"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Only fields decorated with ",Object(r.b)("inlineCode",{parentName:"p"},"@FilterableField")," will be exposed in aggregate queries."))),Object(r.b)("p",null,"All examples will be based on the following ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," DTO. All fields except ",Object(r.b)("inlineCode",{parentName:"p"},"age"),", because it is not decorated with ",Object(r.b)("inlineCode",{parentName:"p"},"@FilterableField"),", will be exposed in aggregate queries."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/dto/todo-item.dto.ts"',title:'"todo-item/dto/todo-item.dto.ts"'},"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n}\n\n")),Object(r.b)("h3",{id:"enabling-aggregate-queries"},"Enabling Aggregate Queries"),Object(r.b)("p",null,"To enable aggregate queries you can set the ",Object(r.b)("inlineCode",{parentName:"p"},"enableAggregate")," option in your resolver"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.module.ts" {19}',title:'"todo-item/todo-item.module.ts"',"{19}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableAggregate: true\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")),Object(r.b)("p",null,"All aggregate queries use the following naming convention ",Object(r.b)("inlineCode",{parentName:"p"},"${objectName}Aggregate"),"."),Object(r.b)("p",null,"Below is a fragment from the generated schema for ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"nestjs-query")," will only expose number fields for ",Object(r.b)("inlineCode",{parentName:"p"},"avg")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sum"),"."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql",metastring:"{10}","{10}":!0},"type Query {\n  todoItem(id: ID!): TodoItem\n  todoItems(\n    paging: CursorPaging = { first: 10 }\n\n    filter: TodoItemFilter = {}\n\n    sorting: [TodoItemSort!] = []\n  ): TodoItemConnection!\n  todoItemAggregate(filter: TodoItemAggregateFilter): [TodoItemAggregateResponse!]!\n}\n\ninput TodoItemAggregateFilter {\n  and: [TodoItemAggregateFilter!]\n  or: [TodoItemAggregateFilter!]\n  id: IDFilterComparison\n  title: StringFieldComparison\n  description: StringFieldComparison\n  completed: BooleanFieldComparison\n  created: DateFieldComparison\n  updated: DateFieldComparison\n  priority: NumberFieldComparison\n}\n\ntype TodoItemAggregateResponse {\n  groupBy: TodoItemAggregateGroupBy\n  count: TodoItemCountAggregate\n  sum: TodoItemSumAggregate\n  avg: TodoItemAvgAggregate\n  min: TodoItemMinAggregate\n  max: TodoItemMaxAggregate\n}\n\ntype TodoItemAvgAggregate {\n  id: Float\n  priority: Float\n}\n\ntype TodoItemAggregateGroupBy {\n  id: ID\n  title: String\n  description: String\n  completed: Boolean\n  created: DateTime\n  updated: DateTime\n  priority: Float\n  createdBy: String\n  updatedBy: String\n}\n\ntype TodoItemCountAggregate {\n  id: Int\n  title: Int\n  description: Int\n  completed: Int\n  created: Int\n  updated: Int\n  priority: Int\n}\n\ntype TodoItemMaxAggregate {\n  id: ID\n  title: String\n  description: String\n  created: DateTime\n  updated: DateTime\n  priority: Float\n}\n\ntype TodoItemMinAggregate {\n  id: ID\n  title: String\n  description: String\n  created: DateTime\n  updated: DateTime\n  priority: Float\n}\n\ntype TodoItemSumAggregate {\n  id: Float\n  priority: Float\n}\n\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"basic"},"Basic"),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItemAggregate {\n    count {\n      id\n    }\n    sum {\n      id\n    }\n    avg {\n      id\n    }\n    min {\n      id\n      title\n      created\n    }\n    max {\n      id\n      title\n      created\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItemAggregate": [\n      {\n        "count": {\n          "id": 5\n        },\n        "sum": {\n          "id": 15\n        },\n        "avg": {\n          "id": 3\n        },\n        "min": {\n          "id": "1",\n          "title": "Add Todo Item Resolver",\n          "created": "2021-03-29T06:51:26.061Z"\n        },\n        "max": {\n          "id": "5",\n          "title": "How to create item With Sub Tasks",\n          "created": "2021-03-29T06:51:26.061Z"\n        }\n      }\n    ]\n  }\n}\n')))),Object(r.b)("h3",{id:"with-groupby"},"With GroupBy"),Object(r.b)("p",null,"To group your aggregate queries you can add a ",Object(r.b)("inlineCode",{parentName:"p"},"groupBy")," to specify one or more fields to group on."),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql",metastring:"{3-5}","{3-5}":!0},"{\n  todoItemAggregate {\n    groupBy {\n      completed\n    }\n    count {\n      id\n    }\n    sum {\n      id\n    }\n    avg {\n      id\n    }\n    min {\n      id\n      title\n      created\n    }\n    max {\n      id\n      title\n      created\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItemAggregate": [\n      {\n        "groupBy": {\n          "completed": false\n        },\n        "count": {\n          "id": 4\n        },\n        "sum": {\n          "id": 14\n        },\n        "avg": {\n          "id": 3.5\n        },\n        "min": {\n          "id": "2",\n          "title": "Add Todo Item Resolver",\n          "created": "2021-03-29T06:51:26.061Z"\n        },\n        "max": {\n          "id": "5",\n          "title": "How to create item With Sub Tasks",\n          "created": "2021-03-29T06:51:26.061Z"\n        }\n      },\n      {\n        "groupBy": {\n          "completed": true\n        },\n        "count": {\n          "id": 1\n        },\n        "sum": {\n          "id": 1\n        },\n        "avg": {\n          "id": 1\n        },\n        "min": {\n          "id": "1",\n          "title": "Create Nest App",\n          "created": "2021-03-29T06:51:26.061Z"\n        },\n        "max": {\n          "id": "1",\n          "title": "Create Nest App",\n          "created": "2021-03-29T06:51:26.061Z"\n        }\n      }\n    ]\n  }\n}\n')))),Object(r.b)("h3",{id:"with-filter"},"With Filter"),Object(r.b)("p",null,"You can also provide a filter to only aggregate on a subset of data."),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItemAggregate(filter: { completed: { is: false } }) {\n    count {\n      id\n    }\n    min {\n      id\n      title\n      created\n    }\n    max {\n      id\n      title\n      created\n    }\n  }\n}\n\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItemAggregate": [\n      {\n        "count": {\n          "id": 4\n        },\n        "min": {\n          "id": "2",\n          "title": "Add Todo Item Resolver",\n          "created": "2021-03-29T06:51:26.061Z"\n        },\n        "max": {\n          "id": "5",\n          "title": "How to create item With Sub Tasks",\n          "created": "2021-03-29T06:51:26.061Z"\n        }\n      }\n    ]\n  }\n}\n')))),Object(r.b)("p",null,"When using the ",Object(r.b)("inlineCode",{parentName:"p"},"count")," aggregate only non-null fields will be counted."),Object(r.b)("p",null,"For example assume description is null for all todo items you will get ",Object(r.b)("inlineCode",{parentName:"p"},"0")," back."),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItemAggregate(filter: { completed: { is: false } }) {\n    count {\n      id\n      title\n      description\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n   "todoItemAggregate": [\n     {\n       "count": {\n         "id": 4,\n         "title": 4,\n         "description": 0\n       }\n     }\n   ]\n }\n}\n')))),Object(r.b)("h2",{id:"aggregating-relations"},"Aggregating Relations"),Object(r.b)("p",null,"When using the ",Object(r.b)("inlineCode",{parentName:"p"},"enableAggregate")," option any defined ",Object(r.b)("inlineCode",{parentName:"p"},"many")," relations will also expose a aggregate query ",Object(r.b)("inlineCode",{parentName:"p"},"{relationName}Aggregate")),Object(r.b)("p",null,"Building on the previous example assume ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," has a ",Object(r.b)("inlineCode",{parentName:"p"},"subTasks")," connection."),Object(r.b)("p",null,"The following schema fragment will be created"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql",metastring:"{17-19}","{17-19}":!0},"type TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  age: Float!\n  priority: Float!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): TodoItemSubTasksConnection!\n  subTasksAggregate(\n    filter: SubTaskAggregateFilter\n  ):[ TodoItemSubTasksAggregateResponse!]!\n}\n\ntype TodoItemSubTasksAggregateResponse {\n  groupBy: TodoItemSubTasksAggregateGroupBy\n  count: TodoItemSubTasksCountAggregate\n  sum: TodoItemSubTasksSumAggregate\n  avg: TodoItemSubTasksAvgAggregate\n  min: TodoItemSubTasksMinAggregate\n  max: TodoItemSubTasksMaxAggregate\n}\n\ntype TodoItemSubTasksAggregateGroupBy {\n  id: ID\n  title: String\n  description: String\n  completed: Boolean\n  created: DateTime\n  updated: DateTime\n  todoItemId: String\n  createdBy: String\n  updatedBy: String\n}\n\ntype TodoItemSubTasksAvgAggregate {\n  id: Float\n}\n\ntype TodoItemSubTasksCountAggregate {\n  id: Int\n  title: Int\n  description: Int\n  completed: Int\n  created: Int\n  updated: Int\n  todoItemId: Int\n}\n\ntype TodoItemSubTasksMaxAggregate {\n  id: ID\n  title: String\n  description: String\n  created: DateTime\n  updated: DateTime\n  todoItemId: String\n}\n\ntype TodoItemSubTasksMinAggregate {\n  id: ID\n  title: String\n  description: String\n  created: DateTime\n  updated: DateTime\n  todoItemId: String\n}\n\ntype TodoItemSubTasksSumAggregate {\n  id: Float\n}\n")),Object(r.b)("h2",{id:"examples-1"},"Examples"),Object(r.b)("h3",{id:"basic-1"},"Basic"),Object(r.b)("p",null,"In this example we'll aggregate on all related ",Object(r.b)("inlineCode",{parentName:"p"},"subTasks"),"."),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItem(id: 5) {\n    subTasksAggregate {\n      count {\n        id\n      }\n      sum {\n        id\n      }\n      avg {\n        id\n      }\n      min {\n        id\n        title\n      }\n      max {\n        id\n        title\n      }\n    }\n  }\n}\n\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n   "todoItem": {\n     "subTasksAggregate": [\n       {\n         "count": {\n           "id": 3\n         },\n         "sum": {\n           "id": 42\n         },\n         "avg": {\n           "id": 14\n         },\n         "min": {\n           "id": "13",\n           "title": "How to create item With Sub Tasks - Sub Task 1"\n         },\n         "max": {\n           "id": "15",\n           "title": "How to create item With Sub Tasks - Sub Task 3"\n         }\n       }\n     ]\n   }\n }\n}\n')))),Object(r.b)("h3",{id:"with-groupby-1"},"With GroupBy"),Object(r.b)("p",null,"In this example we'll aggregate on all related ",Object(r.b)("inlineCode",{parentName:"p"},"subTasks")," and group by ",Object(r.b)("inlineCode",{parentName:"p"},"completed"),"."),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItem(id: 5) {\n    subTasksAggregate {\n      groupBy {\n        completed\n      }\n      count {\n        id\n      }\n      sum {\n        id\n      }\n      avg {\n        id\n      }\n      min {\n        id\n        title\n      }\n      max {\n        id\n        title\n      }\n    }\n  }\n}\n\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n   "todoItem": {\n     "subTasksAggregate": [\n       {\n         "groupBy": {\n           "completed": false\n         },\n         "count": {\n           "id": 2\n         },\n         "sum": {\n           "id": 29\n         },\n         "avg": {\n           "id": 14.5\n         },\n         "min": {\n           "id": "14",\n           "title": "How to create item With Sub Tasks - Sub Task 2"\n         },\n         "max": {\n           "id": "15",\n           "title": "How to create item With Sub Tasks - Sub Task 3"\n         }\n       },\n       {\n         "groupBy": {\n           "completed": true\n         },\n         "count": {\n           "id": 1\n         },\n         "sum": {\n           "id": 13\n         },\n         "avg": {\n           "id": 13\n         },\n         "min": {\n           "id": "13",\n           "title": "How to create item With Sub Tasks - Sub Task 1"\n         },\n         "max": {\n           "id": "13",\n           "title": "How to create item With Sub Tasks - Sub Task 1"\n         }\n       }\n     ]\n   }\n }\n}\n')))),Object(r.b)("h3",{id:"with-filter-1"},"With Filter"),Object(r.b)("p",null,"This example will aggregate all related ",Object(r.b)("inlineCode",{parentName:"p"},"subTasks")," that are not completed."),Object(r.b)(i.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItem(id: 5) {\n    subTasksAggregate(filter: { completed: { is: false } }) {\n      count {\n        id\n      }\n      min {\n        id\n        title\n      }\n      max {\n        id\n        title\n      }\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n   "todoItem": {\n     "subTasksAggregate": [\n       {\n         "count": {\n           "id": 2\n         },\n         "min": {\n           "id": "14",\n           "title": "How to create item With Sub Tasks - Sub Task 2"\n         },\n         "max": {\n           "id": "15",\n           "title": "How to create item With Sub Tasks - Sub Task 3"\n         }\n       }\n     ]\n   }\n }\n}\n')))),Object(r.b)("h2",{id:"advanced"},"Advanced"),Object(r.b)("h3",{id:"enabling-aggregates-only-for-root"},"Enabling Aggregates Only For Root"),Object(r.b)("p",null,"When using the ",Object(r.b)("inlineCode",{parentName:"p"},"enableAggregate")," option it will enable aggregates on the root type as well as all relations. If you only want to expose aggregate functionality on the root type you can specify the ",Object(r.b)("inlineCode",{parentName:"p"},"aggregate")," option."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:"{19}","{19}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          aggregate: { enabled: true }\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")),Object(r.b)("h3",{id:"disable-aggregate-for-single-relation"},"Disable Aggregate for Single Relation"),Object(r.b)("p",null,"You can also selectively disable aggregates on an individual relation by specifying the enableAggregate option when defining the relation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:"{7}","{7}":!0},"import { FilterableField, FilterableConnection } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { AuthGuard } from '../../auth.guard';\nimport { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';\n\n@ObjectType('TodoItem')\n@FilterableConnection('subTasks', () => SubTaskDTO, { enableAggregate: false })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n}\n\n")))}m.isMDXComponent=!0},219:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),g=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},c=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=g(t),c=a,b=p["".concat(i,".").concat(c)]||p[c]||m[c]||r;return t?o.a.createElement(b,l(l({ref:n},d),{},{components:t})):o.a.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},220:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}},221:function(e,n,t){"use strict";var a=t(0),o=t(222);n.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},222:function(e,n,t){"use strict";var a=t(0);const o=Object(a.createContext)(void 0);n.a=o},223:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(221),i=t(220),l=t(56),s=t.n(l);const d=37,g=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:p,groupId:m,className:c}=e,{tabGroupChoices:b,setTabGroupChoices:u}=Object(r.a)(),[T,O]=Object(a.useState)(l),h=a.Children.toArray(e.children),j=[];if(null!=m){const e=b[m];null!=e&&e!==T&&p.some((n=>n.value===e))&&O(e)}const y=e=>{const n=e.target,t=j.indexOf(n),a=h[t].props.value;O(a),null!=m&&(u(m,a),setTimeout((()=>{(function(e){const{top:n,left:t,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return n>=0&&o<=i&&a<=r&&t>=0})(n)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s.a.tabItemActive),setTimeout((()=>n.classList.remove(s.a.tabItemActive)),2e3))}),150))},f=e=>{var n;let t;switch(e.keyCode){case g:{const n=j.indexOf(e.target)+1;t=j[n]||j[0];break}case d:{const n=j.indexOf(e.target)-1;t=j[n]||j[j.length-1];break}}null===(n=t)||void 0===n||n.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},c)},p.map((({value:e,label:n})=>o.a.createElement("li",{role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":T===e}),key:e,ref:e=>j.push(e),onKeyDown:f,onFocus:y,onClick:y},n)))),n?Object(a.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}},224:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);