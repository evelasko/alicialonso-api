import { enumType } from 'nexus'

export const UserGroup = enumType({
    name: 'UserGroup',
    description: 'Basic root groups of @alicialonso registered users',
    members: ['PUBLIC', 'STAFF', 'STUDENT']
})
