import {Literal} from './Literal'
import {expectTypeSuccess, expectTypeFailure} from "../../tests"

describe('Literal(\'literal\')', () => {
	const literal = Literal('literal')

	expectTypeSuccess(literal, 'literal')

	const literal2 = Literal('literal2', 'Name')
	expectTypeFailure(literal2, 'other')
	expectTypeFailure(literal2, 1)
})
