import { ValidationError } from 'yup'
import { alertWebmaster } from '.'

/**
 * Custom Error class: AliciAlonso API
 * @class AAxError
 * @extends {Error}
 */
export class AAxError extends Error {
    errorSource: string
    userMessage: string

    /**
     *Creates an instance of AAxError.
     * @param {string} message the system's error message
     * @param {string} errorSource the function/method throwing the error
     * @param {string} userMessage the message for the end user
     * @param {boolean} notifyWebmaster send an email to the webmaster's email address specified in the environment variable RECIPIENT_WEBMASTER
     * @memberof AAxError
     */
    constructor(message: string, errorSource: string, userMessage: string, notifyWebmaster: boolean) {
        super(message)
        this.userMessage = userMessage
        this.errorSource = errorSource
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor)

        if (notifyWebmaster) {
            alertWebmaster(errorSource, `${message}\n${this.stack}\n`)
                .then(res => res)
                .catch(err => {
                    throw new Error(`Internal error while attempting to notify Webmaster about an AAxError\n${err}`)
                })
        }
    }
}

export const formatYupError: (err: ValidationError) => string = err => {
    return err.errors[0]
}
