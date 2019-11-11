import { Options } from 'nodemailer/lib/mailer'

type emailTemplateOptions = {
    query: {}
    data: {}
}

type emailTemplate = {
    [templateFileName: string]: emailTemplateOptions
}

interface ExtendedRecipient extends Options {
    template: string
}

/*

    !!! the template variable is the one that specifies what kind of email/notification
        will be sent to the provided recipients, so that there will be only one sendEmail
        function to send the email but many templateRender functions that prepare the 
        compliant Mailgun.Mail object argument to provide to sendEmail function

    !!! hence the email service consists of two main functions: one that receives custom
        arguments of type extended from Mailgun.Mail and return a compliant Mailgun.Mail
        and another that sends the mail for each Mailgun.Mail object received

1   email recipients could be any of the following:
        one recipient object or an array of recipient objects
        * recipient objects must extend Mailgun.Mail to incude the template property
          and nullify|undefine the required properties that ought to be filled by the template
          (this allows to use all other properties available at Mailgun.Mail type):
        recipients object can have a template property with template filename, context variables and additional data
    
2   TEMPLATE RENDERER
        - the template renderer expects to always receive an array of extended Mailgun.Mail
        objects and process them all to return a compliant Mailgun.Mail array of objects

        - if no template property is received, handle it as a 'send custom email' and just check
        for Mailgun.Mail compliance and provide defaults for all undefined required properties so
        that it returns a compliant Mailgun.Mail

        - the template property must include a property whose name is the same as the template filename
        template: {
            fileName:string >> the name of the template file : {
                queryData?:dataRequiredForQuery: {...} >> the data required for the photon query to fetch template context data
                data?:additionalContextVariables: {...} >> non fetchable data required for the template
            }
        }
        1   extract the name of the template
        2   build and fetch query
        3   join query result with additional data
        4   render the template
        5   return the html, subject, replyTo and fallback text associated with the templated email

3   once received the template and its associated resolved properties (from, replyTo, fallback text etc...) build a compliant Mailgun.Mail object

4   send the email

the pipe should be like the following:

    sendEmail(ExtendedRecipient | ExtendedRecipient[])
        processArray(ExtendedRecipient | ExtendedRecipient[]) => ExtendedRecipient[]
        renderTemplates(ExtendedRecipient[]) => CompliantRecipient[]
        sendMailgunEmail(CompliantRecipient[])
QUEUING:
    taking into account the functions above: sendEmail is the one creating a new queue
    job and the whole pipe is processed in the queue (in a processor file)
    As this processor file has only one default export, it can be used to perform
    the actions outside the queue

*/
