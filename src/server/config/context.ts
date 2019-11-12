import { Request } from 'express'
import { Context } from '@aatypes'
import { redisInstance, photon } from '@libs'
import { authMiddleware } from '../middlewares/authentication.mw'

const context = async ({ req }: { req: Request }): Promise<Context> => ({
    photon,
    request: req,
    redis: redisInstance,
    aaxCache: {},
    user: await authMiddleware(req),
    session: req && req.session,
    url: req ? `${req.protocol}://${req.get('host')}` : ''
})

export default context
