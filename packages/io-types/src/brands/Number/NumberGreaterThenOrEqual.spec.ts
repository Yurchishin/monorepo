import * as t from "io-ts"
import {numberGreaterThenOrEqual} from './NumberGreaterThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('numberGreaterThenOrEqual(5)', () => {
	const minOrEq5 = numberGreaterThenOrEqual(5)

	const numberMinOrEq5 = t.intersection([t.number, minOrEq5])

	it('right decode (6)', () => {
		assertSuccess(numberMinOrEq5, 6)
	})

	it('right decode (5)', () => {
		assertSuccess(numberMinOrEq5, 5)
	})

	it('left decode (4)', () => {
		assertFailure(numberMinOrEq5, 4, 1)
	})

	it('left decode (\'1\')', () => {
		assertFailure(numberMinOrEq5, '1', 2)
	})
})
