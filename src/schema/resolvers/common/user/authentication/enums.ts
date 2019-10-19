import { enumType } from 'nexus'

export const UserGroup = enumType({
    name: 'UserGroup',
    members: ['PUBLIC', 'STAFF', 'STUDENT']
})
