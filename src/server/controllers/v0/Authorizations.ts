/* eslint-disable require-jsdoc */
import { Controller, Get, Post, PathParams, Req, Res, Next, Render } from '@tsed/common'
import { Request, Response, NextFunction } from 'express'
import {
    errorMessages,
    authBaseRoute,
    authConfirmationRoute,
    authRejectGroupRequestRoute,
    authApproveGroupRequest
    // authResetPassword,
    // authChangePassword
} from '@constants'
import { AAxError } from '@helpers'

@Controller(authBaseRoute)
export class Authorizations {
    @Get(`${authConfirmationRoute}/:key`)
    async confirmEmailRoute(
        @PathParams('key') key: string,
        @Res() res: Response,
        @Next() next: NextFunction
    ): Promise<void> {
        const tokenR = `received: ${key}`
        // res.send(tokenR)
        next(new AAxError('message error', 'sourceController', ' user message ね', false))
    }
    @Get(`/grouprequest/:action/:userSignature/:adminSignature`)
    async processGroupRequestRoute(
        @PathParams('action') action: string,
        @PathParams('userSignature') userSignature: string,
        @PathParams('adminSignature') adminSignature: string,
        @Res() res: Response
    ): Promise<void> {
        res.send(`received: action: ${action}, userSign: ${userSignature}, adminSign: ${adminSignature}`)
    }
    // TODO Example of rendering a page thru the engine
    @Get(`/try`)
    @Render('pages/error.hbs')
    async tryTemplate(@Res() res: Response, @Next() next: NextFunction): Promise<{}> {
        // Promise<{}> {
        return { userMessage: 'some stuff' }
        // next(new AAxError('message error', 'sourceController', ' user message ね', false))
        // res.render('pages/error.hbs')
    }
}
