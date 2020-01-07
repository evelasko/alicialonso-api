[alicialonso-api](README.md) › [Globals](globals.md)

# alicialonso-api

## Index

### Classes

* [ApolloServer](classes/apolloserver.md)

### Interfaces

* [AAxError](interfaces/aaxerror.md)
* [ApolloServerExpressConfig](interfaces/apolloserverexpressconfig.md)
* [ExpressContext](interfaces/expresscontext.md)
* [ExpressGraphQLOptionsFunction](interfaces/expressgraphqloptionsfunction.md)
* [ExtendedRecipient](interfaces/extendedrecipient.md)
* [GetMiddlewareOptions](interfaces/getmiddlewareoptions.md)
* [ServerRegistration](interfaces/serverregistration.md)

### Type aliases

* [Context](globals.md#context)
* [EmailArgs](globals.md#emailargs)
* [LoginPayload](globals.md#loginpayload)
* [UserCache](globals.md#usercache)
* [UserCredentials](globals.md#usercredentials)
* [emailTemplate](globals.md#emailtemplate)
* [emailTemplateOptions](globals.md#emailtemplateoptions)

### Variables

* [AddAddress](globals.md#const-addaddress)
* [Address](globals.md#const-address)
* [AuthPayload](globals.md#const-authpayload)
* [ChangePassword](globals.md#const-changepassword)
* [Department](globals.md#const-department)
* [Device](globals.md#const-device)
* [GetAllGroupRequests](globals.md#const-getallgrouprequests)
* [Login](globals.md#const-login)
* [LoginPayloadPredicate](globals.md#const-loginpayloadpredicate)
* [Mailgun](globals.md#const-mailgun)
* [OfficialDocument](globals.md#const-officialdocument)
* [ProfileMutations](globals.md#const-profilemutations)
* [ProfileQueries](globals.md#const-profilequeries)
* [RequestResetPassword](globals.md#const-requestresetpassword)
* [Role](globals.md#const-role)
* [Shield](globals.md#const-shield)
* [SignUpUser](globals.md#const-signupuser)
* [SocialLink](globals.md#const-sociallink)
* [SocialNetwork](globals.md#const-socialnetwork)
* [Space](globals.md#const-space)
* [SpaceVenueQueries](globals.md#const-spacevenuequeries)
* [UpdateAddress](globals.md#const-updateaddress)
* [User](globals.md#const-user)
* [UserQuery](globals.md#const-userquery)
* [Venue](globals.md#const-venue)
* [VenueSpaceMutations](globals.md#const-venuespacemutations)
* [addKeyValueProcess](globals.md#const-addkeyvalueprocess)
* [addKeyValueSecondsProcess](globals.md#const-addkeyvaluesecondsprocess)
* [addSocialLink](globals.md#const-addsociallink)
* [app](globals.md#const-app)
* [arena](globals.md#const-arena)
* [authApproveGroupRequest](globals.md#const-authapprovegrouprequest)
* [authBaseRoute](globals.md#const-authbaseroute)
* [authChangePassword](globals.md#const-authchangepassword)
* [authConfirmationRoute](globals.md#const-authconfirmationroute)
* [authRejectGroupRequestRoute](globals.md#const-authrejectgrouprequestroute)
* [authResetPassword](globals.md#const-authresetpassword)
* [authRoutes](globals.md#const-authroutes)
* [credentialsCheck](globals.md#const-credentialscheck)
* [cypher](globals.md#const-cypher)
* [emailArgValidator](globals.md#const-emailargvalidator)
* [emailNotRegistered](globals.md#const-emailnotregistered)
* [emailQueue](globals.md#const-emailqueue)
* [emailRegistered](globals.md#const-emailregistered)
* [emailVerificationPrefix](globals.md#const-emailverificationprefix)
* [eventsCacheFragment](globals.md#const-eventscachefragment)
* [eventsCacheKey](globals.md#const-eventscachekey)
* [groupRequestPending](globals.md#const-grouprequestpending)
* [groupRequestPrefix](globals.md#const-grouprequestprefix)
* [groupRequestValidationRule](globals.md#const-grouprequestvalidationrule)
* [hbsFromFile](globals.md#const-hbsfromfile)
* [isAdminUser](globals.md#const-isadminuser)
* [isAuthenticatedUser](globals.md#const-isauthenticateduser)
* [keyDivider](globals.md#const-keydivider)
* [keyExists](globals.md#const-keyexists)
* [newsesCacheFragment](globals.md#const-newsescachefragment)
* [newsesCacheKey](globals.md#const-newsescachekey)
* [permissions](globals.md#const-permissions)
* [photon](globals.md#const-photon)
* [port](globals.md#const-port)
* [preSchema](globals.md#const-preschema)
* [redisClient](globals.md#const-redisclient)
* [redisContextInstance](globals.md#const-rediscontextinstance)
* [redisInstance](globals.md#const-redisinstance)
* [redisQueue](globals.md#const-redisqueue)
* [redisSessionPrefix](globals.md#const-redissessionprefix)
* [redisStore](globals.md#const-redisstore)
* [removeKeyProcess](globals.md#const-removekeyprocess)
* [resetPasswordPrefix](globals.md#const-resetpasswordprefix)
* [schema](globals.md#const-schema)
* [secret](globals.md#const-secret)
* [server](globals.md#const-server)
* [sess](globals.md#const-sess)
* [signUpValidationRule](globals.md#const-signupvalidationrule)
* [userSessionIdPrefix](globals.md#const-usersessionidprefix)
* [usersCacheFragment](globals.md#const-userscachefragment)
* [usersCacheKey](globals.md#const-userscachekey)
* [validNewPassword](globals.md#const-validnewpassword)
* [voyager](globals.md#const-voyager)
* [webHookMailgun](globals.md#const-webhookmailgun)

### Functions

* [addKeyValue](globals.md#addkeyvalue)
* [addKeyValueSeconds](globals.md#addkeyvalueseconds)
* [context](globals.md#const-context)
* [contextAuth](globals.md#const-contextauth)
* [createGroupRequest](globals.md#creategrouprequest)
* [decodeLoginToken](globals.md#const-decodelogintoken)
* [decryptString](globals.md#decryptstring)
* [default](globals.md#default)
* [encryptString](globals.md#encryptstring)
* [errorHandlingMiddleware](globals.md#errorhandlingmiddleware)
* [fileUploadMiddleware](globals.md#const-fileuploadmiddleware)
* [formatYupError](globals.md#const-formatyuperror)
* [generateLoginToken](globals.md#const-generatelogintoken)
* [generateResetPasswordKey](globals.md#const-generateresetpasswordkey)
* [generateVerificationKey](globals.md#const-generateverificationkey)
* [getKeyNature](globals.md#const-getkeynature)
* [getManyUsers](globals.md#const-getmanyusers)
* [graphqlExpress](globals.md#graphqlexpress)
* [hbs2precompiled](globals.md#const-hbs2precompiled)
* [newError](globals.md#const-newerror)
* [normalizeToArray](globals.md#const-normalizetoarray)
* [processEncryptedEmail](globals.md#processencryptedemail)
* [processGroupRequest](globals.md#processgrouprequest)
* [readFile](globals.md#const-readfile)
* [redisSessionName](globals.md#const-redissessionname)
* [removeKey](globals.md#removekey)
* [resolveAuthToken](globals.md#const-resolveauthtoken)
* [resolveDeviceToken](globals.md#const-resolvedevicetoken)
* [rf](globals.md#const-rf)
* [sendEmail](globals.md#const-sendemail)
* [sendQueuedEmail](globals.md#sendqueuedemail)
* [setContextShieldCache](globals.md#const-setcontextshieldcache)
* [setPasswordResetKey](globals.md#setpasswordresetkey)
* [setVerificationKey](globals.md#setverificationkey)
* [userCredentialsCheck](globals.md#const-usercredentialscheck)

### Object literals

* [cors](globals.md#const-cors)
* [errorMessages](globals.md#const-errormessages)
* [keyExpiration](globals.md#const-keyexpiration)
* [links](globals.md#const-links)

## Type aliases

###  Context

Ƭ **Context**: *object*

*Defined in [src/types/context.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/types/context.ts#L6)*

#### Type declaration:

* **aaxCache**: *object*

* **photon**: *Photon*

* **redis**? : *Redis.Redis*

* **request**: *Request*

* **session**? : *undefined | Session*

* **shieldCache**? : *undefined | object*

* **url**? : *undefined | string*

* **user**: *[LoginPayload](globals.md#loginpayload) | null*

___

###  EmailArgs

Ƭ **EmailArgs**: *object*

*Defined in [src/helpers/email/email.handler.ts:52](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/email.handler.ts#L52)*

Email arguments object

**`type`** EmailArgs<C, D> C: type for context, D: type for data

**`property`** {string | string[]} to recipient or recipients addresses array

**`property`** {string} subject subject test of the email

**`property`** {string} text the text to fallback if no html template file provided

**`property`** {string} [template] the hbs template file name relative to path src/server/views

**`property`** {object} [context] the object with variables needed to render the template

**`property`** {object} [data] additional variables to process the email or the template file

#### Type declaration:

* **context**? : *C*

* **data**? : *D*

* **subject**: *string*

* **templateFileName**? : *string | null*

* **text**: *string*

* **to**: *string | string[]*

___

###  LoginPayload

Ƭ **LoginPayload**: *object*

*Defined in [src/types/context.ts:17](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/types/context.ts#L17)*

#### Type declaration:

* **email**: *string*

* **group**: *UserGroup*

* **id**: *string*

* **isAdmin**: *boolean*

___

###  UserCache

Ƭ **UserCache**: *object*

*Defined in [src/types/index.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/types/index.ts#L5)*

#### Type declaration:

* **email**: *string*

* **group**: *UserGroup*

* **hpassword**: *string*

* **id**: *string*

* **isAdmin**: *boolean*

___

###  UserCredentials

Ƭ **UserCredentials**: *object | null*

*Defined in [src/helpers/core/conditions.handler.ts:7](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/conditions.handler.ts#L7)*

___

###  emailTemplate

Ƭ **emailTemplate**: *object*

*Defined in [src/types/email.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/types/email.ts#L8)*

#### Type declaration:

* \[ **templateFileName**: *string*\]: [emailTemplateOptions](globals.md#emailtemplateoptions)

___

###  emailTemplateOptions

Ƭ **emailTemplateOptions**: *object*

*Defined in [src/types/email.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/types/email.ts#L3)*

#### Type declaration:

* **data**: *__type*

* **query**: *__type*

## Variables

### `Const` AddAddress

• **AddAddress**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('addAddress', {
    type: 'Address',
    description: `Add a new address to the currently logged in user.`,
    args: {
        address1: stringArg({ required: true }),
        address2: stringArg({ required: false }),
        city: stringArg({ required: true }),
        region: stringArg({ required: true }),
        country: stringArg({ required: true }),
        code: stringArg({ required: true, default: 'ES' }),
        primary: booleanArg({ required: false, default: false })
    },
    resolve: async (parent, args, { photon, user }: Context) =>
        photon.addresses.create({ data: { ...args, owner: { connect: { id: user && user.id } } } })
})

*Defined in [src/schema/resolvers/common/user/profile/mutations.io.ts:14](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/mutations.io.ts#L14)*

___

### `Const` Address

• **Address**: *NexusObjectTypeDef‹"Address"›* =  objectType({
    name: 'Address',
    description: `User's physical address`,
    definition(t) {
        t.model.id()
        t.model.owner({ type: 'User' })
        t.model.address1()
        t.model.address2()
        t.model.city()
        t.model.region()
        t.model.country()
        t.model.code()
        t.model.primary()
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:48](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L48)*

___

### `Const` AuthPayload

• **AuthPayload**: *NexusObjectTypeDef‹"AuthPayload"›* =  objectType({
    name: 'AuthPayload',
    description: 'Authorization payload token with the key required for the mutation action requested',
    definition(t) {
        t.string('token', { nullable: false })
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/types.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/types.io.ts#L3)*

___

### `Const` ChangePassword

• **ChangePassword**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('changePassword', {
    type: 'AuthPayload',
    description: `Changes the password of the account whose reset request matches the provided key.`,
    args: {
        key: stringArg({ required: true }),
        newPassword: stringArg({ required: true })
    },
    resolve: async (parent, { key, newPassword }, { photon }) => {
        await photon.users.update({
            where: { email: await redisInstance.get(key) },
            data: { password: await bcrypt.hash(newPassword, 8) }
        })
        return { token: 'ok' }
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/mutations.io.ts:75](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/mutations.io.ts#L75)*

___

### `Const` Department

• **Department**: *NexusObjectTypeDef‹"Department"›* =  objectType({
    name: 'Department',
    description: 'Department is the base unit of HR organizational areas',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.members({ type: 'User' })
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:79](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L79)*

___

### `Const` Device

• **Device**: *NexusObjectTypeDef‹"Device"›* =  objectType({
    name: 'Device',
    description: `User's mobile or digital device`,
    definition(t) {
        t.model.id()
        t.model.owner({ type: 'User' })
        t.model.countryCode()
        t.model.number()
        t.model.type()
        t.model.notificationsDevice()
        t.model.notificationsPermission()
        t.model.verified()
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:64](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L64)*

___

### `Const` GetAllGroupRequests

• **GetAllGroupRequests**: *NexusExtendTypeDef‹"Query"›* =  queryField('allGroupRequest', {
    type: 'User',
    list: true,
    resolve: async (root, args, { photon }) => {
        return photon.users.findMany({ where: { NOT: { groupRequest: null } } })
    }
})

*Defined in [src/schema/resolvers/common/user/group/queries.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/group/queries.io.ts#L3)*

___

### `Const` Login

• **Login**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('login', {
    type: 'AuthPayload',
    description: `Login a registered user.
                  Returns the token required for authentication.`,
    args: {
        email: stringArg({ required: true }),
        password: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { session, photon }) => {
        // retreive user's data
        const user: LoginPayload | null = await photon.users.findOne({
            where: { email },
            select: { id: true, isAdmin: true, group: true, email: true }
        })
        if (!user) {
            return { token: '#' }
        }
        if (session) session.user = user
        const loginToken = generateLoginToken(user)
        return { token: loginToken || '' } // TODO Properly resolve login token null value
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/mutations.io.ts:38](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/mutations.io.ts#L38)*

___

### `Const` LoginPayloadPredicate

• **LoginPayloadPredicate**: *function* =  where({
    id: is(String),
    isAdmin: is(Boolean),
    group: is(String),
    email: is(String)
})

*Defined in [src/helpers/security/token.handler.ts:16](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/token.handler.ts#L16)*

#### Type declaration:

▸ <**U**>(`testObj`: U): *boolean*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`testObj` | U |

___

### `Const` Mailgun

• **Mailgun**: *Mail* =  nodemailer.createTransport(
    new MailgunTransport({
        auth: {
            apiKey: process.env.MAILGUN_API_KEY as string,
            domain: process.env.MAILGUN_DOMAIN as string
        }
    })
)

*Defined in [src/helpers/email/email.handler.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/email.handler.ts#L9)*

___

### `Const` OfficialDocument

• **OfficialDocument**: *NexusObjectTypeDef‹"OfficialDocument"›* =  objectType({
    name: 'OfficialDocument',
    description: 'Government issued identification document',
    definition(t) {
        t.model.id()
        t.model.number()
        t.model.type()
        t.model.other()
        t.model.expiration()
        t.model.owner({ type: 'User' })
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:35](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L35)*

___

### `Const` ProfileMutations

• **ProfileMutations**: *NexusExtendTypeDef‹"Mutation"›* =  extendType({
    type: 'Mutation',
    definition(t) {
        t.crud.createOneSocialNetwork({ alias: 'createSocialNetwork', type: 'SocialNetwork' })
    }
})

*Defined in [src/schema/resolvers/common/user/profile/mutations.io.ts:7](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/mutations.io.ts#L7)*

___

### `Const` ProfileQueries

• **ProfileQueries**: *NexusExtendTypeDef‹"Query"›* =  extendType({
    type: 'Query',
    definition(t) {
        t.crud.address()
        t.crud.addresses()
        t.crud.department()
        t.crud.departments()
        t.crud.socialLink()
        t.crud.socialLinks()
        t.crud.socialNetwork()
        t.crud.socialNetworks()
        t.crud.role()
        t.crud.roles()
        t.crud.officialDocument()
        t.crud.officialDocuments()
        t.crud.device()
        t.crud.devices()
    }
})

*Defined in [src/schema/resolvers/common/user/profile/queries.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/queries.io.ts#L3)*

___

### `Const` RequestResetPassword

• **RequestResetPassword**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('requestResetPassword', {
    type: 'AuthPayload',
    description: `Creates a reset password request, locks the account requested, and sends an email to the requestee with a link to create a new password.
                  Returns the key to restore the password.`,
    args: {
        email: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { photon }) => {
        // lock account
        await photon.users.update({ where: { email }, data: { password: '*' } })
        return { token: generateResetPasswordKey() }
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/mutations.io.ts:61](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/mutations.io.ts#L61)*

___

### `Const` Role

• **Role**: *NexusObjectTypeDef‹"Role"›* =  objectType({
    name: 'Role',
    description: `User permission role`,
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.users({ type: 'User' })
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:25](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L25)*

___

### `Const` Shield

• **Shield**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('shield', {
    type: 'AuthPayload',
    args: {
        msg: stringArg({ required: true })
    },
    resolve: async (parent, args, { shieldCache }) => {
        console.log(shieldCache)
        return {
            token: shieldCache ? `Taken from context: ${shieldCache.msg ? shieldCache.msg : 'nothing'}` : 'sorry...'
        }
    }
})

*Defined in [src/schema/resolvers/common/user/group/mutations.io.ts:44](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/group/mutations.io.ts#L44)*

___

### `Const` SignUpUser

• **SignUpUser**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('signUpUser', {
    type: 'AuthPayload',
    description: `Signs up a new user.
                  Returns the token required to verify its email account.`,
    args: {
        firstname: stringArg({ required: true }),
        lastname: stringArg({ required: true }),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
        groupRequest: arg({ type: 'UserGroup', required: false })
    },
    resolve: async (parent, args, { photon, request }) => {
        args.password = await bcrypt.hash(args.password, 8)
        await photon.users.create({ data: { ...args } })

        const { groupRequest } = args

        // process group request if present
        if (groupRequest && groupRequest !== 'GENERAL') {
            // await notifyNewGroupRequest(email)
        }
        return { token: generateVerificationKey() }
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/mutations.io.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/mutations.io.ts#L13)*

___

### `Const` SocialLink

• **SocialLink**: *NexusObjectTypeDef‹"SocialLink"›* =  objectType({
    name: 'SocialLink',
    description: `User's social network link`,
    definition(t) {
        t.model.id()
        t.model.link()
        t.model.socialNetwork({ type: 'SocialNetwork' })
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L15)*

___

### `Const` SocialNetwork

• **SocialNetwork**: *NexusObjectTypeDef‹"SocialNetwork"›* =  objectType({
    name: 'SocialNetwork',
    description: `Social networks available for user profiles`,
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.baseURL()
        t.model.ownURL()
        t.model.userLinks({ type: 'SocialLink' })
    }
})

*Defined in [src/schema/resolvers/common/user/profile/types.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/types.io.ts#L3)*

___

### `Const` Space

• **Space**: *NexusObjectTypeDef‹"Space"›* =  objectType({
    name: 'Space',
    description: 'Space/room/area in a venue',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.venue({ type: 'Venue' })
    }
})

*Defined in [src/schema/resolvers/common/venue/types.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/venue/types.io.ts#L3)*

___

### `Const` SpaceVenueQueries

• **SpaceVenueQueries**: *NexusExtendTypeDef‹"Query"›* =  extendType({
    type: 'Query',
    definition(t) {
        t.crud.space()
        t.crud.spaces()
        t.crud.venue()
        t.crud.venues()
    }
})

*Defined in [src/schema/resolvers/common/venue/queries.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/venue/queries.io.ts#L3)*

___

### `Const` UpdateAddress

• **UpdateAddress**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('updateAddress', {
    type: 'Address',
    description: `Updates an existing address of the currently logged in user.`,
    args: {
        id: stringArg({ required: true }),
        address1: stringArg({ required: false }),
        address2: stringArg({ required: false }),
        city: stringArg({ required: false }),
        region: stringArg({ required: false }),
        country: stringArg({ required: false }),
        code: stringArg({ required: false }),
        primary: booleanArg({ required: false, default: false })
    },
    resolve: async (parent, args, { photon, user }: Context) =>
        photon.addresses.update({ where: { id: args.id }, data: { ...args } })
})

*Defined in [src/schema/resolvers/common/user/profile/mutations.io.ts:30](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/mutations.io.ts#L30)*

___

### `Const` User

• **User**: *NexusObjectTypeDef‹"User"›* =  objectType({
    name: 'User',
    description: `Registered user`,
    definition(t) {
        t.model.id()
        t.model.firstname()
        t.model.lastname()
        t.model.email()
        t.model.emailVerified()
        t.model.password()
        t.model.group()
        t.model.groupRequest()
        t.model.isAdmin()
        t.model.addresses()
        t.model.department()
        t.model.devices()
        t.model.officialDocuments()
        t.model.roles()
        t.model.socialNetworkLinks()
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/types.io.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/types.io.ts#L11)*

___

### `Const` UserQuery

• **UserQuery**: *NexusExtendTypeDef‹"Query"›* =  queryField('me', {
    type: 'User',
    description: 'Query data of the currently authenticated user',
    resolve: async (parent, args, { photon, user }) => {
        if (!user) throw new Error('authentication required')
        const { email } = user
        const response: User | null = await photon.users.findOne({ where: { email } })
        if (!response) throw new Error('user not found')
        return response
    }
})

*Defined in [src/schema/resolvers/common/user/authentication/queries.io.ts:7](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/authentication/queries.io.ts#L7)*

___

### `Const` Venue

• **Venue**: *NexusObjectTypeDef‹"Venue"›* =  objectType({
    name: 'Venue',
    description: 'Places',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.address()
        t.model.latitude()
        t.model.longitude()
        t.model.placeID()
        t.model.spaces({ type: 'Space' })
    }
})

*Defined in [src/schema/resolvers/common/venue/types.io.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/venue/types.io.ts#L13)*

___

### `Const` VenueSpaceMutations

• **VenueSpaceMutations**: *NexusExtendTypeDef‹"Mutation"›* =  extendType({
    type: 'Mutation',
    definition(t) {
        t.crud.createOneSpace({ alias: 'createSpace', type: 'Space' })
        t.crud.createOneVenue({ alias: 'createVenue', type: 'Venue' })
    }
})

*Defined in [src/schema/resolvers/common/venue/mutations.io.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/venue/mutations.io.ts#L3)*

___

### `Const` addKeyValueProcess

• **addKeyValueProcess**: *Promise‹void›* =  redisQueue.process(
    'addKeyValue',
    async job => await addKeyValue.default(job)
    // require.resolve('./processors/add-key-value.p')
)

*Defined in [src/queue/index.ts:19](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/queue/index.ts#L19)*

___

### `Const` addKeyValueSecondsProcess

• **addKeyValueSecondsProcess**: *Promise‹void›* =  redisQueue.process(
    'addKeyValueSeconds',
    async job => await addKeyValueSeconds.default(job)
    // require.resolve('./processors/add-key-value-seconds.p')
)

*Defined in [src/queue/index.ts:24](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/queue/index.ts#L24)*

___

### `Const` addSocialLink

• **addSocialLink**: *NexusExtendTypeDef‹"Mutation"›* =  mutationField('addSocialLink', {
    type: 'SocialLink',
    description: `Adds a new social link for the current logged in user`,
    args: {
        link: stringArg({ required: true }),
        network: stringArg({ required: true })
    },
    resolve: async (parent, { link, network }, { photon, user }: Context) =>
        photon.socialLinks.create({
            data: {
                link,
                owner: { connect: { email: user && user.email } },
                socialNetwork: { connect: { id: network } }
            }
        })
})

*Defined in [src/schema/resolvers/common/user/profile/mutations.io.ts:47](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/resolvers/common/user/profile/mutations.io.ts#L47)*

___

### `Const` app

• **app**: *Express‹›* =  express()

*Defined in [src/server/index.ts:14](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/index.ts#L14)*

___

### `Const` arena

• **arena**: *RequestHandler‹ParamsDictionary›* =  Arena(
    {
        queues: [
            {
                name: 'emailQueue',
                hostId: '@licialonso',
                redis: { url: process.env.REDIS_URL as string }
            }
        ]
    },
    {
        disableListen: process.env.NODE_ENV === 'production' ? false : true
    }
)

*Defined in [src/server/config/arenaQueueMonitor.ts:4](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/arenaQueueMonitor.ts#L4)*

___

### `Const` authApproveGroupRequest

• **authApproveGroupRequest**: *"/grouprequest/approve"* =  `/grouprequest/approve`

*Defined in [src/constants/routes.c.ts:4](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/routes.c.ts#L4)*

___

### `Const` authBaseRoute

• **authBaseRoute**: *"/user"* =  `/user`

*Defined in [src/constants/routes.c.ts:1](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/routes.c.ts#L1)*

___

### `Const` authChangePassword

• **authChangePassword**: *"/password/change"* =  `/password/change`

*Defined in [src/constants/routes.c.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/routes.c.ts#L6)*

___

### `Const` authConfirmationRoute

• **authConfirmationRoute**: *"/confirmation"* =  `/confirmation`

*Defined in [src/constants/routes.c.ts:2](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/routes.c.ts#L2)*

___

### `Const` authRejectGroupRequestRoute

• **authRejectGroupRequestRoute**: *"/grouprequest/reject"* =  `/grouprequest/reject`

*Defined in [src/constants/routes.c.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/routes.c.ts#L3)*

___

### `Const` authResetPassword

• **authResetPassword**: *"/password/reset"* =  `/password/reset`

*Defined in [src/constants/routes.c.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/routes.c.ts#L5)*

___

### `Const` authRoutes

• **authRoutes**: *Router‹›* =  express.Router()

*Defined in [src/server/routes/auth.routes.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/routes/auth.routes.ts#L13)*

___

### `Const` credentialsCheck

• **credentialsCheck**: *Rule‹›* =  rule({ cache: 'strict' })(async (parent, { email, password }, { photon }: Context) =>
    userCredentialsCheck(
        password,
        await photon.users.findOne({
            where: { email },
            select: { password: true, emailVerified: true }
        })
    )(email)
)

*Defined in [src/permissions/rules.ts:38](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L38)*

Performs the following checks returning the corresponding error message of true if cleared:
(1) returned user must not be null
(2) password must not be '*' (locked account)
(3) emailVerified must be true
(4) passwords must match

___

### `Const` cypher

• **cypher**: *SimpleCrypto‹›* =  new SimpleCrypto((process.env.JWT_SECRET as string) || 'testSecret')

*Defined in [src/helpers/security/crypto.handler.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/crypto.handler.ts#L5)*

___

### `Const` emailArgValidator

• **emailArgValidator**: *ObjectSchema‹object & Object›* =  yup.object().shape({
    to: yup
        .string()
        .email(errorMessages.s_invalidEmail)
        .required(),
    subject: yup.string().required(),
    text: yup.string().required(),
    templateFileName: yup.string().notRequired(),
    context: yup.object().notRequired(),
    data: yup.object().notRequired()
})

*Defined in [src/permissions/email.yup.ts:4](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/email.yup.ts#L4)*

___

### `Const` emailNotRegistered

• **emailNotRegistered**: *Rule‹›* =  rule({ cache: 'strict' })(async (parent, { email }, { photon }) =>
    !(await photon.users.findOne({ where: { email }, select: { firstname: true } }))
        ? true
        : errorMessages.d_emailAlreadyRegistered(email)
)

*Defined in [src/permissions/rules.ts:19](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L19)*

___

### `Const` emailQueue

• **emailQueue**: *Queue‹any›* =  new Queue('emailQueue', process.env.REDIS_QUEUE_URL as string)

*Defined in [src/queue/index.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/queue/index.ts#L8)*

___

### `Const` emailRegistered

• **emailRegistered**: *Rule‹›* =  rule({ cache: 'strict' })(async (parent, { email }, { photon }: Context) =>
    (await photon.users.findOne({ where: { email }, select: { firstname: true } }))
        ? true
        : errorMessages.d_emailNotRegistered(email)
)

*Defined in [src/permissions/rules.ts:25](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L25)*

___

### `Const` emailVerificationPrefix

• **emailVerificationPrefix**: *string* =  'verifyEmail' + keyDivider

*Defined in [src/constants/redis.c.ts:12](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L12)*

___

### `Const` eventsCacheFragment

• **eventsCacheFragment**: *"
fragment EventWithAuthor on Event {
    id
    title
    subtitle
    imageURL
    date
    target
    status
    author { id }    
}
"* =  `
fragment EventWithAuthor on Event {
    id
    title
    subtitle
    imageURL
    date
    target
    status
    author { id }    
}
`

*Defined in [src/constants/fragments.c.ts:10](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/fragments.c.ts#L10)*

___

### `Const` eventsCacheKey

• **eventsCacheKey**: *string* =  'eventsCache' + keyDivider

*Defined in [src/constants/redis.c.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L15)*

___

### `Const` groupRequestPending

• **groupRequestPending**: *Rule‹›* =  rule({ cache: 'strict' })(async (parent, { email }, context: Context) =>
    setContextShieldCache<{ groupRequest: UserGroup | null } | null>(context)(
        'groupRequest',
        propOr(
            null,
            'groupRequest',
            await context.photon.users.findOne({ where: { email }, select: { groupRequest: true } })
        )
    )
        ? true
        : errorMessages.s_groupRequestNotFound
)

*Defined in [src/permissions/rules.ts:52](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L52)*

___

### `Const` groupRequestPrefix

• **groupRequestPrefix**: *string* =  'groupRequest' + keyDivider

*Defined in [src/constants/redis.c.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L13)*

___

### `Const` groupRequestValidationRule

• **groupRequestValidationRule**: *InputRule‹Shape‹object, object››* =  inputRule('groupRequestInputs')(yup =>
    yup.object().shape({
        groupRequest: yup.string().oneOf(['STUDENT', 'STAFF'], errorMessages.s_groupRequestNotNeeded)
    })
)

*Defined in [src/permissions/validation.ts:37](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/validation.ts#L37)*

*Defined in [src/permissions/graphql.yup.ts:37](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/graphql.yup.ts#L37)*

___

### `Const` hbsFromFile

• **hbsFromFile**: *function* =  pipe(rf, hbs2precompiled)

*Defined in [src/helpers/email/template.handler.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/template.handler.ts#L15)*

#### Type declaration:

▸ (`x0`: V0): *T2*

**Parameters:**

Name | Type |
------ | ------ |
`x0` | V0 |

___

### `Const` isAdminUser

• **isAdminUser**: *Rule‹›* =  rule({ cache: 'contextual' })((parent, args, { user }) =>
    user && user.isAdmin ? true : errorMessages.s_adminPrivilegesRequired
)

*Defined in [src/permissions/rules.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L15)*

___

### `Const` isAuthenticatedUser

• **isAuthenticatedUser**: *Rule‹›* =  rule({ cache: 'contextual' })(async (parent, args, { user }) =>
    user ? true : errorMessages.s_loginRequired
)

*Defined in [src/permissions/rules.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L11)*

___

### `Const` keyDivider

• **keyDivider**: *":"* = ":"

*Defined in [src/constants/redis.c.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L5)*

___

### `Const` keyExists

• **keyExists**: *Rule‹›* =  rule({ cache: 'strict' })(async (parent, { key }, context) =>
    (await redisInstance.get(key)) !== undefined ? true : errorMessages.s_invalidCodeProvided
)

*Defined in [src/permissions/rules.ts:48](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/rules.ts#L48)*

___

### `Const` newsesCacheFragment

• **newsesCacheFragment**: *"
        fragment NewsWithAuthor on News {
            id
            title
            subtitle
            body
            imageURL
            featured
            expiration
            target
            status
            author { id }
        }
    "* =  `
        fragment NewsWithAuthor on News {
            id
            title
            subtitle
            body
            imageURL
            featured
            expiration
            target
            status
            author { id }
        }
    `

*Defined in [src/constants/fragments.c.ts:23](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/fragments.c.ts#L23)*

___

### `Const` newsesCacheKey

• **newsesCacheKey**: *string* =  'newsesCache' + keyDivider

*Defined in [src/constants/redis.c.ts:16](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L16)*

___

### `Const` permissions

• **permissions**: *IMiddlewareGenerator‹any, any, any›* =  shield(
    {
        Query: {
            me: rules.isAuthenticatedUser
        },
        Mutation: {
            signUpUser: and(validationRules.signUpValidationRule, rules.emailNotRegistered),
            login: rules.credentialsCheck,
            requestResetPassword: rules.emailRegistered,
            changePassword: and(validationRules.validNewPassword, rules.keyExists),
            // createGroupRequest: and(rules.isAuthenticatedUser, validationRules.groupRequestValidationRule),
            // approveGroupRequest: and(rules.isAdminUser, rules.groupRequestPending),
            // rejectGroupRequest: and(rules.isAdminUser, rules.groupRequestPending),
            createSpace: rules.isAdminUser,
            createVenue: rules.isAdminUser,
            createSocialNetwork: rules.isAdminUser,
            addAddress: rules.isAuthenticatedUser,
            updateAddress: rules.isAuthenticatedUser
        }
    },
    {
        allowExternalErrors: true
    }
)

*Defined in [src/permissions/index.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/index.ts#L6)*

___

### `Const` photon

• **photon**: *Photon‹›* =  new Photon()

*Defined in [src/helpers/core/context.handler.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/context.handler.ts#L11)*

*Defined in [src/helpers/core/photon.handler.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/photon.handler.ts#L3)*

___

### `Const` port

• **port**: *number* =  process.env.NODE_ENV !== 'test' ? parseInt(process.env.PORT || '4000', 10) : 5000

*Defined in [src/index.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/index.ts#L8)*

___

### `Const` preSchema

• **preSchema**: *object & object* =  makeSchema({
    types,
    // @ts-ignore
    plugins: [nexusPrismaPlugin()],
    outputs: {
        schema: path.join(__dirname, './schema.graphql'),
        typegen: path.join(__dirname, '../types/generated/nexus-typegen.ts')
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/photon',
                alias: 'photon'
            },
            {
                source: require.resolve('../types/context'),
                alias: 'Context'
            }
        ]
    },
    // Configure nullability of input arguments / output results
    nonNullDefaults: {
        input: true,
        output: true
    }
})

*Defined in [src/schema/index.ts:10](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/index.ts#L10)*

___

### `Const` redisClient

• **redisClient**: *RedisClient‹›* =  redis.createClient({
    url: process.env.REDIS_URL as string
})

*Defined in [src/helpers/cache/redis.handler.ts:10](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L10)*

___

### `Const` redisContextInstance

• **redisContextInstance**: *Redis‹›* =  new Redis(process.env.REDIS_URL as string)

*Defined in [src/helpers/cache/redis.handler.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L9)*

___

### `Const` redisInstance

• **redisInstance**: *Redis‹›* =  new Redis(process.env.REDIS_URL as string)

*Defined in [src/helpers/cache/redis.handler.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L8)*

___

### `Const` redisQueue

• **redisQueue**: *Queue‹any›* =  new Queue('redisQueue', process.env.REDIS_URL as string)

*Defined in [src/queue/index.ts:17](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/queue/index.ts#L17)*

___

### `Const` redisSessionPrefix

• **redisSessionPrefix**: *string* =  'sess' + keyDivider

*Defined in [src/constants/redis.c.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L9)*

___

### `Const` redisStore

• **redisStore**: *any* =  require('connect-redis')(session)

*Defined in [src/server/config/session.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/session.ts#L8)*

___

### `Const` removeKeyProcess

• **removeKeyProcess**: *Promise‹void›* =  redisQueue.process(
    'removeKey',
    async job => await removeKey.default(job)
    // require.resolve('./processors/remove-key.p')
)

*Defined in [src/queue/index.ts:29](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/queue/index.ts#L29)*

___

### `Const` resetPasswordPrefix

• **resetPasswordPrefix**: *string* =  'forgotPassword' + keyDivider

*Defined in [src/constants/redis.c.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L11)*

___

### `Const` schema

• **schema**: *GraphQLSchema‹› & object* =  applyMiddleware(preSchema, permissions)

*Defined in [src/schema/index.ts:38](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/schema/index.ts#L38)*

___

### `Const` secret

• **secret**: *string* =  (process.env.JWT_SECRET as string) || 'testSecret'

*Defined in [src/helpers/security/token.handler.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/token.handler.ts#L6)*

___

### `Const` server

• **server**: *ApolloServer‹›* =  new ApolloServer({
    schema,
    context,
    playground: true
})

*Defined in [src/server/config/apollo.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/apollo.ts#L6)*

___

### `Const` sess

• **sess**: *RequestHandler‹ParamsDictionary›* =  session({
    store: new redisStore({
        client: redisClient,
        prefix: redisSessionPrefix
    }),
    name: redisSessionName(),
    secret: (process.env.SESSION_SECRET as string) || 'testSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
})

*Defined in [src/server/config/session.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/session.ts#L11)*

___

### `Const` signUpValidationRule

• **signUpValidationRule**: *InputRule‹Shape‹object, object››* =  inputRule('signUpIputs')(yup =>
    yup.object().shape({
        email: yup
            .string()
            .min(3)
            .max(255)
            .email(errorMessages.s_invalidEmail),
        password: yup
            .string()
            .min(8, errorMessages.s_passwordTooShort)
            .max(100, errorMessages.s_passwordTooLong),
        firstname: yup
            .string()
            .min(2, errorMessages.s_firstnameTooShort)
            .max(100, errorMessages.s_firstnameTooLong),
        lastname: yup
            .string()
            .min(2, errorMessages.s_lastnameTooShort)
            .max(255, errorMessages.s_lastnameTooLong)
    })
)

*Defined in [src/permissions/validation.ts:7](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/validation.ts#L7)*

*Defined in [src/permissions/graphql.yup.ts:7](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/graphql.yup.ts#L7)*

___

### `Const` userSessionIdPrefix

• **userSessionIdPrefix**: *string* =  'userSids' + keyDivider

*Defined in [src/constants/redis.c.ts:10](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L10)*

___

### `Const` usersCacheFragment

• **usersCacheFragment**: *"
fragment UserCache on User {
    id
    email
    password
    isAdmin
    group
}
"* =  `
fragment UserCache on User {
    id
    email
    password
    isAdmin
    group
}
`

*Defined in [src/constants/fragments.c.ts:1](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/fragments.c.ts#L1)*

___

### `Const` usersCacheKey

• **usersCacheKey**: *string* =  'usersCache' + keyDivider

*Defined in [src/constants/redis.c.ts:14](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L14)*

___

### `Const` validNewPassword

• **validNewPassword**: *InputRule‹Shape‹object, object››* =  inputRule('newPasswordInput')(yup =>
    yup.object().shape({
        newPassword: yup
            .string()
            .min(8, errorMessages.s_passwordTooShort)
            .max(100, errorMessages.s_passwordTooLong)
    })
)

*Defined in [src/permissions/validation.ts:48](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/validation.ts#L48)*

*Defined in [src/permissions/graphql.yup.ts:48](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/permissions/graphql.yup.ts#L48)*

___

### `Const` voyager

• **voyager**: *function* =  express({ endpointUrl: 'http://localhost:4000/gql' })

*Defined in [src/server/config/voyager.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/voyager.ts#L3)*

#### Type declaration:

▸ (`_req`: any, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`_req` | any |
`res` | any |

___

### `Const` webHookMailgun

• **webHookMailgun**: *Router‹›* =  express.Router()

*Defined in [src/server/routes/mailgun.routes.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/routes/mailgun.routes.ts#L9)*

## Functions

###  addKeyValue

▸ **addKeyValue**(`key`: string, `value`: string): *Promise‹Job›*

*Defined in [src/helpers/cache/redis.handler.ts:37](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L37)*

Creates a queue job that adds a key/value to redis without expiration

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *Promise‹Job›*

the queue job created

___

###  addKeyValueSeconds

▸ **addKeyValueSeconds**(`key`: string, `value`: string, `seconds`: number): *Promise‹Job›*

*Defined in [src/helpers/cache/redis.handler.ts:23](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L23)*

Creates a queue job that adds a key/value to redis to live for the specified seconds

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | - |
`value` | string | - |
`seconds` | number | seconds for the value to live in the database |

**Returns:** *Promise‹Job›*

the queue job created

___

### `Const` context

▸ **context**(`__namedParameters`: object): *Promise‹[Context](globals.md#context)›*

*Defined in [src/helpers/core/context.handler.ts:32](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/context.handler.ts#L32)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`req` | Request‹› |

**Returns:** *Promise‹[Context](globals.md#context)›*

___

### `Const` contextAuth

▸ **contextAuth**(`__namedParameters`: object): *Promise‹[LoginPayload](globals.md#loginpayload) | null›*

*Defined in [src/helpers/core/context.handler.ts:26](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/context.handler.ts#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`headers` | IncomingHttpHeaders |
`session` | undefined &#124; Session |

**Returns:** *Promise‹[LoginPayload](globals.md#loginpayload) | null›*

___

###  createGroupRequest

▸ **createGroupRequest**(`userEmail`: string, `groupRequest`: undefined | null | "ESTUDIANTE" | "STAFF" | "GENERAL"): *Promise‹string›*

*Defined in [src/helpers/core/group.core.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/group.core.ts#L11)*

Creates a new group request by setting groupRequest's
user property to the one requested and notifies

**Parameters:**

Name | Type |
------ | ------ |
`userEmail` | string |
`groupRequest` | undefined &#124; null &#124; "ESTUDIANTE" &#124; "STAFF" &#124; "GENERAL" |

**Returns:** *Promise‹string›*

___

### `Const` decodeLoginToken

▸ **decodeLoginToken**(`token`: string | null): *[LoginPayload](globals.md#loginpayload) | null*

*Defined in [src/helpers/security/token.handler.ts:28](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/token.handler.ts#L28)*

Decode an authorization login token

**Parameters:**

Name | Type |
------ | ------ |
`token` | string &#124; null |

**Returns:** *[LoginPayload](globals.md#loginpayload) | null*

{ id, isAdmin, group, email } | formatted AAxError

___

###  decryptString

▸ **decryptString**(`encrypted`: string): *string*

*Defined in [src/helpers/security/crypto.handler.ts:21](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/crypto.handler.ts#L21)*

Decrypts a string encrypted by the system

**Parameters:**

Name | Type |
------ | ------ |
`encrypted` | string |

**Returns:** *string*

the original string

___

###  default

▸ **default**(`job`: Job): *Promise‹number›*

*Defined in [src/queue/processors/remove-key.p.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/queue/processors/remove-key.p.ts#L3)*

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`job` | Job |

**Returns:** *Promise‹number›*

___

###  encryptString

▸ **encryptString**(`data`: string): *string*

*Defined in [src/helpers/security/crypto.handler.ts:12](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/crypto.handler.ts#L12)*

Entcrypt a string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | the string to encrypt |

**Returns:** *string*

the encrypted string

___

###  errorHandlingMiddleware

▸ **errorHandlingMiddleware**(`err`: Error, `req`: Request, `res`: Response, `next`: NextFunction): *void*

*Defined in [src/server/middleware/errorhandler.mw.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/middleware/errorhandler.mw.ts#L15)*

Express middleware function to resolve route errors. It uses AAxError class to fill up an html template that displays the error to the user in the requested route

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | Error | Custom error class |
`req` | Request | Express request object |
`res` | Response | Express response object |
`next` | NextFunction | Express next function  |

**Returns:** *void*

___

### `Const` fileUploadMiddleware

▸ **fileUploadMiddleware**(`uploadsConfig`: FileUploadOptions, `server`: ApolloServerBase): *(Anonymous function)*

Defined in node_modules/apollo-server-express/src/ApolloServer.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`uploadsConfig` | FileUploadOptions |
`server` | ApolloServerBase |

**Returns:** *(Anonymous function)*

___

### `Const` formatYupError

▸ **formatYupError**(`err`: ValidationError‹›): *string*

*Defined in [src/helpers/system/error.handler.ts:41](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/system/error.handler.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`err` | ValidationError‹› |

**Returns:** *string*

___

### `Const` generateLoginToken

▸ **generateLoginToken**(`loginPayload`: [LoginPayload](globals.md#loginpayload)): *string | null*

*Defined in [src/helpers/security/token.handler.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/token.handler.ts#L13)*

Generates a login authorization token

**Parameters:**

Name | Type |
------ | ------ |
`loginPayload` | [LoginPayload](globals.md#loginpayload) |

**Returns:** *string | null*

the token string

___

### `Const` generateResetPasswordKey

▸ **generateResetPasswordKey**(): *string*

*Defined in [src/constants/redis.c.ts:24](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L24)*

**Returns:** *string*

___

### `Const` generateVerificationKey

▸ **generateVerificationKey**(): *string*

*Defined in [src/constants/redis.c.ts:23](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L23)*

**Returns:** *string*

___

### `Const` getKeyNature

▸ **getKeyNature**(`key`: string): *string*

*Defined in [src/constants/redis.c.ts:26](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

### `Const` getManyUsers

▸ **getManyUsers**(`where`: UserWhereInput): *function*

*Defined in [src/helpers/core/photon.handler.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/photon.handler.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`where` | UserWhereInput |

**Returns:** *function*

▸ (`select`: UserSelect): *Promise‹Array‹[User](globals.md#const-user)››*

**Parameters:**

Name | Type |
------ | ------ |
`select` | UserSelect |

___

###  graphqlExpress

▸ **graphqlExpress**(`options`: GraphQLOptions | [ExpressGraphQLOptionsFunction](interfaces/expressgraphqloptionsfunction.md)): *express.Handler*

Defined in node_modules/apollo-server-express/src/expressApollo.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`options` | GraphQLOptions &#124; [ExpressGraphQLOptionsFunction](interfaces/expressgraphqloptionsfunction.md) |

**Returns:** *express.Handler*

___

### `Const` hbs2precompiled

▸ **hbs2precompiled**(`hbs`: string): *function*

*Defined in [src/helpers/email/template.handler.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/template.handler.ts#L11)*

Render html from hbs string using provided context variables

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hbs` | string | handlebars template string |

**Returns:** *function*

a Promise that resolves to the rendered html string

▸ <**T**>(`ctx`: T): *string*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | T |

___

### `Const` newError

▸ **newError**(`message`: string, `userMessage`: string): *[AAxError](interfaces/aaxerror.md)*

*Defined in [src/helpers/system/error.handler.ts:17](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/system/error.handler.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`userMessage` | string |

**Returns:** *[AAxError](interfaces/aaxerror.md)*

___

### `Const` normalizeToArray

▸ **normalizeToArray**(...`arrayOrAnything`: any | any[]): *any[]*

*Defined in [src/helpers/util/array.handler.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/util/array.handler.ts#L9)*

Normalize all arguments received into an array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...arrayOrAnything` | any &#124; any[] | the argument to normalize |

**Returns:** *any[]*

if array is provided returns a shallow copy, otherwise returns the argument into an array or an empty array if argument is null or undefined

___

###  processEncryptedEmail

▸ **processEncryptedEmail**(`encryptedEmail`: string): *string | null*

*Defined in [src/helpers/security/crypto.handler.ts:31](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/security/crypto.handler.ts#L31)*

Decrypts a string and return the decrypted string if it is an email address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`encryptedEmail` | string | an email address or an encrypted email address |

**Returns:** *string | null*

returns and email address or null if the decrypted string is not and emai address

___

###  processGroupRequest

▸ **processGroupRequest**(`action`: "approve" | "reject", `emailOrUserSignature`: string, `emailOrAdminSignature`: string): *Promise‹string›*

*Defined in [src/helpers/core/group.core.ts:27](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/group.core.ts#L27)*

Process (approve or reject) a Group Request if exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | "approve" &#124; "reject" | the action to process the group request |
`emailOrUserSignature` | string | the email address (or encrypted email address) of the requestee |
`emailOrAdminSignature` | string | the email address (or encrypted email address) of the admin processing the request |

**Returns:** *Promise‹string›*

returns 'done' if no errors

___

### `Const` readFile

▸ **readFile**(`filePath`: string): *Promise‹string›*

*Defined in [src/helpers/system/file.handler.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/system/file.handler.ts#L9)*

Returns the contents of a file as utf8 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |

**Returns:** *Promise‹string›*

utf8 string

___

### `Const` redisSessionName

▸ **redisSessionName**(): *string*

*Defined in [src/constants/redis.c.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L8)*

**Returns:** *string*

___

###  removeKey

▸ **removeKey**(`key`: string): *Promise‹Job›*

*Defined in [src/helpers/cache/redis.handler.ts:46](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L46)*

Creates a queue job to remove a key if exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the key to remove |

**Returns:** *Promise‹Job›*

the queue job created

___

### `Const` resolveAuthToken

▸ **resolveAuthToken**(`headers`: IncomingHttpHeaders): *Promise‹[LoginPayload](globals.md#loginpayload) | null›*

*Defined in [src/helpers/core/context.handler.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/context.handler.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | IncomingHttpHeaders |

**Returns:** *Promise‹[LoginPayload](globals.md#loginpayload) | null›*

___

### `Const` resolveDeviceToken

▸ **resolveDeviceToken**(`headers`: IncomingHttpHeaders): *Promise‹[LoginPayload](globals.md#loginpayload) | null›*

*Defined in [src/helpers/core/context.handler.ts:19](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/context.handler.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | IncomingHttpHeaders |

**Returns:** *Promise‹[LoginPayload](globals.md#loginpayload) | null›*

___

### `Const` rf

▸ **rf**(`path`: string): *string*

*Defined in [src/helpers/email/template.handler.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/template.handler.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

### `Const` sendEmail

▸ **sendEmail**<**T**>(`to`: string | string[], `subject`: string, `text`: string, `templateFileName?`: string | null, `context?`: T): *Promise‹object›*

*Defined in [src/helpers/email/email.handler.ts:26](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/email.handler.ts#L26)*

Send a transactional email from info@alicialonso.org

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | string &#124; string[] | recipient or recipients array addresses receiving the email |
`subject` | string | subject text |
`text` | string | text message to fallback when html is not provided or unabled to be rendered |
`templateFileName?` | string &#124; null | - |
`context?` | T | - |

**Returns:** *Promise‹object›*

___

###  sendQueuedEmail

▸ **sendQueuedEmail**<**C**, **D**>(`emailArgs`: [EmailArgs](globals.md#emailargs)‹C, D›): *Promise‹Job›*

*Defined in [src/helpers/email/email.handler.ts:66](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/email/email.handler.ts#L66)*

Creates a queue job to send email

**Type parameters:**

▪ **C**

▪ **D**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailArgs` | [EmailArgs](globals.md#emailargs)‹C, D› | email arguments object: { to, subject, text,   } |

**Returns:** *Promise‹Job›*

the queue job created

___

### `Const` setContextShieldCache

▸ **setContextShieldCache**<**T**>(`context`: [Context](globals.md#context)): *(Anonymous function)*

*Defined in [src/helpers/core/context.handler.ts:42](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/context.handler.ts#L42)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Context](globals.md#context) |

**Returns:** *(Anonymous function)*

___

###  setPasswordResetKey

▸ **setPasswordResetKey**(`key`: string, `email`: string): *Promise‹string›*

*Defined in [src/helpers/cache/redis.handler.ts:68](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L68)*

Sets a reset password key immediately

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`email` | string |

**Returns:** *Promise‹string›*

___

###  setVerificationKey

▸ **setVerificationKey**(`key`: string, `email`: string): *Promise‹string›*

*Defined in [src/helpers/cache/redis.handler.ts:58](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/cache/redis.handler.ts#L58)*

Sets an email verification key immediately

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`email` | string |

**Returns:** *Promise‹string›*

___

### `Const` userCredentialsCheck

▸ **userCredentialsCheck**(`p`: string, `u`: [UserCredentials](globals.md#usercredentials)): *function*

*Defined in [src/helpers/core/conditions.handler.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/helpers/core/conditions.handler.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`u` | [UserCredentials](globals.md#usercredentials) |

**Returns:** *function*

▸ (`arg`: string): *boolean | string*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string |

## Object literals

### `Const` cors

### ▪ **cors**: *object*

*Defined in [src/server/config/cors.ts:1](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/cors.ts#L1)*

###  credentials

• **credentials**: *boolean* = true

*Defined in [src/server/config/cors.ts:12](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/cors.ts#L12)*

###  optionsSuccessStatus

• **optionsSuccessStatus**: *number* = 200

*Defined in [src/server/config/cors.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/cors.ts#L13)*

###  origin

• **origin**: *string[]* =  [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:8000/',
        'http://localhost',
        'https://aaxadmin.netlify.com',
        'https://admin.alicialonso.org',
        'https://alicialonso.org',
        'https://congreso.alicialonso.org'
    ]

*Defined in [src/server/config/cors.ts:2](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/server/config/cors.ts#L2)*

___

### `Const` errorMessages

### ▪ **errorMessages**: *object*

*Defined in [src/constants/errorMessages.c.ts:1](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L1)*

###  d_groupRequestProcessFailed

• **d_groupRequestProcessFailed**: *string* =  `ha ocurrido un error al procesar tu solicitud de grupo, por favor inténtelo más tarde o contacte con el administrador enviando un email a ${process.env.RECIPIENT_WEBMASTER}`

*Defined in [src/constants/errorMessages.c.ts:23](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L23)*

###  g_UnknownServerError

• **g_UnknownServerError**: *string* = "ha ocurrido un error en el servidor"

*Defined in [src/constants/errorMessages.c.ts:2](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L2)*

###  s_adminPrivilegesRequired

• **s_adminPrivilegesRequired**: *string* = "lo que ha intentado requiere permisos de administrador"

*Defined in [src/constants/errorMessages.c.ts:4](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L4)*

###  s_firstnameTooLong

• **s_firstnameTooLong**: *string* = "su nombre no puede exceder los 100 caracteres"

*Defined in [src/constants/errorMessages.c.ts:18](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L18)*

###  s_firstnameTooShort

• **s_firstnameTooShort**: *string* = "su nombre debe tener dos o más caracteres"

*Defined in [src/constants/errorMessages.c.ts:17](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L17)*

###  s_groupRequestNotFound

• **s_groupRequestNotFound**: *string* = "la solicitud de grupo no existe o ya ha sido procesada por otro administrador"

*Defined in [src/constants/errorMessages.c.ts:22](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L22)*

###  s_groupRequestNotNeeded

• **s_groupRequestNotNeeded**: *string* = "el grupo especificado no necesita solicitud"

*Defined in [src/constants/errorMessages.c.ts:21](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L21)*

###  s_invalidCodeExpired

• **s_invalidCodeExpired**: *string* = "el código proporcionado ha caducado"

*Defined in [src/constants/errorMessages.c.ts:8](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L8)*

###  s_invalidCodeProvided

• **s_invalidCodeProvided**: *string* = "el código proporcionado no es válido"

*Defined in [src/constants/errorMessages.c.ts:7](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L7)*

###  s_invalidEmail

• **s_invalidEmail**: *string* = "debe introducir una dirección de email válida"

*Defined in [src/constants/errorMessages.c.ts:14](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L14)*

###  s_lastnameTooLong

• **s_lastnameTooLong**: *string* = "sus apellidos no pueden exceder de 255 caracteres"

*Defined in [src/constants/errorMessages.c.ts:20](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L20)*

###  s_lastnameTooShort

• **s_lastnameTooShort**: *string* = "sus apellidos en conjunto deben tener más de dos caracteres"

*Defined in [src/constants/errorMessages.c.ts:19](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L19)*

###  s_loginRequired

• **s_loginRequired**: *string* = "lo que ha intentado requiere que inicie sesión"

*Defined in [src/constants/errorMessages.c.ts:3](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L3)*

###  s_passwordTooLong

• **s_passwordTooLong**: *string* = "la contraseña no puede superar los 100 caracteres"

*Defined in [src/constants/errorMessages.c.ts:16](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L16)*

###  s_passwordTooShort

• **s_passwordTooShort**: *string* = "la contraseña debe contener más de 8 caracteres"

*Defined in [src/constants/errorMessages.c.ts:15](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L15)*

###  d_accountLocked

▸ **d_accountLocked**(`email`: string): *string*

*Defined in [src/constants/errorMessages.c.ts:9](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *string*

###  d_emailAlreadyRegistered

▸ **d_emailAlreadyRegistered**(`email`: string): *string*

*Defined in [src/constants/errorMessages.c.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *string*

###  d_emailNotRegistered

▸ **d_emailNotRegistered**(`email`: string): *string*

*Defined in [src/constants/errorMessages.c.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *string*

###  d_emailNotVerified

▸ **d_emailNotVerified**(`email`: string): *string*

*Defined in [src/constants/errorMessages.c.ts:11](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *string*

###  d_errorSendingEmailTo

▸ **d_errorSendingEmailTo**(`email`: string): *string*

*Defined in [src/constants/errorMessages.c.ts:10](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *string*

###  s_passwordMismatch

▸ **s_passwordMismatch**(`email`: string): *string*

*Defined in [src/constants/errorMessages.c.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/errorMessages.c.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *string*

___

### `Const` keyExpiration

### ▪ **keyExpiration**: *object*

*Defined in [src/constants/redis.c.ts:18](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L18)*

###  emailVerification

• **emailVerification**: *number* =  moment.duration({ days: 2 }).asSeconds()

*Defined in [src/constants/redis.c.ts:19](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L19)*

###  resetPassword

• **resetPassword**: *number* =  moment.duration({ days: 1 }).asSeconds()

*Defined in [src/constants/redis.c.ts:20](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/redis.c.ts#L20)*

___

### `Const` links

### ▪ **links**: *object*

*Defined in [src/constants/links.c.ts:4](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/links.c.ts#L4)*

###  approveGroupRequest

▸ **approveGroupRequest**(`userEmail`: string, `adminEmail`: string): *string*

*Defined in [src/constants/links.c.ts:6](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/links.c.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`userEmail` | string |
`adminEmail` | string |

**Returns:** *string*

###  emailVerification

▸ **emailVerification**(`key`: string): *string*

*Defined in [src/constants/links.c.ts:5](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/links.c.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

###  rejectGroupRequest

▸ **rejectGroupRequest**(`userEmail`: string, `adminEmail`: string): *string*

*Defined in [src/constants/links.c.ts:10](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/links.c.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`userEmail` | string |
`adminEmail` | string |

**Returns:** *string*

###  resetPassword

▸ **resetPassword**(`key`: string): *string*

*Defined in [src/constants/links.c.ts:14](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/constants/links.c.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*
