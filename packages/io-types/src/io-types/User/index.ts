import { userCreate } from './UserCreate'
import { userAge } from './UserAge'
import { userEmail } from './UserEmail'
import { userName } from './UserName'
import { userNickname } from './UserNickname'
import { userPassword } from './UserPassword'
import { userRole, adminRole, guestRole } from './UserRole'
import { userSurname } from './UserSurname'

const tUser = {
    age: userAge,
    email: userEmail,
    name: userName,
    nickname: userNickname,
    password: userPassword,
    role: userRole,
    surname: userSurname,
    create: userCreate,
    adminRole,
    guestRole,
}

export * from './UserPassword'
export * from './UserRole'
export * from './UserSurname'

export default tUser
