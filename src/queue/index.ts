import Queue from 'bull'

import * as addKeyValue from './processors/add-key-value.p'
import * as addKeyValueSeconds from './processors/add-vey-value-seconds.p'
import * as removeKey from './processors/remove-key.p'
import * as sendEmailProcessor from './processors/send-email.p'

export const emailQueue = new Queue('emailQueue', process.env.REDIS_QUEUE_URL as string)

// TODO check if possible to direct runtime to the resolve expression in any environment except test
export const sendEmail = emailQueue.process(
    'sendEmail',
    async job => await sendEmailProcessor.default(job)
    // require.resolve('./processors/send-email.p')
)

export const redisQueue = new Queue('redisQueue', process.env.REDIS_URL as string)

export const addKeyValueProcess = redisQueue.process(
    'addKeyValue',
    async job => await addKeyValue.default(job)
    // require.resolve('./processors/add-key-value.p')
)
export const addKeyValueSecondsProcess = redisQueue.process(
    'addKeyValueSeconds',
    async job => await addKeyValueSeconds.default(job)
    // require.resolve('./processors/add-key-value-seconds.p')
)
export const removeKeyProcess = redisQueue.process(
    'removeKey',
    async job => await removeKey.default(job)
    // require.resolve('./processors/remove-key.p')
)
