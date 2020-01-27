import {stringLessThenOrEqual} from './StringLessThenOrEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringLessThenOrEqual(5)', () => {
	const maxOrEq5 = stringLessThenOrEqual(5)

	it('left decode (\'666666\')', () => {
		assertFailure(maxOrEq5, '666666', 1)
	})

	it('right decode (\'55555\')', () => {
		assertSuccess(maxOrEq5, '55555')
	})

	it('right decode (\'4444\')', () => {
		assertSuccess(maxOrEq5, '4444')
	})

	it('left decode (1)', () => {
		assertFailure(maxOrEq5, 1, 1)
	})
})
