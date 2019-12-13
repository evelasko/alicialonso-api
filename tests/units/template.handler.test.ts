import { readFileSync } from 'fs'
import path from 'path'
import { v4 } from 'uuid'

import { hbs2precompiled } from '@helpers'

import { resetPassword } from '../../generated/template-types'

describe('Email html template handling', () => {
    test('should return html string from hbs file', async () => {
        const host_url = v4()
        const name = v4()
        const link = v4()
        const hbs = hbs2precompiled(readFileSync(path.join(__dirname, '../../src/server/views/resetPassword.hbs'), {encoding: 'utf8'}))<resetPassword>({
            host_url, name, link
        })
        expect(hbs.includes(host_url)).toBeTruthy()
        expect(hbs.includes(name)).toBeTruthy()
        expect(hbs.includes(link)).toBeTruthy()
    })
})