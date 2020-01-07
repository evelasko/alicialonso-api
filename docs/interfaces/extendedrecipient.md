[alicialonso-api](../README.md) › [Globals](../globals.md) › [ExtendedRecipient](extendedrecipient.md)

# Interface: ExtendedRecipient

## Hierarchy

* Options

  ↳ **ExtendedRecipient**

## Index

### Properties

* [alternatives](extendedrecipient.md#optional-alternatives)
* [amp](extendedrecipient.md#optional-amp)
* [attachments](extendedrecipient.md#optional-attachments)
* [bcc](extendedrecipient.md#optional-bcc)
* [cc](extendedrecipient.md#optional-cc)
* [date](extendedrecipient.md#optional-date)
* [disableFileAccess](extendedrecipient.md#optional-disablefileaccess)
* [disableUrlAccess](extendedrecipient.md#optional-disableurlaccess)
* [dkim](extendedrecipient.md#optional-dkim)
* [encoding](extendedrecipient.md#optional-encoding)
* [envelope](extendedrecipient.md#optional-envelope)
* [from](extendedrecipient.md#optional-from)
* [headers](extendedrecipient.md#optional-headers)
* [html](extendedrecipient.md#optional-html)
* [icalEvent](extendedrecipient.md#optional-icalevent)
* [inReplyTo](extendedrecipient.md#optional-inreplyto)
* [list](extendedrecipient.md#optional-list)
* [messageId](extendedrecipient.md#optional-messageid)
* [priority](extendedrecipient.md#optional-priority)
* [raw](extendedrecipient.md#optional-raw)
* [references](extendedrecipient.md#optional-references)
* [replyTo](extendedrecipient.md#optional-replyto)
* [sender](extendedrecipient.md#optional-sender)
* [subject](extendedrecipient.md#optional-subject)
* [template](extendedrecipient.md#template)
* [text](extendedrecipient.md#optional-text)
* [textEncoding](extendedrecipient.md#optional-textencoding)
* [to](extendedrecipient.md#optional-to)
* [watchHtml](extendedrecipient.md#optional-watchhtml)

### Methods

* [normalizeHeaderKey](extendedrecipient.md#optional-normalizeheaderkey)

## Properties

### `Optional` alternatives

• **alternatives**? : *Attachment[]*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:132

An array of alternative text contents (in addition to text and html parts)

___

### `Optional` amp

• **amp**? : *string | Buffer | Readable | AmpAttachment*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:122

AMP4EMAIL specific HTML version of the message, same usage as with text and html. Make sure it is a full and valid AMP4EMAIL document, otherwise the displaying email client falls back to html and ignores the amp part

___

### `Optional` attachments

• **attachments**? : *Attachment[]*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:130

An array of attachment objects

___

### `Optional` bcc

• **bcc**? : *string | Address | Array‹string | Address›*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:106

Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field

___

### `Optional` cc

• **cc**? : *string | Address | Array‹string | Address›*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:104

Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field

___

### `Optional` date

• **date**? : *Date | string*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:138

optional Date value, current UTC string will be used if not set

___

### `Optional` disableFileAccess

• **disableFileAccess**? : *undefined | false | true*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:148

if set to true then fails with an error when a node tries to load content from a file

___

### `Optional` disableUrlAccess

• **disableUrlAccess**? : *undefined | false | true*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:146

if set to true then fails with an error when a node tries to load content from URL

___

### `Optional` dkim

• **dkim**? : *DKIM.Options*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:150

is an object with DKIM options

___

### `Optional` encoding

• **encoding**? : *undefined | string*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:140

optional transfer encoding for the textual parts

___

### `Optional` envelope

• **envelope**? : *Envelope | Envelope*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:134

optional SMTP envelope, if auto generated envelope is not suitable

___

### `Optional` from

• **from**? : *string | Address*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:98

The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>'

___

### `Optional` headers

• **headers**? : *Headers*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:126

An object or array of additional header fields

___

### `Optional` html

• **html**? : *string | Buffer | Readable | AttachmentLike*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:118

The HTML version of the message

___

### `Optional` icalEvent

• **icalEvent**? : *string | Buffer | Readable | IcalAttachment*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:124

iCalendar event, same usage as with text and html. Event method attribute defaults to ‘PUBLISH’ or define it yourself: {method: 'REQUEST', content: iCalString}. This value is added as an additional alternative to html or text. Only utf-8 content is allowed

___

### `Optional` inReplyTo

• **inReplyTo**? : *string | Address*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:110

The message-id this message is replying

___

### `Optional` list

• **list**? : *ListHeaders*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:128

An object where key names are converted into list headers. List key help becomes List-Help header etc.

___

### `Optional` messageId

• **messageId**? : *undefined | string*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:136

optional Message-Id value, random value will be generated if not set

___

### `Optional` priority

• **priority**? : *"high" | "normal" | "low"*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:153

___

### `Optional` raw

• **raw**? : *string | Buffer | Readable | AttachmentLike*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:142

if set then overwrites entire message output with this value. The value is not parsed, so you should still set address headers or the envelope value for the message to work

___

### `Optional` references

• **references**? : *string | string[]*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:112

Message-id list (an array or space separated string)

___

### `Optional` replyTo

• **replyTo**? : *string | Address*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:108

An e-mail address that will appear on the Reply-To: field

___

### `Optional` sender

• **sender**? : *string | Address*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:100

An e-mail address that will appear on the Sender: field

___

### `Optional` subject

• **subject**? : *undefined | string*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:114

The subject of the e-mail

___

###  template

• **template**: *string*

*Defined in [src/types/email.ts:13](https://github.com/evelasko/alicialonso-api/blob/aa81f4a/src/types/email.ts#L13)*

___

### `Optional` text

• **text**? : *string | Buffer | Readable | AttachmentLike*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:116

The plaintext version of the message

___

### `Optional` textEncoding

• **textEncoding**? : *TextEncoding*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:144

set explicitly which encoding to use for text parts (quoted-printable or base64). If not set then encoding is detected from text content (mostly ascii means quoted-printable, otherwise base64)

___

### `Optional` to

• **to**? : *string | Address | Array‹string | Address›*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:102

Comma separated list or an array of recipients e-mail addresses that will appear on the To: field

___

### `Optional` watchHtml

• **watchHtml**? : *string | Buffer | Readable | AttachmentLike*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:120

Apple Watch specific HTML version of the message, same usage as with text and html

## Methods

### `Optional` normalizeHeaderKey

▸ **normalizeHeaderKey**(`key`: string): *string*

*Inherited from void*

Defined in node_modules/@types/nodemailer/lib/mailer/index.d.ts:152

method to normalize header keys for custom caseing

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*
