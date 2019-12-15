require("ts-node/register");
// import { terminateRedisClient } from '../../src/helpers'
const redisClient = require('../../src/helpers').redisClient
module.exports = async function() {
   function quit () { 
      return new Promise(function (resolve, reject) {
         redisClient.quit((n) => {
            if (n instanceof Error) {
               reject(n)
            } else {
               resolve(n || 'Ok')
            }
         })
      })
   }
   const c = await quit()
   console.log(c)
   // global.stopServer()
}