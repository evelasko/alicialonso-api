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
    const { key } = job.data
    await redisInstance.del(key)
}
