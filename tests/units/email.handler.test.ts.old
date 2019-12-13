import { aaxEvents, sendEmail, alertWebmaster } from '../../src/helpers'

// this test requires ultrahook to be running and mapping to the
// local mailgun webhook route

test('should send an alert to webmaster recipient and notify via mailgun webhook', async () => {
    // send alert email
    await alertWebmaster('AAXAPI Testing II', 'Test email methods')
    // console.log('RESPONSE FROM MAIL: ', response)
    // add email webhook event listener and expect email to be delivered
    aaxEvents.once('mailgunevent', (event, recipient, severity) => {
        expect(recipient).toBe(process.env.RECIPIENT_WEBMASTER)
    })
})

test('should notify permantent failure for inexistent address', async () => {
    // send email to non existent address
    const nonexistentemail = 'noexiste@alicialonso.org'
    await sendEmail(nonexistentemail, 'subject test', 'text test')
    aaxEvents.once('mailgunevent', (event, recipient, severity) => {
        expect(recipient).toBe(nonexistentemail)
        expect(severity).toBe('permanent')
        expect(event).toBe('failed')
    })
})
