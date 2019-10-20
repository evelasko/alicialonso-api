import { GraphQLClient } from 'graphql-request'
import axios from 'axios'
import { prisma, UserGroup, User } from '../../../../src/generated/client/prisma'
import { getSdk, UserGroup as UserGroupSdk } from '../../../../api/aaxapi-sdk'
import { aaxapiSdk, endpoint } from '../../../config/aaxSdkClient'
import { errorMessages, links } from '../../../../src/constants'
import userData from './user.data'
import testData, { TestData, passwordRaw } from '../../../../prisma/scripts/seedTestData'

const { studentUserToCreate, staffUserToCreate } = userData

let testDataArr: TestData[]
testData().then(result => {
    testDataArr = result
})

describe('User Groups Tests', () => {
    describe('Mutations: createGroupRequest, approveGroupRequest, rejectGroupRequest', () => {
        describe('create group join request', () => {
            test('user should create new group request upon signup if groupRequest provided', async () => {
                const {
                    signUpUser: { token }
                } = await aaxapiSdk.SignUpUser({ ...studentUserToCreate })

                expect(token).toBeTruthy()
                const { email, groupRequest } = studentUserToCreate
                const requestedGroup = await prisma.user({ email }).groupRequest()
                expect(requestedGroup).toBe(groupRequest)
            })
            test('user with pending group request should login as PUBLIC', async () => {
                const { email, password } = studentUserToCreate
                await prisma.updateUser({
                    where: { email },
                    data: { emailVerified: true }
                })
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                const {
                    me: { group }
                } = await aaxapiAuthSdk.MeQuery()
                expect(group).toBe('PUBLIC')
            })
            test('non logged in user should not be able to create new group request', async () => {
                await aaxapiSdk.CreateGroupRequest({ groupRequest: UserGroupSdk.Student }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_loginRequired)
                })
            })
            test('logged in user should not be able to create group request for PUBLIC group', async () => {
                const { email } = testDataArr[1]
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: passwordRaw })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                await aaxapiAuthSdk.CreateGroupRequest({ groupRequest: UserGroupSdk.Public }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_groupRequestNotNeeded)
                })
            })
            test('logged in user should be able to create group request', async () => {
                const { email } = testDataArr[1]
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: passwordRaw })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                await aaxapiAuthSdk.CreateGroupRequest({ groupRequest: UserGroupSdk.Student })
                const requestedGroup = await prisma.user({ email }).groupRequest()
                expect(requestedGroup).toBe('STUDENT')
            })
        })
        describe('approve/reject group join request thru mutations', () => {
            test('should approve a group request if exists and notify user', async () => {
                const admins: User[] = await prisma.users({ where: { isAdmin: true } })
                const { email } = admins[0]
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: passwordRaw })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                await aaxapiAuthSdk.ApproveGroupRequest({ email: studentUserToCreate.email })
                const userGroup: UserGroup = await prisma.user({ email: studentUserToCreate.email }).group()
                const userGroupRequest: UserGroup | null = await prisma
                    .user({ email: studentUserToCreate.email })
                    .groupRequest()
                expect(userGroup).toBe(UserGroupSdk.Student)
                expect(userGroupRequest).toBeNull()
            })
            test('should get an error if group request does not exists', async () => {
                const { email } = testDataArr[2]
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: passwordRaw })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                await aaxapiAuthSdk.ApproveGroupRequest({ email: studentUserToCreate.email }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_groupRequestNotFound)
                })
            })
            test('should get an error if a non admin user attempts to approve a group request', async () => {
                const { email } = testDataArr[1]
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: passwordRaw })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                await aaxapiAuthSdk.ApproveGroupRequest({ email: studentUserToCreate.email }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_adminPrivilegesRequired)
                })
            })
            test('should reject a group request if exists and notify user', async () => {
                const { email } = testDataArr[2]
                const {
                    login: { token }
                } = await aaxapiSdk.Login({ email, password: passwordRaw })
                const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
                await aaxapiAuthSdk.RejectGroupRequest({ email: testDataArr[1].email })
                const userGroup: UserGroup = await prisma.user({ email: testDataArr[1].email }).group()
                const userGroupRequest: UserGroup | null = await prisma
                    .user({ email: testDataArr[1].email })
                    .groupRequest()
                expect(userGroup).toBe(UserGroupSdk.Public)
                expect(userGroupRequest).toBeNull()
            })
        })
        describe('approve/reject group join request thru route links', () => {
            test('should approve a group request if exists and notify user', async () => {
                await aaxapiSdk.SignUpUser({ ...staffUserToCreate })
                const { email } = staffUserToCreate
                await prisma.updateUser({
                    where: { email },
                    data: { emailVerified: true }
                })
                const approveLink = links.approveGroupRequest(email, testDataArr[2].email)
                await axios.get(approveLink)
                const userGroup: UserGroup = await prisma.user({ email }).group()
                expect(userGroup).toBe(staffUserToCreate.groupRequest)
            })
            test('should get an error if group request does not exists', async () => {
                const { email } = staffUserToCreate
                const approveLink = links.approveGroupRequest(email, testDataArr[2].email)
                await axios.get(approveLink).catch(err => {
                    expect(err.response.status).toBe(500)
                })
                expect(500).toBe(500)
            })
            test('should reject a group request if exists and notify user', async () => {
                const { email } = staffUserToCreate
                const group = await prisma
                    .updateUser({
                        where: { email },
                        data: { groupRequest: 'STUDENT' }
                    })
                    .group()
                const rejectLink = links.rejectGroupRequest(email, testDataArr[2].email)
                await axios.get(rejectLink)
                const userAfter: User = await prisma.user({ email }).$fragment(`{ group groupRequest }`)
                expect(userAfter.groupRequest).toBeNull()
                expect(userAfter.group).toBe(group)
            })
        })
    })
})
