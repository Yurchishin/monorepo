import { UserAge } from './UserAge'
import { UserEmail } from './UserEmail'
import { UserName } from './UserName'
import { UserNickname } from './UserNickname'
import { UserPassword } from './UserPassword'
import { UserRole, AdminRole, GuestRole } from './UserRole'
import { UserSurname } from './UserSurname'
import { UserCreate } from './UserCreate'

const tUser = {
    Age: UserAge,
    Email: UserEmail,
    Name: UserName,
    Nickname: UserNickname,
    Password: UserPassword,
    Role: UserRole,
    AdminRole,
    GuestRole,
    Surname: UserSurname,
    Create: UserCreate,
}

export default tUser
