import * as t from "io-ts"
import {stringNotEqualLength} from './StringNotEqualLength'
import {assertSuccess, assertFailure} from "../../utils"

describe('stringNotEqualLength(5)', () => {
	const notEq5 = stringNotEqualLength(5)

	const stringNotEq5 = t.intersection([t.string, notEq5])

	it('right decode (\'666666\')', () => {
		assertSuccess(stringNotEq5, '666666')
	})

	it('left decode (\'55555\')', () => {
		assertFailure(stringNotEq5, '55555', 1)
	})

	it('right decode (\'4444\')', () => {
		assertSuccess(stringNotEq5, '4444')
	})

	it('left decode (1)', () => {
		assertFailure(stringNotEq5, 1, 2)
	})
})
