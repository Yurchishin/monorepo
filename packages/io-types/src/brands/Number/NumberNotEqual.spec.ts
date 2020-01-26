import * as t from "io-ts"
import {numberNotEqual} from './NumberNotEqual'
import {assertSuccess, assertFailure} from "../../utils"

describe('numberNotEqual(5)', () => {
	const notEq5 = numberNotEqual(5)

	const numberNotEq5Test = t.intersection([t.number, notEq5])

	it('right decode (4)', () => {
		assertSuccess(numberNotEq5Test, 4)
	})

	it('right decode (5)', () => {
		assertFailure(numberNotEq5Test, 5, 1)
	})

	it('right decode (6)', () => {
		assertSuccess(numberNotEq5Test, 6)
	})

	it('left decode (\'1\')', () => {
		assertFailure(numberNotEq5Test, '1', 2)
	})
})
