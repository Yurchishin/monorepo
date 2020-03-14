import {StringLTE} from './StringLTE'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('StringLTE(5)', () => {
	const LTE5 = StringLTE(5)

	expectTypeSuccess(LTE5, '4444')
	expectTypeSuccess(LTE5, '55555')
	expectTypeFailure(LTE5, '666666')
	expectTypeFailure(LTE5, 1)
})
