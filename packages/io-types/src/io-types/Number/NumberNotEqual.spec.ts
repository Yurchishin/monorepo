import {numberNotEqual} from './NumberNotEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('numberNotEqual(5)', () => {
	const notEq5 = numberNotEqual(5)

	it('right decode (4)', () => {
		assertSuccess(notEq5, 4)
	})

	it('right decode (5)', () => {
		assertFailure(notEq5, 5, 1)
	})

	it('right decode (6)', () => {
		assertSuccess(notEq5, 6)
	})

	it('left decode (\'1\')', () => {
		assertFailure(notEq5, '1', 1)
	})
})
