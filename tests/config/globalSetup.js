/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node/register')
// const util = require('util')
const detect = require('detect-port')
const child_process = require('child_process')
// const exec = util.promisify(require('child_process').exec)
const { execSync } = require('child_process')
const server = require('../../src/server').default
const { options } = require('../../src')

// function seedSync() {
//     return execSync('prisma seed -e ./env/test.env --reset')
// }

module.exports = async function() {
    seedSync()

    // start the server if the port is available
    const port = 5000
    await detect(port, _port => {
        if (port === _port) {
            server.start(options)
        }
    })

    // start ultrahook for mailgun webhook responses
    // mapping requests from mailgun.alicialonso.ultrahook.com
    // to http://localhost:${port}/wh/mailgun/
    // and return a ChildProcess instance that implements the
    // EventEmitter API allowing the parent process to register listener functions
    // that are called when certain events occur during the life cycle
    // of the child process

    global.mailgunUltrahook = child_process.exec(
        `ultrahook -k ${process.env.ULTRAHOOK_API_KEY} mailgun http://localhost:${port}/wh/mailgun/`,
        (error, stdout, stderr) => {
            // console.log('UH: ', stdout)
        }
    )

    global.seedSync = seedSync
    return null
}
