import { NumberGTE } from './NumberGTE'
import { expectTypeSuccess, expectTypeFailure } from "../../tests"

describe('NumberGTE(5)', () => {
	const GTE5 = NumberGTE(5)

	expectTypeSuccess(GTE5, 6000)
	expectTypeSuccess(GTE5, 5)
	expectTypeFailure(GTE5, 4)
	expectTypeFailure(GTE5, '1')
})
