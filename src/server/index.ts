import { $log, ServerLoader } from '@tsed/common'
import { Server, port } from './Server'

/**
 * Server bootstrap function
 */
export async function bootstrap(): Promise<void> {
    try {
        $log.debug(`実行をサーバポート${port}に`)
        const server = await ServerLoader.bootstrap(Server)
        await server.listen()
        $log.debug('サーバ実行する')
    } catch (err) {
        $log.error(err)
    }
}

// ------- old code

// // system routes
// app.use('/wh/mailgun', webHookMailgun)

// // error handler middleware
// app.use(errorHandlingMiddleware)
