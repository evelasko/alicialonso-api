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
export default async ({ data: { key, value, seconds } }: Job): Promise<string> =>
    await redisInstance.set(key, value, 'ex', seconds || 60 * 60 * 24)
