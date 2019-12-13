import { v4 } from 'uuid'

import { sendQueuedEmail } from '@helpers'

import { emailQueue } from '../../src/queue'

const to = 'webmaster@alicialonso.org'
const subject = 'email from queue testing'
const text = 'Lorem ipsum dolor et'

it('should add a queue job with sendQueuedEmail', async () => {
    const job = await sendQueuedEmail({ to, subject, text })
    const addedJob = await emailQueue.getJob(job.id)
    expect(addedJob).toBeTruthy()
    expect(addedJob && addedJob.id).toBe(job.id)
})

