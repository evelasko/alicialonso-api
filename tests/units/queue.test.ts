import { v4 } from 'uuid'
import {
    notifyAdmins,
    notifyNewGroupRequest,
    sendQueuedEmail,
    aaxEvents,
    sendVerificationEmail
} from '../../src/helpers'
import { emailQueue } from '../../src/queue'
import { emails } from '../config/testData'

const status: string[] = []

beforeAll(() => {
    aaxEvents.on('mailgunevent', (event, recipient, severity) => {
        status.push(event as string)
        console.log('EVENT: ', event)
    })
})

afterAll(() => {
    // console.log('STATUS: ', status)
})

const to = 'webmaster@alicialonso.org'
const subject = 'email from queue testing'
const text = 'Lorem ipsum dolor et'

it('should add a queue job with sendQueuedEmail', async () => {
    const job = await sendQueuedEmail({ to, subject, text })
    const addedJob = await emailQueue.getJob(job.id)
    expect(addedJob).toBeTruthy()
    expect(addedJob && addedJob.id).toBe(job.id)
    status.push(job.id.toString())
})

test('should add a queue job with sendVerificationEmail', async () => {
    const job = await sendVerificationEmail(to, v4())
    const addedJob = await emailQueue.getJob(job.id)
    expect(addedJob).toBeTruthy()
    expect(addedJob && addedJob.id).toBe(job.id)
    status.push(job.id.toString())
})

test('should add a queue job with notifyAdmins', async () => {
    const job = await notifyAdmins({ to, subject, text })
    const addedJob = await emailQueue.getJob(job.id)
    expect(addedJob).toBeTruthy()
    expect(addedJob && addedJob.id).toBe(job.id)
})

test('should add a queue job with  notifyNewGroupRequest', async () => {
    const job = await notifyNewGroupRequest(emails[1])
    const addedJob = await emailQueue.getJob(job.id)
    expect(addedJob).toBeTruthy()
    expect(addedJob && addedJob.id).toBe(job.id)
})
