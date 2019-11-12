import { Request, Response, NextFunction } from 'express'
import { AAxError } from '@helpers'

/**
 * Express middleware function to resolve route errors. It uses AAxError class to fill up an html template that displays the error to the user in the requested route
 *
 * @export
 * @param {(Error | AAxError)} err Custom error class
 * @param {Request} req Express request object
 * @param {Response} res Express response object
 * @param {NextFunction} next Express next function
 */
export function errorHandlingMiddleware(err: Error | AAxError, req: Request, res: Response, next: NextFunction): void {
    // console.log('AAxERROR:', err)
    if (err instanceof AAxError) {
        res.status(500).render('pages/error', {
            layout: false,
            userMessage: err.userMessage
        })
        return
    }
    res.status(500).send(err.message)
    next(err)
}
