import { TypeOf } from 'io-ts'
import tUser from '../io-types/User'

export type UserCreateIO = TypeOf<typeof tUser.create>
export type UserAgeIO = TypeOf<typeof tUser.age>
export type UserEmailIO = TypeOf<typeof tUser.email>
export type UserNameIO = TypeOf<typeof tUser.name>
export type UserNicknameIO = TypeOf<typeof tUser.nickname>
export type UserPasswordIO = TypeOf<typeof tUser.password>
export type UserRoleIO = TypeOf<typeof tUser.role>
export type UserSurnameIO = TypeOf<typeof tUser.surname>
