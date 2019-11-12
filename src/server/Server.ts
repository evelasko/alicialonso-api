import { ServerLoader, ServerSettings } from '@tsed/common'
import path from 'path'
import { settings, beforeRoutesInitMiddleware, beforeListenMiddleware, templateEngineSetup } from './config'

export const rootDir = path.resolve(__dirname)
export const port = (process.env.PORT as string) || 3000
@ServerSettings(settings(rootDir, port))
/**
 * Main Ts.ED Server Class
 * @class Server
 * @extends {ServerLoader} Ts.ED
 */
export class Server extends ServerLoader {
    /**
     * Server template engine initializer
     * @memberof Server
     */
    $onInit(): void {
        templateEngineSetup(this)
    }
    /** Apply all server middlewares required before initializing routes
     * @memberof Server
     */
    public $beforeRoutesInit(): void {
        beforeRoutesInitMiddleware(this)
    }

    /**
     * Apply all server/apolloserver middleware required after initializing routes
     * @memberof Server
     */
    public $beforeListen(): void {
        beforeListenMiddleware(this)
    }
}
