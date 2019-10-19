import fs from 'fs'
const readTemplateFile = require('util').promisify(fs.readFile)
import handlebars from 'handlebars'

/**
 * Render html of a provided hbs template file with provided context variables
 * @param {string} templateFileName name of the hbs template file to be rendered relative to src/server/views
 * @param {object} context object containing all variables required to render the hbs template file
 * @return {Promise<string>} a Promise that resolves to the rendered html string
 */
export async function renderTemplateHTML(templateFileName: string, context: object): Promise<string> {
    return handlebars.compile(await readTemplateFile(`src/server/views/${templateFileName}`, 'utf8'))(context)
}
