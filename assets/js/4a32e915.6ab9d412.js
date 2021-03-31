(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(219)),o=n(223),i=n(224),s={title:"Paging"},b={unversionedId:"graphql/paging",id:"graphql/paging",isDocsHomePage:!1,title:"Paging",description:"nestjs-query supports multiple paging strategies that each have their own pros and cons. This documentation will",source:"@site/docs/graphql/paging.mdx",slug:"/graphql/paging",permalink:"/nestjs-query/docs/graphql/paging",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/paging.mdx",version:"current",sidebar:"docs",previous:{title:"Mutations",permalink:"/nestjs-query/docs/graphql/mutations"},next:{title:"Hooks",permalink:"/nestjs-query/docs/graphql/hooks"}},d=[{value:"Cursor Based Paging",id:"cursor-based-paging",children:[{value:"Offset Based Cursor",id:"offset-based-cursor",children:[]},{value:"Key Set Based Cursor",id:"key-set-based-cursor",children:[]},{value:"Relation Connections",id:"relation-connections",children:[]},{value:"Paging",id:"paging",children:[]}]},{value:"Offset Based Paging",id:"offset-based-paging",children:[]},{value:"Disabling Paging",id:"disabling-paging",children:[]}],c={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"nestjs-query")," supports multiple paging strategies that each have their own pros and cons. This documentation will\ncover the different paging strategies and their applicable use cases."),Object(l.b)("p",null,"The following examples are based on the following ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItemDTO")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts"',title:'"todo-item.dto.ts"'},"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(l.b)("h2",{id:"cursor-based-paging"},"Cursor Based Paging"),Object(l.b)("p",null,"By default ",Object(l.b)("inlineCode",{parentName:"p"},"nestjs-query")," will expose all query many endpoints as cursor based ","[",Object(l.b)("inlineCode",{parentName:"p"},"connections"),"]","(https://relay\n.dev/graphql/connections.htm) that you can use to page through results."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"When using cursor based connections you are not tied to any particular implementation described below, because of the opaque\nnature of cursors you can start out with the default and switch to key set based cursors later on without changing\nyour clients."))),Object(l.b)("p",null,"All cursor connections, regardless of paging strategy, expose the following schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"scalar ConnectionCursor\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: ConnectionCursor\n  endCursor: ConnectionCursor\n}\n\ntype TodoItemConnection {\n  pageInfo: PageInfo!\n  edges: [TodoItemEdge!]!\n}\n\ntype TodoItemEdge {\n  node: TodoItem!\n  cursor: ConnectionCursor!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n")),Object(l.b)("h3",{id:"offset-based-cursor"},"Offset Based Cursor"),Object(l.b)("p",null,"By default all cursors will use a form of offset based paging to back cursors."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Pros"),Object(l.b)("th",{parentName:"tr",align:null},"Cons"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Allow for recursive relation paging"),Object(l.b)("td",{parentName:"tr",align:null},"Pages and nodes may change between queries")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Straight forward to implement"),Object(l.b)("td",{parentName:"tr",align:null},"Inconsistent Sorting - natural sorting is used by default")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Queries grow more inefficient as you go through more pages")))),Object(l.b)("h3",{id:"key-set-based-cursor"},"Key Set Based Cursor"),Object(l.b)("p",null,"You have the option to specify a key set on your DTO which will replace the ",Object(l.b)("inlineCode",{parentName:"p"},"offset")," with a ",Object(l.b)("inlineCode",{parentName:"p"},"where")," clause. A keyset\nis a set of fields that uniquely identify a record (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"id"),")."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Pros"),Object(l.b)("th",{parentName:"tr",align:null},"Cons"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Consistent Results - All cursors uniquely identify a record allowing for deterministic before/after pages"),Object(l.b)("td",{parentName:"tr",align:null},"Unable to do recursive paging for relations")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Stable Sorting - All results will be deterministically sorted"),Object(l.b)("td",{parentName:"tr",align:null},"A unique key set must be specified")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Consistent performance with correct indexes in place"),Object(l.b)("td",{parentName:"tr",align:null},"Unable to jump to arbitrary page")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Suitable for datasets of any size"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("p",null,"To enable key set based paging all you need to do is decorate your ",Object(l.b)("inlineCode",{parentName:"p"},"DTO")," with the ",Object(l.b)("inlineCode",{parentName:"p"},"@KeySet")," decorator."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"import { FilterableField, KeySet } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@KeySet(['id'])\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(l.b)("h4",{id:"sorting-and-key-set-cursors"},"Sorting and Key set cursors"),Object(l.b)("p",null,"When using key set based cursors we must take into account any client provided sorting in order to uniquely identify\na record within the sorted set of nodes"),Object(l.b)("p",null,"For example assume we're using the same DTO as above. If we added a sort by ",Object(l.b)("inlineCode",{parentName:"p"},"completed")," a comparision on ",Object(l.b)("inlineCode",{parentName:"p"},"id")," would\nno longer be sufficient"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItems(sorting: [{ field: completed, direction: ASC }]) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        completed\n      }\n    }\n  }\n}\n")),Object(l.b)("p",null,"If we only compared on the keyset ",Object(l.b)("inlineCode",{parentName:"p"},"[id]")," our pages would no longer be sorted properly, if we only compared on\n",Object(l.b)("inlineCode",{parentName:"p"},"completed")," you would not be able to page."),Object(l.b)("p",null,"We solve this problem by encoding information about the each field in the sort as well as the key set fields into the\ncursor so we can page properly."),Object(l.b)("p",null," In the above example the filter from the cursor (when paging forward) would be something like"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"WHERE (completed > ? OR (completed = ? AND id > ?))\n")),Object(l.b)("h3",{id:"relation-connections"},"Relation Connections"),Object(l.b)("p",null,"Key set paging will not apply to relations because they are recursive by nature."),Object(l.b)("p",null,"For example if you query for multiple ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItems")," and their ",Object(l.b)("inlineCode",{parentName:"p"},"subTasks")," if key set paging was used for the ",Object(l.b)("inlineCode",{parentName:"p"},"subTasks"),"\nconnection  the cursor from one ",Object(l.b)("inlineCode",{parentName:"p"},"todoItems")," ",Object(l.b)("inlineCode",{parentName:"p"},"subTasks")," may not be applicable to all ",Object(l.b)("inlineCode",{parentName:"p"},"todoItems")),Object(l.b)("p",null,"For example, assume you have the following todo items and subTasks"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "title": "Todo 1"\n    "subTasks": [\n      {"id": 1, "title": "Todo 1 - Sub Tasks 1"}, // cursor: "abc"\n      {"id": 2, "title": "Todo 1 - Sub Tasks 2"}  // cursor: "def"\n    ]\n  },\n  {\n    "id": 2,\n    "title": "Todo 2"\n    "subTasks": [\n      {"id": 3, "title": "Todo 2 - Sub Tasks 1"},  // cursor: "ghi"\n      {"id": 4, "title": "Todo 2 - Sub Tasks 2"}  // cursor: "jkl"\n    ]\n  }\n]\n')),Object(l.b)("p",null,"If you ran the following graphql query"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'{\n  todoItems {\n    edges {\n      node {\n        title\n        subTasks(paging: {first: 2, after: "ghi"}){\n          title\n        }\n      }\n    }\n  }\n}\n\n')),Object(l.b)("p",null,"The resulting query would look for all subTasks with an id > 3 breaking paging for ",Object(l.b)("inlineCode",{parentName:"p"},"Todo 1"),", for this reason the\n",Object(l.b)("inlineCode",{parentName:"p"},"@KeySet")," decorator is used for all relations."),Object(l.b)("h3",{id:"paging"},"Paging"),Object(l.b)("p",null,"To page with cursors it works the same way for all strategies."),Object(l.b)("p",null,"In this example we'll fetch the first 2 records."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItems(paging: {first: 2}) {\n    pageInfo{\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges{\n      node{\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("p",null,"Lets take a look the ",Object(l.b)("inlineCode",{parentName:"p"},"pageInfo")," from the previous example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pageInfo": {\n    "hasNextPage": true,\n    "hasPreviousPage": false,\n    "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n    "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n  },\n}\n')),Object(l.b)("p",null,"Notice how ",Object(l.b)("inlineCode",{parentName:"p"},"hasNextPage")," is ",Object(l.b)("inlineCode",{parentName:"p"},"true")," and there is an ",Object(l.b)("inlineCode",{parentName:"p"},"endCursor")," that can be used to fetch the next page."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'{\n  todoItems(paging: { after: "YXJyYXljb25uZWN0aW9uOjE=", first: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjI=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjM="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        },\n        {\n          "node": {\n            "id": "4",\n            "title": "Create Many Todo Items - 3",\n            "completed": false,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM="\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("p",null,"We can also page backward by using ",Object(l.b)("inlineCode",{parentName:"p"},"before")," and ",Object(l.b)("inlineCode",{parentName:"p"},"last"),". In the following example we'll use the ",Object(l.b)("inlineCode",{parentName:"p"},"startCursor")," from the\nprevious example and set ",Object(l.b)("inlineCode",{parentName:"p"},"last")," to 2."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'{\n  todoItems(paging: { before: "YXJyYXljb25uZWN0aW9uOjI=", last: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"offset-based-paging"},"Offset Based Paging"),Object(l.b)("p",null,"An alternative to cursor based querying is to use the ",Object(l.b)("inlineCode",{parentName:"p"},"OFFSET")," ",Object(l.b)("inlineCode",{parentName:"p"},"pagingStrategy"),". When using the ",Object(l.b)("inlineCode",{parentName:"p"},"OFFSET")," strategy\nqueries that return multiple records will return an ",Object(l.b)("inlineCode",{parentName:"p"},"OffsetConnection")," that looks like the following."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"type OffsetPageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n}\n\ntype TodoItemConnection {\n  pageInfo: OffsetPageInfo!\n  nodes: [TodoItem!]!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Pros"),Object(l.b)("th",{parentName:"tr",align:null},"Cons"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Easy to understand"),Object(l.b)("td",{parentName:"tr",align:null},"unstable - pages and nodes may change between queries")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Able to jump to arbitrary pages"),Object(l.b)("td",{parentName:"tr",align:null},"Inconsistent Sorting - natural sorting is used in the strategy")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Queries grow more inefficient as you go through more pages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"State must be maintained in the client to know last limit and offset in order to page")))),Object(l.b)("p",null,"To enable OFFSET based paging all you need to do is set the ",Object(l.b)("inlineCode",{parentName:"p"},"pagingStrategy")," option using the ",Object(l.b)("inlineCode",{parentName:"p"},"@QueryOptions")," decorator."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts" {5}',title:'"todo-item.dto.ts"',"{5}":!0},"import { FilterableField, QueryOptions } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(l.b)("p",null,"In this example we'll fetch the first 2 records."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItems(paging: { limit: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    nodes {\n      id\n      title\n      completed\n      created\n      updated\n    }\n  }\n}\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": false\n      },\n      "nodes": [\n        {\n          "id": "1",\n          "title": "Create Nest App",\n          "completed": true,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        },\n        {\n          "id": "2",\n          "title": "Create Entity",\n          "completed": false,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("p",null,"In this example we'll also pass in an offset to fetch the next 2 records."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItems(paging: { limit: 2, offset: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    nodes {\n      id\n      title\n      completed\n      created\n      updated\n    }\n  }\n}\n\n\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": true\n      },\n      "nodes": [\n        {\n          "id": "3",\n          "title": "Create Entity Service",\n          "completed": false,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        },\n        {\n          "id": "4",\n          "title": "Add Todo Item Resolver",\n          "completed": false,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"disabling-paging"},"Disabling Paging"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This strategy is only recommended if you are sure your dataset is small."))),Object(l.b)("p",null,"When using the ",Object(l.b)("inlineCode",{parentName:"p"},"NONE")," paging strategy the ",Object(l.b)("inlineCode",{parentName:"p"},"paging")," argument is removed and all methods will return an ",Object(l.b)("inlineCode",{parentName:"p"},"ArrayConnection"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Pros"),Object(l.b)("th",{parentName:"tr",align:null},"Cons"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"All data is returned at once"),Object(l.b)("td",{parentName:"tr",align:null},"Not suitable for large datasets")))),Object(l.b)("p",null,"To disable paging all you can set the ",Object(l.b)("inlineCode",{parentName:"p"},"pagingStrategy")," option using the ",Object(l.b)("inlineCode",{parentName:"p"},"@QueryOptions")," decorator to\n",Object(l.b)("inlineCode",{parentName:"p"},"PagingStrategies.NONE"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts" {5}',title:'"todo-item.dto.ts"',"{5}":!0},"import { FilterableField, QueryOptions } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@QueryOptions({ pagingStrategy: PagingStrategies.NONE })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(l.b)("p",null,"When using the strategy queries that return multiple records will return an array instead of a connection."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"{\n  todoItems {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "todoItems": [\n      {\n        "id": "1",\n        "title": "Create Nest App",\n        "completed": true,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "2",\n        "title": "Create Entity",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Entity Service",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "4",\n        "title": "Add Todo Item Resolver",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "5",\n        "title": "How to create item With Sub Tasks",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      }\n    ]\n  }\n}\n')))),Object(l.b)("hr",null))}p.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,m=c["".concat(o,".").concat(u)]||c[u]||p[u]||l;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},221:function(e,t,n){"use strict";var a=n(0),r=n(222);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},222:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},223:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(221),o=n(220),i=n(56),s=n.n(i);const b=37,d=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:p,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:g}=Object(l.a)(),[O,j]=Object(a.useState)(i),h=a.Children.toArray(e.children),f=[];if(null!=p){const e=m[p];null!=e&&e!==O&&c.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=f.indexOf(t),a=h[n].props.value;j(a),null!=p&&(g(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:o}=window;return t>=0&&r<=o&&a<=l&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case d:{const t=f.indexOf(e.target)+1;n=f[t]||f[0];break}case b:{const t=f.indexOf(e.target)-1;n=f[t]||f[f.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},u)},c.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>f.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},224:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);