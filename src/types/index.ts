// export * from './generated/nexus-typegen'
import { UserGroup } from '@prisma/photon'

export * from './context'
export type UserCache = {
    readonly id: string
    readonly email: string
    readonly hpassword: string
    readonly isAdmin: boolean
    readonly group: UserGroup
}
