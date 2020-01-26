import * as t from "io-ts"
import {stringLessThenOrEqual} from './StringLessThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringLessThenOrEqual(5)', () => {
	const maxOrEq5 = stringLessThenOrEqual(5)

	const stringMaxOrEq5 = t.intersection([t.string, maxOrEq5])

	it('left decode (\'666666\')', () => {
		assertFailure(stringMaxOrEq5, '666666', 1)
	})

	it('right decode (\'55555\')', () => {
		assertSuccess(stringMaxOrEq5, '55555')
	})

	it('right decode (\'4444\')', () => {
		assertSuccess(stringMaxOrEq5, '4444')
	})

	it('left decode (1)', () => {
		assertFailure(stringMaxOrEq5, 1, 2)
	})
})
