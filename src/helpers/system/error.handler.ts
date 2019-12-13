import { ValidationError } from 'yup'

// import { sendQueuedEmail } from '.'
// import { ifElse, always } from 'ramda'
// import { Job } from 'bull'

/**
 * Custom Error class: AliciAlonso API
 * @class AAxError
 * @extends {Error}
 */
// eslint-disable-next-line functional/prefer-type-literal
export interface AAxError extends Error {
    userMessage: string
}

export const newError = (message: string, userMessage: string): AAxError =>
    Object.assign(new Error(message), { userMessage })

/*

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

*/

export const formatYupError: (err: ValidationError) => string = err => {
    return err.errors[0]
}
