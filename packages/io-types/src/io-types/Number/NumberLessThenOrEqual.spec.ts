import {numberLessThenOrEqual} from './NumberLessThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('numberLessThenOrEqual(5)', () => {
	const maxOrEq5 = numberLessThenOrEqual(5)

	it('right decode (4)', () => {
		assertSuccess(maxOrEq5, 4)
	})

	it('right decode (5)', () => {
		assertSuccess(maxOrEq5, 5)
	})

	it('left decode (6)', () => {
		assertFailure(maxOrEq5, 6, 1)
	})

	it('left decode (\'1\')', () => {
		assertFailure(maxOrEq5, '1', 1)
	})
})
