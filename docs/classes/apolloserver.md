[alicialonso-api](../README.md) › [Globals](../globals.md) › [ApolloServer](apolloserver.md)

# Class: ApolloServer

## Hierarchy

* ApolloServerBase

  ↳ **ApolloServer**

## Index

### Constructors

* [constructor](apolloserver.md#constructor)

### Properties

* [graphqlPath](apolloserver.md#graphqlpath)
* [playgroundOptions](apolloserver.md#protected-optional-playgroundoptions)
* [plugins](apolloserver.md#protected-plugins)
* [requestOptions](apolloserver.md#requestoptions)
* [schema](apolloserver.md#protected-optional-schema)
* [subscriptionServerOptions](apolloserver.md#protected-optional-subscriptionserveroptions)
* [subscriptionsPath](apolloserver.md#optional-subscriptionspath)
* [uploadsConfig](apolloserver.md#protected-optional-uploadsconfig)

### Methods

* [applyMiddleware](apolloserver.md#applymiddleware)
* [createGraphQLServerOptions](apolloserver.md#creategraphqlserveroptions)
* [executeOperation](apolloserver.md#executeoperation)
* [getMiddleware](apolloserver.md#getmiddleware)
* [graphQLServerOptions](apolloserver.md#protected-graphqlserveroptions)
* [installSubscriptionHandlers](apolloserver.md#installsubscriptionhandlers)
* [setGraphQLPath](apolloserver.md#setgraphqlpath)
* [stop](apolloserver.md#stop)
* [supportsSubscriptions](apolloserver.md#protected-supportssubscriptions)
* [supportsUploads](apolloserver.md#protected-supportsuploads)
* [willStart](apolloserver.md#protected-willstart)

## Constructors

###  constructor

\+ **new ApolloServer**(`config`: [ApolloServerExpressConfig](../interfaces/apolloserverexpressconfig.md)): *[ApolloServer](apolloserver.md)*

*Overrides void*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ApolloServerExpressConfig](../interfaces/apolloserverexpressconfig.md) |

**Returns:** *[ApolloServer](apolloserver.md)*

## Properties

###  graphqlPath

• **graphqlPath**: *string*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:11

___

### `Protected` `Optional` playgroundOptions

• **playgroundOptions**? : *PlaygroundRenderPageOptions*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:21

___

### `Protected` plugins

• **plugins**: *ApolloServerPlugin[]*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:17

___

###  requestOptions

• **requestOptions**: *Partial‹GraphQLServerOptions‹any››*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:12

___

### `Protected` `Optional` schema

• **schema**? : *GraphQLSchema*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:25

___

### `Protected` `Optional` subscriptionServerOptions

• **subscriptionServerOptions**? : *SubscriptionServerOptions*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:18

___

### `Optional` subscriptionsPath

• **subscriptionsPath**? : *undefined | string*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:10

___

### `Protected` `Optional` uploadsConfig

• **uploadsConfig**? : *FileUploadOptions*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:19

## Methods

###  applyMiddleware

▸ **applyMiddleware**(`__namedParameters`: object): *void*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:109

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`app` | Application‹› |
`rest` | rest |

**Returns:** *void*

___

###  createGraphQLServerOptions

▸ **createGraphQLServerOptions**(`req`: express.Request, `res`: express.Response): *Promise‹GraphQLOptions›*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:94

**Parameters:**

Name | Type |
------ | ------ |
`req` | express.Request |
`res` | express.Response |

**Returns:** *Promise‹GraphQLOptions›*

___

###  executeOperation

▸ **executeOperation**(`request`: GraphQLRequest): *Promise‹GraphQLResponse›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`request` | GraphQLRequest |

**Returns:** *Promise‹GraphQLResponse›*

___

###  getMiddleware

▸ **getMiddleware**(`__namedParameters`: object): *express.Router*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:116

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type |
------ | ------ |
`bodyParserConfig` | undefined &#124; false &#124; true &#124; OptionsJson |
`cors` | undefined &#124; false &#124; true &#124; CorsOptions |
`disableHealthCheck` | undefined &#124; false &#124; true |
`onHealthCheck` | undefined &#124; function |
`path` | undefined &#124; string |

**Returns:** *express.Router*

___

### `Protected` graphQLServerOptions

▸ **graphQLServerOptions**(`integrationContextArgument?`: Record‹string, any›): *Promise‹GraphQLServerOptions›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`integrationContextArgument?` | Record‹string, any› |

**Returns:** *Promise‹GraphQLServerOptions›*

___

###  installSubscriptionHandlers

▸ **installSubscriptionHandlers**(`server`: HttpServer): *void*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`server` | HttpServer |

**Returns:** *void*

___

###  setGraphQLPath

▸ **setGraphQLPath**(`path`: string): *void*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *void*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:32

**Returns:** *Promise‹void›*

___

### `Protected` supportsSubscriptions

▸ **supportsSubscriptions**(): *boolean*

*Overrides void*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:101

**Returns:** *boolean*

___

### `Protected` supportsUploads

▸ **supportsUploads**(): *boolean*

*Overrides void*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:105

**Returns:** *boolean*

___

### `Protected` willStart

▸ **willStart**(): *Promise‹void›*

*Inherited from void*

Defined in node_modules/apollo-server-core/dist/ApolloServer.d.ts:31

**Returns:** *Promise‹void›*
