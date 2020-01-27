import * as t from 'io-ts'
import tUser from '../io-types/User'

export type UserCreateIO = t.TypeOf<typeof tUser.create>
export type UserAgeIO = t.TypeOf<typeof tUser.age>
export type UserEmailIO = t.TypeOf<typeof tUser.email>
export type UserNameIO = t.TypeOf<typeof tUser.name>
export type UserNicknameIO = t.TypeOf<typeof tUser.nickname>
export type UserPasswordIO = t.TypeOf<typeof tUser.password>
export type UserRoleIO = t.TypeOf<typeof tUser.role>
export type UserSurnameIO = t.TypeOf<typeof tUser.surname>
