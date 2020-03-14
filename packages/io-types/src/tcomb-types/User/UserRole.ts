import t from 'tcomb-validation'
import { UserRole as UserRoles, UserRoleError } from '@monorepo/dictionary'
import tString from '../String'
import { addErrorMessage } from '../../utils'

export const AdminRole = addErrorMessage(
    tString.Literal(UserRoles.ADMIN, 'AdminRole'),
    UserRoleError.TYPE,
)

export const GuestRole = addErrorMessage(
    tString.Literal(UserRoles.GUEST, 'AdminRole'),
    UserRoleError.TYPE,
)

export const UserRole = addErrorMessage(
    t.union([AdminRole, GuestRole], 'UserRole'),
    UserRoleError.TYPE,
)
