/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */

require('ts-node/register')
const path = require('path')
const moduleAlias = require('module-alias')

moduleAlias.addAliases({
    '@helpers'  : path.join(__dirname, '../../src/helpers'),
    '@constants'  : path.join(__dirname, '../../src/constants'),
    '@libs'  : path.join(__dirname, '../../src/libs'),
    '@permissions'  : path.join(__dirname, '../../src/permissions'),
    '@queue'  : path.join(__dirname, '../../src/queue'),
    '@schema'  : path.join(__dirname, '../../src/schema'),
    '@server'  : path.join(__dirname, '../../src/server'),
    '@aatypes'  : path.join(__dirname, '../../src/types'),
    '@core'  : path.join(__dirname, '../../src/core'),
})

const startTestServer = require('../config/testServer').default
const resetAndSeed = require('./testDb').default
const child_process = require('child_process')

module.exports = async function() {

    // global.stopServer = await startTestServer()
    // global.testData = await resetAndSeed()
    // start ultrahook for mailgun webhook responses
    // mapping requests from mailgun.alicialonso.ultrahook.com
    // to http://localhost:${port}/wh/mailgun/
    // and return a ChildProcess instance that implements the
    // EventEmitter API allowing the parent process to register listener functions
    // that are called when certain events occur during the life cycle
    // of the child process

    // global.mailgunUltrahook = child_process.exec(
    //     `ultrahook -k ${process.env.ULTRAHOOK_API_KEY} mailgun http://localhost:4000/wh/mailgun/`,
    //     (error, stdout, stderr) => {
    //         // console.log('UH: ', stdout)
    //     }
    // )
    return null
}
