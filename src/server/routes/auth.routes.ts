import express from 'express'
import cors from 'cors'
import { Photon } from '@generated/photon'
import { AAxError, processGroupRequest } from '@helpers'
import { redisInstance } from '@libs'
import { errorMessages } from '@constants'
// eslint-disable-next-line new-cap
export const authRoutes = express.Router()
authRoutes.use(express.json())
authRoutes.use(cors())

export const authBaseRoute = `/user`
export const authConfirmationRoute = `/confirmation`
export const authRejectGroupRequestRoute = `/grouprequest/reject`
export const authApproveGroupRequest = `/grouprequest/approve`
export const authResetPassword = `/password/reset`
export const authChangePassword = `/password/change`

// ROUTES

// verify email address
authRoutes.get(`${authConfirmationRoute}/:key`, express.urlencoded({ extended: true }), async (req, res, next) => {
    try {
        const { key } = req.params
        const email = await redisInstance.get(key)

        if (email) {
            const photon = new Photon()
            await photon.connect()
            await photon.users.update({
                where: { email },
                data: { emailVerified: true }
            })
            res.send(`Ok`)
            photon.disconnect()
        } else {
            next(
                new AAxError(
                    `Unknown error: didn't received user's email from redis key ${key}`,
                    `route:${authBaseRoute}${authConfirmationRoute}`,
                    errorMessages.s_invalidCodeExpired,
                    false
                )
            )
        }
    } catch (e) {
        const err = new AAxError(
            `${e}`,
            `route:${authBaseRoute}${authConfirmationRoute}`,
            errorMessages.s_invalidCodeExpired,
            false
        )
        next(err)
    }
})

// approve group request and notify requestee
authRoutes.get(
    `${authApproveGroupRequest}/:userSignature/:adminSignature`,
    express.urlencoded({ extended: true }),
    async (req, res, next) => {
        const { userSignature, adminSignature } = req.params
        try {
            const response = await processGroupRequest('approve', userSignature, adminSignature)
            if (response instanceof AAxError) {
                next(response)
                return
            }
            res.send('<h1>Done</h1>')
        } catch (e) {
            const err = new AAxError(
                `unknown error while rejecting groupRequest join\n${e}`,
                'RejectGroupRequestRoute',
                errorMessages.s_groupRequestNotFound,
                false
            )
            next(err)
        }
    }
)

// reject group request and notify requestee
authRoutes.get(
    `${authRejectGroupRequestRoute}/:userSignature/:adminSignature`,
    express.urlencoded({ extended: true }),
    async (req, res, next) => {
        const { userSignature, adminSignature } = req.params
        try {
            const response = await processGroupRequest('reject', userSignature, adminSignature)
            if (response instanceof AAxError) {
                next(response)
                return
            }
            res.send('<h1>Done</h1>')
        } catch (e) {
            const err = new AAxError(
                `unknown error while rejecting groupRequest join\n${e}`,
                'RejectGroupRequestRoute',
                errorMessages.s_groupRequestNotFound,
                false
            )
            next(err)
        }
    }
)
