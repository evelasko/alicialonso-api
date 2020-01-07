[alicialonso-api](../README.md) › [Globals](../globals.md) › [ApolloServerExpressConfig](apolloserverexpressconfig.md)

# Interface: ApolloServerExpressConfig

## Hierarchy

* Config

  ↳ **ApolloServerExpressConfig**

## Index

### Properties

* [cacheControl](apolloserverexpressconfig.md#optional-cachecontrol)
* [context](apolloserverexpressconfig.md#optional-context)
* [engine](apolloserverexpressconfig.md#optional-engine)
* [extensions](apolloserverexpressconfig.md#optional-extensions)
* [gateway](apolloserverexpressconfig.md#optional-gateway)
* [introspection](apolloserverexpressconfig.md#optional-introspection)
* [mockEntireSchema](apolloserverexpressconfig.md#optional-mockentireschema)
* [mocks](apolloserverexpressconfig.md#optional-mocks)
* [modules](apolloserverexpressconfig.md#optional-modules)
* [parseOptions](apolloserverexpressconfig.md#optional-parseoptions)
* [persistedQueries](apolloserverexpressconfig.md#optional-persistedqueries)
* [playground](apolloserverexpressconfig.md#optional-playground)
* [plugins](apolloserverexpressconfig.md#optional-plugins)
* [resolvers](apolloserverexpressconfig.md#optional-resolvers)
* [schema](apolloserverexpressconfig.md#optional-schema)
* [schemaDirectives](apolloserverexpressconfig.md#optional-schemadirectives)
* [subscriptions](apolloserverexpressconfig.md#optional-subscriptions)
* [typeDefs](apolloserverexpressconfig.md#optional-typedefs)
* [uploads](apolloserverexpressconfig.md#optional-uploads)

## Properties

### `Optional` cacheControl

• **cacheControl**? : *CacheControlExtensionOptions | boolean*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:57

___

### `Optional` context

• **context**? : *ContextFunction‹[ExpressContext](expresscontext.md), [Context](../globals.md#context)› | [Context](../globals.md#context)*

*Overrides void*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:83

___

### `Optional` engine

• **engine**? : *boolean | EngineReportingOptions‹[Context](../globals.md#context)›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:55

___

### `Optional` extensions

• **extensions**? : *Array‹function›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:56

___

### `Optional` gateway

• **gateway**? : *GraphQLService*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:63

___

### `Optional` introspection

• **introspection**? : *undefined | false | true*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:52

___

### `Optional` mockEntireSchema

• **mockEntireSchema**? : *undefined | false | true*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:54

___

### `Optional` mocks

• **mocks**? : *boolean | IMocks*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:53

___

### `Optional` modules

• **modules**? : *GraphQLSchemaModule[]*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:45

___

### `Optional` parseOptions

• **parseOptions**? : *GraphQLParseOptions*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:47

___

### `Optional` persistedQueries

• **persistedQueries**? : *PersistedQueryOptions | false*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:59

___

### `Optional` playground

• **playground**? : *PlaygroundConfig*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:62

___

### `Optional` plugins

• **plugins**? : *PluginDefinition[]*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:58

___

### `Optional` resolvers

• **resolvers**? : *IResolvers | Array‹IResolvers›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:48

___

### `Optional` schema

• **schema**? : *GraphQLSchema*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:49

___

### `Optional` schemaDirectives

• **schemaDirectives**? : *Record‹string, SchemaDirectiveVisitor›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:50

___

### `Optional` subscriptions

• **subscriptions**? : *Partial‹SubscriptionServerOptions› | string | false*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:60

___

### `Optional` typeDefs

• **typeDefs**? : *DocumentNode | Array‹DocumentNode› | string | Array‹string›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:46

___

### `Optional` uploads

• **uploads**? : *boolean | FileUploadOptions*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/types.d.ts:61
