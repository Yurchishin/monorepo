import { Host } from "@monorepo/dictionary";
import { Localhost } from './Localhost'
import { expectTypeSuccess, expectTypeFailure } from "../../tests"

describe('Localhost', () => {
	expectTypeSuccess(Localhost, Host.LOCALHOST)
	expectTypeFailure(Localhost, 'other')
})
