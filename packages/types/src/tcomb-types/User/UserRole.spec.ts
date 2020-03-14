import {UserRole, GuestRole, AdminRole} from './UserRole'
import {expectTypeSuccess, expectTypeErrors} from "../../tests"
import {UserRoleError} from "@monorepo/dictionary";

describe('UserRole', () => {
	expectTypeSuccess(UserRole, 'admin')
	expectTypeErrors(GuestRole, 'admin', [UserRoleError.TYPE])
	expectTypeSuccess(AdminRole, 'admin')
	expectTypeSuccess(UserRole, 'guest')
	expectTypeSuccess(GuestRole, 'guest')
	expectTypeErrors(AdminRole, 'guest', [UserRoleError.TYPE])
	expectTypeErrors(UserRole, 'other', [UserRoleError.TYPE])
	expectTypeErrors(GuestRole, 'other', [UserRoleError.TYPE])
	expectTypeErrors(AdminRole, 'other', [UserRoleError.TYPE])
	expectTypeErrors(UserRole, 1, [UserRoleError.TYPE])
	expectTypeErrors(GuestRole, 1, [UserRoleError.TYPE])
	expectTypeErrors(AdminRole, 1, [UserRoleError.TYPE])
})
