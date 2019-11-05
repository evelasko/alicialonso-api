import app from '../../src/server'

const startTestServer = async (): Promise<() => void> => {
    const port = 4000
    const httpServer = await app.listen({ port })
    return (): void => {
        httpServer.close()
    }
}

export default startTestServer
