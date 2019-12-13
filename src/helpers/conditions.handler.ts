/* eslint-disable functional/functional-parameters */
import { compareSync } from 'bcryptjs'
import { cond, isNil, not, propEq, propOr, T } from 'ramda'

import { errorMessages } from '@constants'

type UserCredentials = { password: string; emailVerified: boolean } | null
export const userCredentialsCheck = (p: string, u: UserCredentials): ((arg: string) => boolean | string) =>
    cond([
        [isNil, () => errorMessages.d_emailNotRegistered],
        [propEq('password', '*'), () => errorMessages.d_accountLocked],
        [propEq('emailVerified', false), () => errorMessages.d_emailNotVerified],
        [x => not(compareSync(p, propOr('_', 'password', x))), () => errorMessages.s_passwordMismatch],
        [T, () => T] // check cleared
    ])(u)
