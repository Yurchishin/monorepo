import { userAge } from './UserAge'
import { userEmail } from './UserEmail'
import { userName } from './UserName'
import { userNickname } from './UserNickname'
import { userPassword } from './UserPassword'
import { userRole, adminRole, guestRole } from './UserRole'
import { userSurname } from './UserSurname'

const tUser = {
    userAge,
    userEmail,
    userName,
    userNickname,
    userPassword,
    userRole,
    adminRole,
    guestRole,
    userSurname,
}

export * from './UserAge'
export * from './UserEmail'
export * from './UserName'
export * from './UserNickname'
export * from './UserPassword'
export * from './UserRole'
export * from './UserSurname'

export default tUser
