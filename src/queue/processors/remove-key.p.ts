import { Job } from 'bull'

import { redisInstance } from '../../helpers'

// TODO JSDoc
/**
 *
 *
 * @export
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<number> {
    const { key } = job.data
    return await redisInstance.del(key)
}
