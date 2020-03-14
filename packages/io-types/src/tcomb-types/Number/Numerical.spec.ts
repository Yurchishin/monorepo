import {Numerical} from './Numerical'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('Numerical(5)', () => {
	const Number5 = Numerical(5)

	expectTypeSuccess(Number5, 5)
	expectTypeFailure(Number5, 4)
	expectTypeFailure(Number5, 6)
	expectTypeFailure(Number5, '1')
})

