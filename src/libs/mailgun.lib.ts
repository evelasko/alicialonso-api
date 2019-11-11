import nodemailer from 'nodemailer'
import MailgunTransport from 'mailgun-nodemailer-transport'
import Mail from 'nodemailer/lib/mailer'

const mailgunAuth = {
    auth: {
        apiKey: process.env.MAILGUN_API_KEY as string,
        domain: process.env.MAILGUN_DOMAIN as string
    }
}

export const Mailgun: Mail = nodemailer.createTransport(new MailgunTransport(mailgunAuth))

/**
 * Main class for email handling @mailgun
 * @class MailgunService
 */
export class MailgunService {
    public mail: Mail
    /**
     *Creates an instance of MailgunService.
     * @param {string} [key] (opt) API key of Mailgun services or null if set in env var MAILGUN_API_KEY
     * @param {string} [domain] (opt) domain of Mailgun services or null if set in env var MAILGUN_DOMAIN
     * @memberof MailgunService
     */
    constructor(key?: string, domain?: string) {
        this.mail = nodemailer.createTransport(
            new MailgunTransport({
                auth: {
                    apiKey: key || (process.env.MAILGUN_API_KEY as string),
                    domain: domain || (process.env.MAILGUN_DOMAIN as string)
                }
            })
        )
    }
}

/*
_________________________________________________________________________
SENT: */

const sent = {
    envelope: {
        from: 'fundacion@alicialonso.org',
        to: ['h.superpotter@gmail.com']
    },
    messageId: '<2dba4c11-8c5e-2094-33a8-5e52b7fdac6f@alicialonso.org>',
    message: {
        FormData: {
            _overheadLength: 413,
            _valueLength: 84,
            _valuesToMeasure: [],
            writable: false,
            readable: true,
            dataSize: 0,
            maxDataSize: 2097152,
            pauseStreams: true,
            _released: true,
            _streams: [],
            _currentStream: null,
            _insideLoop: false,
            _pendingNext: false,
            _boundary: '--------------------------105974018249048002958020',
            // _events: [Object: null prototype] {},
            _eventsCount: 0
        }
    }
}
const received = {
    signature: {
        timestamp: '1573043565',
        token: '0a6aad48b8038d0f7cb761959a0f185b7f58fa45d181d2b6e9',
        signature: 'e04b2ae32e8165b018567cd22995029316c40c31fe32ea8a857f0a9b56820731'
    },
    'event-data': {
        tags: [],
        timestamp: 1573043564.837758,
        storage: {
            url:
                'https://sw.api.mailgun.net/v3/domains/mail.alicialonso.org/messages/AgEFBmXKvfiUTlrIPklG4bg06oEgTNoUZA==',
            key: 'AgEFBmXKvfiUTlrIPklG4bg06oEgTNoUZA=='
        },
        'recipient-domain': 'gmail.com',
        id: 'a8OL2CRFS3eSvj1tUf8jpg',
        campaigns: [],
        'user-variables': {},
        flags: { 'is-routed': false, 'is-authenticated': true, 'is-system-test': false, 'is-test-mode': false },
        'log-level': 'info',
        envelope: {
            'sending-ip': '104.130.122.30',
            sender: 'postmaster@mail.alicialonso.org',
            transport: 'smtp',
            targets: 'h.superpotter@gmail.com'
        },
        message: { headers: [Object], attachments: [], size: 580 },
        recipient: 'h.superpotter@gmail.com',
        event: 'delivered',
        'delivery-status': {
            tls: true,
            'mx-host': 'gmail-smtp-in.l.google.com',
            'attempt-no': 1,
            description: '',
            'session-seconds': 0.4714648723602295,
            utf8: true,
            code: 250,
            message: 'OK',
            'certificate-verified': true
        }
    }
}
/* _________________________________________________________________________
 */
