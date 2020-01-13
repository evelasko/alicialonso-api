/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */
// @ts-ignore

require('module-alias').addAliases({
    '@constants': __dirname + '/constants',
    '@helpers': __dirname + '/helpers',
    '@permissions': __dirname + '/permissions',
    '@queue': __dirname + '/queue',
    '@schema': __dirname + '/schema',
    '@server': __dirname + '/server',
    '@aatypes': __dirname + '/types'
})

import app from './server'

const port = process.env.NODE_ENV !== 'test' ? parseInt(process.env.PORT || '4000', 10) : 5000
app.listen({ port }, () => {
    console.log('サーバ 💃 alicialonso@:', port || 4000)
})
