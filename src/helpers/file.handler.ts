import fs from 'fs'
import { promisify } from 'util'

/**
 * Returns the contents of a file as utf8 encoded string
 * @param {string} filePath
 * @return {string} utf8 string
 */
export const readFile = async (filePath: string): Promise<string> => await promisify(fs.readFile)(filePath, 'utf8')
