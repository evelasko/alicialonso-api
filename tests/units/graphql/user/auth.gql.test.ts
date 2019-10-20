import axios from 'axios'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../../../../api/aaxapi-sdk'
import { prisma, User } from '../../../../src/generated/client/prisma'
import { aaxapiSdk, endpoint } from '../../../config/aaxSdkClient'
import { aaxEvents, setVerificationKey, generateVerificationKey, getKeyNature } from '../../../../src/helpers'
import { errorMessages, links, emailVerificationPrefix } from '../../../../src/constants'
import userData from './user.data'
import { redisInstance } from '../../../../src/modules/redis'
import { generateRandomString } from '../../../config/utils'

const { guestUserToCreate } = userData

const newPassword = 'qwertyuiopasdfghjkl0987654321'

describe('User Authentication Tests', () => {
    describe('Mutation: SignUp', () => {
        describe('signup new user', () => {
            test('Should sign a user up and send confirmation email', async () => {
                const {
                    signUpUser: { token }
                } = await aaxapiSdk.SignUpUser({ ...guestUserToCreate })

                expect(getKeyNature(token)).toBe(emailVerificationPrefix)
            })

            test('Should receive confirmation email', async () => {
                aaxEvents.once('mailgunevent', (event, recipient) => {
                    expect(recipient).toBe(guestUserToCreate.email)
                    expect(event).toBe('delivered')
                })
            })

            test('User signed up should exist in the database', async () => {
                const exists = await prisma.user({ email: guestUserToCreate.email })
                expect(exists).toBeTruthy()
            })

            test('Should not signup user with already registered email address', async () => {
                const signupResponse = await aaxapiSdk
                    .SignUpUser({
                        ...guestUserToCreate
                    })
                    .catch(err => {
                        expect(err.response.errors[0].message).toBe(
                            errorMessages.d_emailAlreadyRegistered(guestUserToCreate.email)
                        )
                    })
                expect(signupResponse).toBeFalsy()
            })
        })

        describe('signup validation tests', () => {
            test('should throw error while trying to sign up with invalid password', async () => {
                await aaxapiSdk
                    .SignUpUser({
                        email: 'h.superpotter@gmail.com',
                        firstname: 'John',
                        lastname: 'Appleseed',
                        password: '12'
                    })
                    .catch(err => {
                        expect(err.response.errors[0].message).toBe(errorMessages.s_passwordTooShort)
                    })
            })

            test('should throw error while trying to sign up with invalid email', async () => {
                await aaxapiSdk
                    .SignUpUser({
                        email: 'invalid',
                        firstname: 'John',
                        lastname: 'Appleseed',
                        password: '1234567890'
                    })
                    .catch(err => {
                        expect(err.response.errors[0].message).toBe(errorMessages.s_invalidEmail)
                    })
            })
        })
    })

    describe('Mutation: Login', () => {
        describe('login users', () => {
            test('should not login a user with unverified email, resend verification email, and verify email address', async () => {
                const { email, password } = guestUserToCreate
                const response = await aaxapiSdk.Login({ email, password }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.d_emailNotVerified(email))
                })
                expect(response).toBeFalsy()
            })

            test('Should receive a new confirmation email upon failed login attempt', async () => {
                aaxEvents.once('mailgunevent', (event, recipient, severity) => {
                    console.log(severity)
                    expect(recipient).toBe(guestUserToCreate.email)
                    expect(event).toBe('delivered')
                })
            })

            test('should verify email upon link resolution', async () => {
                const { email } = guestUserToCreate
                const key = generateVerificationKey()
                await redisInstance.set(key, email, 'ex', 60 * 60 * 24)
                await axios.get(links.emailVerification(key))
                const user: User = await prisma.user({ email }).$fragment(`{ emailVerified }`)
                expect(user.emailVerified).toBe(true)
            })

            test('should login user with verified email thru login token', async () => {
                const { email, password } = guestUserToCreate
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password })
                expect(token).toBeTruthy()
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                const {
                    me: { firstname }
                } = await aaxapiAuthSdk.MeQuery()
                expect(firstname).toBe(guestUserToCreate.firstname)
            })
        })

        describe('login validations', () => {
            test('should report when password does not match', async () => {
                const { email } = guestUserToCreate
                await aaxapiSdk.Login({ email, password: 'qwertyuiopkjhfdd' }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_passwordMismatch)
                })
            })
            test('should report when email is not registered', async () => {
                const email = 'nonexistent@emailaddress.com'
                await aaxapiSdk.Login({ email, password: 'poiuytreqasdfb' }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.d_emailNotRegistered(email))
                })
            })
        })
    })

    describe('Mutations: requestResetPassword, changePassword', () => {
        describe('create a change password request', () => {
            test('should report an error if email is not registered', async () => {
                const email = 'ybiukbfkgfbkg@emailaddress.com'
                await aaxapiSdk.RequestResetPassword({ email }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.d_emailNotRegistered(email))
                })
            })

            test('should lock the account, create a change request and send email to requestee', async () => {
                const { email } = guestUserToCreate
                await aaxapiSdk.RequestResetPassword({ email })
                aaxEvents.once('mailgunevent', (event, recipient, severity) => {
                    console.log(severity)
                    expect(recipient).toBe(email)
                    expect(event).toBe('delivered')
                })
                const password = await prisma.user({ email }).password()
                expect(password).toBe('*')
            })

            test('requestee should not be able to login when account is locked', async () => {
                const { email, password } = guestUserToCreate
                await aaxapiSdk.Login({ email, password }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.d_accountLocked(email))
                })
            })
        })
        describe('change password input validations', () => {
            test('user should not change the password if new one is less than 8 characters', async () => {
                const key = generateVerificationKey()
                await setVerificationKey(key, guestUserToCreate.email)
                await aaxapiSdk.ChangePassword({ key, newPassword: '098' }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_passwordTooShort)
                })
            })
            test('user should not change password if new one is longer than 100 characters', async () => {
                const key = generateVerificationKey()
                await setVerificationKey(key, guestUserToCreate.email)
                await aaxapiSdk.ChangePassword({ key, newPassword: generateRandomString(150) }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_passwordTooLong)
                })
            })
        })
        describe('change the password', () => {
            test('user should change the password', async () => {
                const { email } = guestUserToCreate
                const oldPassword = await prisma.user({ email }).password()
                const key = generateVerificationKey()
                await setVerificationKey(key, email)
                await aaxapiSdk.ChangePassword({ key, newPassword })
                const changedPassword = await prisma.user({ email }).password()
                expect(changedPassword).not.toBe(oldPassword)
            })
            test('user should login with new password', async () => {
                const { email } = guestUserToCreate
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: newPassword })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                const {
                    me: { firstname }
                } = await aaxapiAuthSdk.MeQuery()
                expect(firstname).toBe(guestUserToCreate.firstname)
            })
        })
    })
})
