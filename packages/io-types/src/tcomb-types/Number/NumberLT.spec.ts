import {NumberLT} from './NumberLT'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('NumberLT(5)', () => {
	const LT5 = NumberLT(5)

	expectTypeSuccess(LT5, -1)
	expectTypeFailure(LT5, 5)
	expectTypeFailure(LT5, 6)
	expectTypeFailure(LT5, '1')
})
