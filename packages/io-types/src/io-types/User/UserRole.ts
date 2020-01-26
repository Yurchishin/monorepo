import * as t from 'io-ts'
import { withMessage } from 'io-ts-types/lib/withMessage'
import { UserRole, UserRoleError } from '@monorepo/dictionary'

export const adminRole = withMessage(t.literal(UserRole.ADMIN, 'Admin'), () => UserRoleError.TYPE)

export const guestRole = withMessage(t.literal(UserRole.GUEST, 'Guest'), () => UserRoleError.TYPE)

export const userRole = withMessage(t.union([adminRole, guestRole], 'UserRole'), () => UserRoleError.TYPE)

export type TUserType = t.TypeOf<typeof userRole>
