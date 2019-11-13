/* eslint-disable require-jsdoc */
// import { Request, Response, NextFunction } from 'express'
import { AAxError } from '@helpers'
import cons from 'consolidate'

/**
 * Express middleware function to resolve route errors. It uses AAxError class to fill up an html template that displays the error to the user in the requested route
 *
 * @export
 * @param {(Error | AAxError)} err Custom error class
 * @param {Request} req Express request object
 * @param {Response} res Express response object
 * @param {NextFunction} next Express next function
 */
// export function errorHandlingMiddleware(err: Error | AAxError, req: Request, res: Response, next: NextFunction): void {
//     // console.log('AAxERROR:', err)
//     if (err instanceof AAxError) {
//         res.status(500).render('pages/error', {
//             layout: false,
//             userMessage: err.userMessage
//         })
//         return
//     }
//     res.status(500).send(err.message)
//     next(err)
// }

import { Err, GlobalErrorHandlerMiddleware, OverrideProvider, Req, Res } from '@tsed/common'
import { Exception } from 'ts-httpexceptions'
import path from 'path'

// TODO Research and implement http exceptions and let them be shown using the error template...
@OverrideProvider(GlobalErrorHandlerMiddleware)
export class MyGEHMiddleware extends GlobalErrorHandlerMiddleware {
    async use(@Err() error: Error, @Req() request: Req, @Res() response: Res): Promise<void> {
        // DO SOMETHING
        if (error instanceof AAxError) {
            try {
                const errorHtmlPage = await cons.handlebars(path.join(__dirname, '../views/pages/error.hbs'), {
                    layout: false,
                    userMessage: error.userMessage
                })
                response.status(500).send(errorHtmlPage)
            } catch (err) {
                response.send(err)
            }
            return
        }
        response.status(500).send(error.message)
        return super.use(error, request, response)
    }
}
