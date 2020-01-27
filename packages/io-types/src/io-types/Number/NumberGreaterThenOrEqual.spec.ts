import {numberGreaterThenOrEqual} from './NumberGreaterThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('numberGreaterThenOrEqual(5)', () => {
	const minOrEq5 = numberGreaterThenOrEqual(5)

	it('right decode (6)', () => {
		assertSuccess(minOrEq5, 6)
	})

	it('right decode (5)', () => {
		assertSuccess(minOrEq5, 5)
	})

	it('left decode (4)', () => {
		assertFailure(minOrEq5, 4, 1)
	})

	it('left decode (\'1\')', () => {
		assertFailure(minOrEq5, '1', 1)
	})
})
