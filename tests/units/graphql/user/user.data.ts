import { UserGroup } from '../../../../api/aaxapi-sdk'

const userData = {
    guestUserToCreate: {
        email: 'guest@alicialonso.org',
        firstname: 'Ronald',
        lastname: 'Fraser',
        password: '1234567890'
    },
    studentUserToCreate: {
        email: 'estudiante@alicialonso.org',
        firstname: 'ヘヌリ',
        lastname: 'ポター',
        password: '1234567890',
        groupRequest: UserGroup.Student
    },
    staffUserToCreate: {
        email: 'staff@alicialonso.org',
        firstname: 'Parcibal',
        lastname: 'Meadows',
        password: '1234567890',
        groupRequest: UserGroup.Staff
    }
}

export default userData
