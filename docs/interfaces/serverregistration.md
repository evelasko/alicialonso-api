[alicialonso-api](../README.md) › [Globals](../globals.md) › [ServerRegistration](serverregistration.md)

# Interface: ServerRegistration

## Hierarchy

* [GetMiddlewareOptions](getmiddlewareoptions.md)

  ↳ **ServerRegistration**

## Index

### Properties

* [app](serverregistration.md#app)
* [bodyParserConfig](serverregistration.md#optional-bodyparserconfig)
* [cors](serverregistration.md#optional-cors)
* [disableHealthCheck](serverregistration.md#optional-disablehealthcheck)
* [onHealthCheck](serverregistration.md#optional-onhealthcheck)
* [path](serverregistration.md#optional-path)

## Properties

###  app

• **app**: *express.Application*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:40

___

### `Optional` bodyParserConfig

• **bodyParserConfig**? : *OptionsJson | boolean*

*Inherited from [GetMiddlewareOptions](getmiddlewareoptions.md).[bodyParserConfig](getmiddlewareoptions.md#optional-bodyparserconfig)*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:28

___

### `Optional` cors

• **cors**? : *corsMiddleware.CorsOptions | boolean*

*Inherited from [GetMiddlewareOptions](getmiddlewareoptions.md).[cors](getmiddlewareoptions.md#optional-cors)*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:27

___

### `Optional` disableHealthCheck

• **disableHealthCheck**? : *undefined | false | true*

*Inherited from [GetMiddlewareOptions](getmiddlewareoptions.md).[disableHealthCheck](getmiddlewareoptions.md#optional-disablehealthcheck)*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:30

___

### `Optional` onHealthCheck

• **onHealthCheck**? : *undefined | function*

*Inherited from [GetMiddlewareOptions](getmiddlewareoptions.md).[onHealthCheck](getmiddlewareoptions.md#optional-onhealthcheck)*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:29

___

### `Optional` path

• **path**? : *undefined | string*

*Inherited from [GetMiddlewareOptions](getmiddlewareoptions.md).[path](getmiddlewareoptions.md#optional-path)*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:26
