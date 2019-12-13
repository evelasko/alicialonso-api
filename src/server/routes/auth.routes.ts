/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-try-statement */
/* eslint-disable functional/no-expression-statement */
import cors from 'cors'
import express from 'express'

import { redisInstance } from '@helpers'
import { Photon } from '@prisma/photon'

import { authApproveGroupRequest, authConfirmationRoute, authRejectGroupRequestRoute } from '../../constants'

// eslint-disable-next-line new-cap
export const authRoutes = express.Router()
authRoutes.use(express.json())
authRoutes.use(cors())

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
            next()
            // new AAxError(
            //     `Unknown error: didn't received user's email from redis key ${key}`,
            //     `route:${authBaseRoute}${authConfirmationRoute}`,
            //     errorMessages.s_invalidCodeExpired,
            //     false
            // )
        }
    } catch (e) {
        // const err = new AAxError(
        //     `${e}`,
        //     `route:${authBaseRoute}${authConfirmationRoute}`,
        //     errorMessages.s_invalidCodeExpired,
        //     false
        // )
        next(e)
    }
})

// approve group request and notify requestee
authRoutes.get(
    `${authApproveGroupRequest}/:userSignature/:adminSignature`,
    express.urlencoded({ extended: true }),
    async (req, res, next) => {
        const { userSignature, adminSignature } = req.params
        try {
            const response = '?' // await processGroupRequest('approve', userSignature, adminSignature)
            res.send(`<h1>${response}</h1>`)
        } catch (err) {
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
            const response = '?' // await processGroupRequest('reject', userSignature, adminSignature)
            res.send(`<h1>${response}</h1>`)
        } catch (err) {
            next(err)
        }
    }
)
