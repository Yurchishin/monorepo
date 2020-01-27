import {stringNotEqualLength} from './StringNotEqualLength'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringNotEqualLength(5)', () => {
	const notEq5 = stringNotEqualLength(5)

	it('right decode (\'666666\')', () => {
		assertSuccess(notEq5, '666666')
	})

	it('left decode (\'55555\')', () => {
		assertFailure(notEq5, '55555', 1)
	})

	it('right decode (\'4444\')', () => {
		assertSuccess(notEq5, '4444')
	})

	it('left decode (1)', () => {
		assertFailure(notEq5, 1, 1)
	})
})
