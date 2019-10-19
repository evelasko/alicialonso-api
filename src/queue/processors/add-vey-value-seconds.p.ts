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
    const { key, value, seconds } = job.data
    await redisInstance.set(key, value, 'ex', seconds || 60 * 60 * 24)
}
