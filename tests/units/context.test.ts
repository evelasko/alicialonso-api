import { context, contextAuth, setContextShieldCache } from '@server'

describe('Graphql context object tests', () => {
    it('should return a context object', async () => {
        await context()
    })
    it('should return user object from session', async () => {
        await contextAuth()
    })
    it('should mutate context adding provided object to shieldCache property', () => {
        setContextShieldCache()
    })
    it('should return null')
})