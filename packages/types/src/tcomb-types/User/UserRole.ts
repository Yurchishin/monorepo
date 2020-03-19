import t from 'tcomb-validation'
import { UserRole as UserRoles, UserRoleError } from '@chat/dictionary'
import tNumber from '../Number'
import { addErrorMessage } from '../../utils'

export const AdminRole = addErrorMessage(
    tNumber.Numerical(UserRoles.ADMIN, 'AdminRole'),
    UserRoleError.TYPE,
)

export const GuestRole = addErrorMessage(
    tNumber.Numerical(UserRoles.GUEST, 'AdminRole'),
    UserRoleError.TYPE,
)

export const SuperAdminRole = addErrorMessage(
    tNumber.Numerical(UserRoles.SUPER_ADMIN, 'SuperAdmin'),
    UserRoleError.TYPE,
)

export const UserRole = addErrorMessage(
    t.union([AdminRole, GuestRole, SuperAdminRole], 'UserRole'),
    UserRoleError.TYPE,
)
