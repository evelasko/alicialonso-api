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
