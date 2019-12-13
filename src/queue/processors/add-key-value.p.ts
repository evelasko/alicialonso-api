import { Job } from 'bull'

import { redisInstance } from '../../helpers'

// TODO JSDoc
/**
 * Creates a queue job that adds a key/value to redis database
 * @param {Job} job requires key:string and value:string in the data property of the job
 * @return {Promise<string>}
 */
export default async ({ data: { key, value } }: Job): Promise<string> => await redisInstance.set(key, value)
