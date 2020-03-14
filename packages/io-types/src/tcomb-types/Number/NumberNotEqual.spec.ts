import {NumberNotEqual} from './NumberNotEqual'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('NumberNotEqual(5)', () => {
	const notEq5 = NumberNotEqual(5)

	expectTypeSuccess(notEq5, 4)
	expectTypeSuccess(notEq5, 6)
	expectTypeFailure(notEq5, 5)
	expectTypeFailure(notEq5, '1')
})

