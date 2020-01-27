import {userRole, guestRole, adminRole} from './UserRole'
import {assertSuccess, assertFailureMessage} from "../../utils"
import {UserRoleError} from "@monorepo/dictionary";

describe('userRole', () => {
	it('right decode (\'admin\')', () => {
		assertSuccess(userRole, 'admin')
		assertFailureMessage(guestRole, 'admin', [UserRoleError.TYPE])
		assertSuccess(adminRole, 'admin')
	})

	it('right decode (\'guest\')', () => {
		assertSuccess(userRole, 'guest')
		assertSuccess(guestRole, 'guest')
		assertFailureMessage(adminRole, 'guest', [UserRoleError.TYPE])
	})

	it('left decode (\'other\')', () => {
		assertFailureMessage(userRole, 'other', [UserRoleError.TYPE])
		assertFailureMessage(guestRole, 'other', [UserRoleError.TYPE])
		assertFailureMessage(adminRole, 'other', [UserRoleError.TYPE])
	})

	it('left decode (1)', () => {
		assertFailureMessage(userRole, 1, [UserRoleError.TYPE])
		assertFailureMessage(guestRole, 1, [UserRoleError.TYPE])
		assertFailureMessage(adminRole, 1, [UserRoleError.TYPE])
	})
})
