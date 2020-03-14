import t from 'tcomb-validation'
import { UserAge } from './UserAge'
import { UserEmail } from './UserEmail'
import { UserName } from './UserName'
import { UserNickname } from './UserNickname'
import { UserPassword } from './UserPassword'
import { UserRole } from './UserRole'
import { UserSurname } from './UserSurname'

export const UserCreate = t.struct({
    Age: UserAge,
    Email: UserEmail,
    Nickname: UserNickname,
    Password: UserPassword,
    Role: UserRole,
    Name: UserName,
    Surname: UserSurname,
}, {
    name: 'UserCreate',
    defaultProps: {
        Age: 0,
        Nickname: '',
        Name: '',
        Surname: '',
    },
})
