import * as t from 'io-ts'
import { userAge } from './UserAge'
import { userEmail } from './UserEmail'
import { userName } from './UserName'
import { userNickname } from './UserNickname'
import { userPassword } from './UserPassword'
import { userRole } from './UserRole'
import { userSurname } from './UserSurname'

export const userCreate = t.type({
    age: userAge,
    email: userEmail,
    nickname: userNickname,
    password: userPassword,
    role: userRole,
    name: userName,
    surname: userSurname,
}, 'UserCreate')

