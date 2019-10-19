import express from 'express'
import cors from 'cors'
import { aaxEvents } from '../../helpers'

// -- Mailgun Webhook Routes Config
// eslint-disable-next-line new-cap
export const webHookMailgun = express.Router()
webHookMailgun.use(express.json())
webHookMailgun.use(cors())

// TODO finish up the event listener for mailgun webhook events
// -- Mailgun Event Emmiter Config
// aaxEvents.on('mailgunevent', (event: string, recipient: string, severity?: string) => {})

// -- ROUTES
webHookMailgun.post('/', ({ body }, res) => {
    const {
        'event-data': { event, recipient }
    } = body
    const severity = event === 'failed' ? body['event-data'].severity : ''
    aaxEvents.emit('mailgunevent', event, recipient, severity)
    res.send('')
})
