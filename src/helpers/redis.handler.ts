import { Job } from 'bull'
import { redisQueue } from '@queue'
import { redisInstance } from '@libs'
import { keyExpiration } from '@constants'

// FUNCTIONS PROCESSED BY QUEUE JOBS

/**
 * Creates a queue job that adds a key/value to redis to live for the specified seconds
 * @param {string} key
 * @param {string} value
 * @param {number} seconds seconds for the value to live in the database
 * @return {Promise<Job>} the queue job created
 */
export async function addKeyValueSeconds(key: string, value: string, seconds: number): Promise<Job> {
    return redisQueue.add('addKeyValueSeconds', { key, value, seconds })
}

/**
 * Creates a queue job that adds a key/value to redis without expiration
 * @param {string} key
 * @param {string} value
 * @return {Promise<Job>} the queue job created
 */
export async function addKeyValue(key: string, value: string): Promise<Job> {
    return redisQueue.add('addKeyValue', { key, value })
}

/**
 * Creates a queue job to remove a key if exists
 * @param {string} key the key to remove
 * @return {Promise<Job>} the queue job created
 */
export async function removeKey(key: string): Promise<Job> {
    return redisQueue.add('removeKey', { key })
}

// FUNCTIONS TO BE CALLED INSIDE QUEUE PROCESSORS

/**
 * Sets an email verification key immediately
 * @param {string} key
 * @param {string} email
 * @return {Promise<void>}
 */
export async function setVerificationKey(key: string, email: string): Promise<void> {
    await redisInstance.set(key, email, 'ex', keyExpiration.emailVerification)
}

/**
 * Sets a reset password key immediately
 * @param {string} key
 * @param {string} email
 * @return {Promise<void>}
 */
export async function setPasswordResetKey(key: string, email: string): Promise<void> {
    await redisInstance.set(key, email, 'ex', keyExpiration.resetPassword)
}
