import {StringGTE} from './StringGTE'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringGTE(5)', () => {
	const GTE5 = StringGTE(5)

	expectTypeSuccess(GTE5, '666666')
	expectTypeSuccess(GTE5, '55555')
	expectTypeFailure(GTE5, '4444')
	expectTypeFailure(GTE5, 1)
})
