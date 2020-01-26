import {host, localhost} from './Host'
import {assertSuccess, assertFailure} from "../../utils"
import { Host } from "@monorepo/dictionary";

describe('userAge', () => {
	it('right decode (\'localhost\')', () => {
		assertSuccess(host, Host.LOCALHOST)
		assertSuccess(localhost, Host.LOCALHOST)
	})

	it('right decode (\'other\')', () => {
		assertFailure(host, 'other', 2)
		assertFailure(localhost, 'other', 1)
	})
})
