import { Host } from "@chat/dictionary";
import { Localhost } from './Localhost'
import { expectTypeSuccess, expectTypeFailure } from "../../tests"

describe('Localhost', () => {
	expectTypeSuccess(Localhost, Host.LOCALHOST)
	expectTypeFailure(Localhost, 'other')
})
