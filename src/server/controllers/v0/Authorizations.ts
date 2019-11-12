/* eslint-disable require-jsdoc */
import { Controller, Get, Post, PathParams, Req, Res, Next } from '@tsed/common'
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

@Controller(authBaseRoute)
export class Authorizations {
    @Get(`${authConfirmationRoute}/:key`)
    async confirmEmailRoute(
        @PathParams('token') key: string,
        @Res() res: Response,
        @Next() next: NextFunction
    ): Promise<void> {
        const tokenR = `received: ${key}`
        res.send(tokenR)
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
}
