import Queue from 'bull'
import * as notifyNewGroupRequest from './processors/notify-new-group-request.p'
import * as sendEmailProcessor from './processors/send-email.p'
import * as notifyAdmins from './processors/notify-admins.p'
import * as sendVerificationEmail from './processors/send-verification-email.p'
import * as addKeyValue from './processors/add-key-value.p'
import * as addKeyValueSeconds from './processors/add-vey-value-seconds.p'
import * as removeKey from './processors/remove-key.p'
import * as sendPasswordResetEmail from './processors/send-password-reset-email.p'

/**
 * emailQueue processes:
 * ```
 * 'sendEmail'
 * 'sendVerificationEmail'
 * 'sendPasswordResetEmail'
 * 'notifyAdmins'
 * 'notifyNewGroupRequest'
 * ```
 */
export const emailQueue = new Queue('emailQueue', process.env.REDIS_URL as string)

// TODO check if possible to direct runtime to the resolve expression in any environment except test
emailQueue.process(
    'sendEmail',
    async job => {
        await sendEmailProcessor.default(job)
    }
    // require.resolve('./processors/send-email.p.js')
)
emailQueue.process(
    'sendVerificationEmail',
    async job => {
        await sendVerificationEmail.default(job)
    }
    // require.resolve('./processors/send-verification-email.p')
)
emailQueue.process(
    'sendPasswordResetEmail',
    async job => {
        await sendPasswordResetEmail.default(job)
    }
    // require.resolve('./processors/send-password-reset-email.p')
)
emailQueue.process(
    'notifyAdmins',
    async job => {
        await notifyAdmins.default(job)
    }
    // require.resolve('./processors/notify-admins.p')
)
emailQueue.process(
    'notifyNewGroupRequest',
    async job => {
        await notifyNewGroupRequest.default(job)
    }
    // require.resolve('./processors/notify-new-group-request.p')
)

/**
 * redis Queue processes:
 * ```
 * 'addKeyValue'
 * 'addKeyValueSeconds'
 * 'removeKey'
 * ```
 */
export const redisQueue = new Queue('redisQueue', process.env.REDIS_URL as string)

redisQueue.process(
    'addKeyValue',
    async job => {
        await addKeyValue.default(job)
    }
    // require.resolve('./processors/add-key-value.p')
)
redisQueue.process(
    'addKeyValueSeconds',
    async job => {
        await addKeyValueSeconds.default(job)
    }
    // require.resolve('./processors/add-key-value-seconds.p')
)
redisQueue.process(
    'removeKey',
    async job => {
        await removeKey.default(job)
    }
    // require.resolve('./processors/remove-key.p')
)
