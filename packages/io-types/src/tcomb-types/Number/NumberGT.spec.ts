import { NumberGT } from './NumberGT'
import { expectTypeSuccess, expectTypeFailure } from "../../tests"

describe('NumberGT(5)', () => {
	const GT5 = NumberGT(5)

	expectTypeSuccess(GT5, 6000)
	expectTypeFailure(GT5, 5)
	expectTypeFailure(GT5, 4)
	expectTypeFailure(GT5, '1')
})
