/* eslint-disable prefer-const */
/* eslint-disable new-cap */
import { GraphQLClient } from 'graphql-request'
import { v4 } from 'uuid'
import axios from 'axios'
import { photon } from '../../src/libs'
import { getSdk, UserGroup as UserGroupSdk } from '../../api/aaxapi-sdk'
import { aaxapiSdk, endpoint } from '../config/aaxSdkClient'
import { errorMessages, links } from '../../src/constants'
import { generateLoginToken } from '../../src/helpers'
import userData from '../config/user.data'
import { passwordRaw, emails, userItems } from '../config/testData'
import { LoginPayload } from '../../src/types'

const { studentUserToCreate, staffUserToCreate } = userData

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let studentQuerier: any

describe('User Groups Tests', () => {
    beforeAll(async () => {
        const { email } = studentUserToCreate
        studentQuerier = getSdk(
            new GraphQLClient(endpoint, {
                headers: {
                    auth: await generateLoginToken({ id: '123', email, group: 'GENERAL', isAdmin: false })
                }
            })
        )
    })

    describe('Mutations: createGroupRequest, approveGroupRequest, rejectGroupRequest', () => {
        describe('create group join request', () => {
            test('user should create new group request upon signup if groupRequest provided', async () => {
                const {
                    signUpUser: { token }
                } = await aaxapiSdk.SignUpUser({ ...studentUserToCreate })

                expect(token).toBeTruthy()
                const { email, groupRequest } = studentUserToCreate
                const requestedGroup = await photon.users.findOne({ where: { email }, select: { groupRequest: true } })
                expect(requestedGroup && requestedGroup.groupRequest).toBe(groupRequest)
            })
            test('user with pending group request should login as GENERAL', async () => {
                const { email } = studentUserToCreate
                await photon.users.update({ where: { email }, data: { emailVerified: true } })
                const {
                    me: { group }
                } = await studentQuerier.MeQuery()
                expect(group).toBe('GENERAL')
            })
            test('non logged in user should not be able to create new group request', async () => {
                await aaxapiSdk.CreateGroupRequest({ groupRequest: UserGroupSdk.Estudiante }).catch(err => {
                    expect(err.response.errors[0].message).toBe(errorMessages.s_loginRequired)
                })
            })
            // test('logged in user should not be able to create group request for PUBLIC group', async () => {
            //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
            //     await userQueriers[1].CreateGroupRequest({ groupRequest: UserGroupSdk.General }).catch((err: any) => {
            //         expect(err.response.errors[0].message).toBe(errorMessages.s_groupRequestNotNeeded)
            //     })
            // })
            // test('logged in user should be able to create group request', async () => {
            //     const email = emails[1]
            //     const {
            //         login: { token }
            //     } = await aaxapiSdk.Login({ email, password: passwordRaw })
            //     const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
            //     await aaxapiAuthSdk.CreateGroupRequest({ groupRequest: UserGroupSdk.Estudiante })
            //     const requestedGroup = await photon.users.findOne({ where: { email }, select: { groupRequest: true } })
            //     expect(requestedGroup).toBe('STUDENT')
            // })
        })
        // describe('approve/reject group join request thru mutations', () => {
        //     test('should approve a group request if exists and notify user', async () => {
        //         const admins = await photon.users.findMany({ where: { isAdmin: true }, select: { email: true } })
        //         const { email } = admins[0]
        //         const {
        //             login: { token }
        //         } = await aaxapiSdk.Login({ email, password: passwordRaw })
        //         const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
        //         await aaxapiAuthSdk.ApproveGroupRequest({ email: studentUserToCreate.email })
        //         const userGroup = await photon.users.findOne({ where: { email }, select: { group: true } })
        //         const userGroupRequest = await photon.users.findOne({
        //             where: { email },
        //             select: { groupRequest: true }
        //         })
        //         expect(userGroup).toBe(UserGroupSdk.Estudiante)
        //         expect(userGroupRequest).toBeNull()
        //     })
        //     test('should get an error if group request does not exists', async () => {
        //         const email = emails[2]
        //         const {
        //             login: { token }
        //         } = await aaxapiSdk.Login({ email, password: passwordRaw })
        //         const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
        //         await aaxapiAuthSdk.ApproveGroupRequest({ email: studentUserToCreate.email }).catch(err => {
        //             expect(err.response.errors[0].message).toBe(errorMessages.s_groupRequestNotFound)
        //         })
        //     })
        //     test('should get an error if a non admin user attempts to approve a group request', async () => {
        //         const email = emails[1]
        //         const {
        //             login: { token }
        //         } = await aaxapiSdk.Login({ email, password: passwordRaw })
        //         const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
        //         await aaxapiAuthSdk.ApproveGroupRequest({ email: studentUserToCreate.email }).catch(err => {
        //             expect(err.response.errors[0].message).toBe(errorMessages.s_adminPrivilegesRequired)
        //         })
        //     })
        //     test('should reject a group request if exists and notify user', async () => {
        //         const email = emails[2]
        //         const {
        //             login: { token }
        //         } = await aaxapiSdk.Login({ email, password: passwordRaw })
        //         const aaxapiAuthSdk = getSdk(new GraphQLClient(endpoint, { headers: { auth: token } }))
        //         await aaxapiAuthSdk.RejectGroupRequest({ email: emails[1] })
        //         const group = await photon.users.findOne({
        //             where: { email: emails[1] },
        //             select: { group: true }
        //         })
        //         const groupRequest = await photon.users.findOne({
        //             where: { email: emails[1] },
        //             select: { groupRequest: true }
        //         })
        //         expect(group && group.group).toBe(UserGroupSdk.General)
        //         expect(groupRequest && groupRequest.groupRequest).toBeNull()
        //     })
        // })
        // describe('approve/reject group join request thru route links', () => {
        //     test('should approve a group request if exists and notify user', async () => {
        //         await aaxapiSdk.SignUpUser({ ...staffUserToCreate })
        //         const { email } = staffUserToCreate
        //         await photon.users.update({ where: { email }, data: { emailVerified: true } })
        //         const approveLink = links.approveGroupRequest(email, emails[2])
        //         await axios.get(approveLink)
        //         const group = await photon.users.findOne({ where: { email }, select: { group: true } })
        //         expect(group && group.group).toBe(staffUserToCreate.groupRequest)
        //     })
        //     test('should get an error if group request does not exists', async () => {
        //         const { email } = staffUserToCreate
        //         const approveLink = links.approveGroupRequest(email, emails[2])
        //         await axios.get(approveLink).catch(err => {
        //             expect(err.response.status).toBe(500)
        //         })
        //         expect(500).toBe(500)
        //     })
        //     test('should reject a group request if exists and notify user', async () => {
        //         const { email } = staffUserToCreate
        //         const { group } = await photon.users.update({
        //             where: { email },
        //             data: { groupRequest: 'ESTUDIANTE' },
        //             select: { group: true }
        //         })
        //         const rejectLink = links.rejectGroupRequest(email, emails[2])
        //         await axios.get(rejectLink)
        //         const userAfter = await photon.users.findOne({
        //             where: { email },
        //             select: { group: true, groupRequest: true }
        //         })
        //         expect(userAfter && userAfter.groupRequest).toBeNull()
        //         expect(userAfter && userAfter.group).toBe(group)
        //     })
        // })
    })
})
