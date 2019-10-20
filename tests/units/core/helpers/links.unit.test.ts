import { links } from '../../../../src/constants'

describe('server routes dynamic link generation', () => {
    test('generate approve group request link', () => {
        const approveLink = links.approveGroupRequest('a@b.com', 'c@d.com')
        // console.log('approveLink: ', approveLink)
        expect(approveLink).toBeDefined()
    })
})