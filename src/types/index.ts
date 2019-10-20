export * from './generated/nexus'
import { UserGroup } from '@generated/photon'

export * from './context'
export interface UserCache {
    id: string
    email: string
    hpassword: string
    isAdmin: boolean
    group: UserGroup
}
