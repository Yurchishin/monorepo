import {userRole, guestRole, adminRole} from './UserRole'
import {assertSuccess, assertFailure, assertSuccessMessage} from "../../utils"
import { UserRoleError } from "@monorepo/dictionary";

describe('userRole', () => {
	it('right decode (\'admin\')', () => {
		assertSuccess(userRole, 'admin')
		assertFailure(guestRole, 'admin', 1)
		assertSuccess(adminRole, 'admin')
	})

	it('right decode (\'guest\')', () => {
		assertSuccess(userRole, 'guest')
		assertSuccess(guestRole, 'guest')
		assertFailure(adminRole, 'guest', 1)
	})

	it('left decode (\'other\')', () => {
		assertFailure(userRole, 'other', 1)
		assertFailure(guestRole, 'other', 1)
		assertFailure(adminRole, 'other', 1)
	})

	it('left decode (1)', () => {
		assertFailure(userRole, 1, 1)
		assertFailure(guestRole, 1, 1)
		assertFailure(adminRole, 1, 1)
	})

	it('left decode error message (\'other\')', () => {
		assertSuccessMessage(userRole, 'other', [
			UserRoleError.TYPE,
		])
		assertSuccessMessage(guestRole, 'other', [
			UserRoleError.TYPE,
		])
		assertSuccessMessage(adminRole, 'other', [
			UserRoleError.TYPE,
		])
	})

	it('left decode error message (1)', () => {
		assertSuccessMessage(userRole, 1, [
			UserRoleError.TYPE,
		])
		assertSuccessMessage(guestRole, 1, [
			UserRoleError.TYPE,
		])
		assertSuccessMessage(adminRole, 1, [
			UserRoleError.TYPE,
		])
	})
})
