import {stringGreaterThenOrEqual} from './StringGreaterThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringGreaterThenOrEqual(5)', () => {
	const minOrEq5 = stringGreaterThenOrEqual(5)

	it('right decode (\'666666\')', () => {
		assertSuccess(minOrEq5, '666666')
	})

	it('right decode (\'55555\')', () => {
		assertSuccess(minOrEq5, '55555')
	})

	it('left decode (\'4444\')', () => {
		assertFailure(minOrEq5, '4444', 1)
	})

	it('left decode (1)', () => {
		assertFailure(minOrEq5, 1, 1)
	})
})
