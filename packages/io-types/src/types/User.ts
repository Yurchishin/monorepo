import tUser from '../tcomb-types/User'
import { TypeOf } from './TypeOf'

export type TUserCreate = TypeOf<typeof tUser.Create>
export type TUserAge = TypeOf<typeof tUser.Age>
export type TUserEmail = TypeOf<typeof tUser.Email>
export type TUserName = TypeOf<typeof tUser.Name>
export type TUserNickname = TypeOf<typeof tUser.Nickname>
export type TUserPassword = TypeOf<typeof tUser.Password>
export type TUserRole = TypeOf<typeof tUser.Role>
export type TUserSurname = TypeOf<typeof tUser.Surname>
