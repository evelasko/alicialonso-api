import { Job } from 'bull'
import { redisInstance } from '../../libs'

// TODO JSDoc
/**
 * Creates a queue job that adds a key/value to redis database
 * @param {Job} job requires key:string and value:string in the data property of the job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<void> {
    const { key, value } = job.data
    await redisInstance.set(key, value)
}
