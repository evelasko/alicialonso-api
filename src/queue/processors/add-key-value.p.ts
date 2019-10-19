import { Job } from 'bull'
import { redisInstance } from '../../libs'

// TODO JSDoc
/**
 *
 *
 * @export
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<void> {
    const { key, value } = job.data
    await redisInstance.set(key, value)
}
