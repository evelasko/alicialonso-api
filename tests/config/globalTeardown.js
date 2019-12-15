require("ts-node/register");
const redisClient = require('../../src/helpers').redisClient
module.exports = async function() {
   redisClient.end(true)
   redisClient.quit(() => console.log('session client closed'))
   // global.stopServer()
}