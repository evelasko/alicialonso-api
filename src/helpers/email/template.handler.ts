import { readFileSync } from 'fs'
import { compile } from 'handlebars'
import { pipe } from 'ramda'

/**
 * Render html from hbs string using provided context variables
 * @param {string} hbs handlebars template string
 * @param {object} context object containing all variables required to render the hbs template file
 * @return {Promise<string>} a Promise that resolves to the rendered html string
 */
export const hbs2precompiled = (hbs: string): (<T>(ctx: T) => string) => <T>(ctx: T) =>
    compile(hbs)(ctx)
const rf = (path: string): string => readFileSync(path, { encoding: 'utf8' })

export const hbsFromFile = pipe(rf, hbs2precompiled)
