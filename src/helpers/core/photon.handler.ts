import { Photon, User, UserSelect, UserWhereInput } from '@prisma/photon'

const photon = new Photon()

export const getManyUsers = (where: UserWhereInput): ((select: UserSelect) => Promise<Array<User>>) => async (
    select: UserSelect
) => await photon.users.findMany({ where, select })
