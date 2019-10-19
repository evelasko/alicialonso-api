import { v4 } from 'uuid'
import moment from 'moment'

// key divider
export const keyDivider = ':'

// key prefixes must always end with the divider
export const redisSessionPrefix = 'sess' + keyDivider
export const userSessionIdPrefix = 'userSids' + keyDivider
export const resetPasswordPrefix = 'forgotPassword' + keyDivider
export const emailVerificationPrefix = 'verifyEmail' + keyDivider
export const groupRequestPrefix = 'groupRequest' + keyDivider
export const usersCacheKey = 'usersCache' + keyDivider
export const eventsCacheKey = 'eventsCache' + keyDivider
export const newsesCacheKey = 'newsesCache' + keyDivider

export const keyExpiration = {
    emailVerification: moment.duration({ days: 2 }).asSeconds(),
    resetPassword: moment.duration({ days: 1 }).asSeconds()
}

export const generateVerificationKey = (): string => `${emailVerificationPrefix}${v4()}`
export const generateResetPasswordKey = (): string => `${resetPasswordPrefix}${v4()}`

export const getKeyNature = (key: string): string => `${key.split(keyDivider)[0]}${keyDivider}`
