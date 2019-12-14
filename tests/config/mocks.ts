import Keygrip from 'keygrip'
import { Buffer } from 'safe-buffer'

import { redisSessionName, redisSessionPrefix } from '../../src/constants'

export const mockSession = (data) => {
    const name = redisSessionName()
    const cookie = Buffer.from(JSON.stringify(data)).toString('base64') 
    const hash = Keygrip([process.env.SESSION_SECRET as string]).sign(name + '=' + cookie)
    return `${name}=${cookie}; ${name}.sig=${hash};`
}
