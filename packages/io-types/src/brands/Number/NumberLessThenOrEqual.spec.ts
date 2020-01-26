import * as t from "io-ts"
import {numberLessThenOrEqual} from './NumberLessThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('numberLessThenOrEqual(5)', () => {
	const maxOrEq5 = numberLessThenOrEqual(5)

	const numberMaxOrEq5 = t.intersection([t.number, maxOrEq5])

	it('right decode (4)', () => {
		assertSuccess(numberMaxOrEq5, 4)
	})

	it('right decode (5)', () => {
		assertSuccess(numberMaxOrEq5, 5)
	})

	it('left decode (6)', () => {
		assertFailure(numberMaxOrEq5, 6, 1)
	})

	it('left decode (\'1\')', () => {
		assertFailure(numberMaxOrEq5, '1', 2)
	})
})
