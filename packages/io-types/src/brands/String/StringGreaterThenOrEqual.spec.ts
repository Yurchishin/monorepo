import * as t from "io-ts"
import {stringGreaterThenOrEqual} from './StringGreaterThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringGreaterThenOrEqual(5)', () => {
	const minOrEq5 = stringGreaterThenOrEqual(5)

	const stringMinOrEq5 = t.intersection([t.string, minOrEq5])

	it('right decode (\'666666\')', () => {
		assertSuccess(stringMinOrEq5, '666666')
	})

	it('right decode (\'55555\')', () => {
		assertSuccess(stringMinOrEq5, '55555')
	})

	it('left decode (\'4444\')', () => {
		assertFailure(stringMinOrEq5, '4444', 1)
	})

	it('left decode (1)', () => {
		assertFailure(stringMinOrEq5, 1, 2)
	})
})
