import {NumberLTE} from './NumberLTE'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('NumberLTE(5)', () => {
	const LTE5 = NumberLTE(5)

	expectTypeSuccess(LTE5, -1)
	expectTypeSuccess(LTE5, 5)
	expectTypeFailure(LTE5, 6)
	expectTypeFailure(LTE5, '1')
})
