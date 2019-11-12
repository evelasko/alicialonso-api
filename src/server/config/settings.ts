import { IModuleOptions } from '@tsed/common'

/**
 *  Function that returns Ts.ED ServerLoad configuration settings
 * @param {string} rootDir the root directory at which the Ts.ED ServerLoad class resides
 * @param {(string | number)} port The port for the http server
 * @return {Partial<IModuleOptions>} Ts.ED ServerLoad config settings
 */
export const settings = (rootDir: string, port: string | number): Partial<IModuleOptions> => ({
    rootDir,
    viewsDir: `${rootDir}/views`,
    acceptMimes: ['application/json', 'urlencoded'],
    port,
    componentsScan: [`${rootDir}/middlewares/*.ts`, `${rootDir}/services/*.ts`],
    mount: { '/': `${rootDir}/controllers/v0/*.ts` }
})
