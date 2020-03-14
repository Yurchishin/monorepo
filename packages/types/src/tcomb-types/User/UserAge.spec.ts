import { UserAge } from './UserAge'
import { UserAgeError } from "@chat/dictionary";
import { expectTypeSuccess, expectTypeErrors } from "../../tests"

describe('UserAge', () => {
	expectTypeSuccess(UserAge, 12)
	expectTypeSuccess(UserAge, 30)
	expectTypeSuccess(UserAge, 60)
	expectTypeSuccess(UserAge, undefined)
	expectTypeErrors(UserAge, 11, [UserAgeError.MIN])
	expectTypeErrors(UserAge, 61, [UserAgeError.MAX])
	expectTypeErrors(UserAge, '30', [UserAgeError.TYPE, UserAgeError.MAX, UserAgeError.MIN])
	expectTypeErrors(UserAge, '11', [UserAgeError.TYPE, UserAgeError.MAX, UserAgeError.MIN])
	expectTypeErrors(UserAge, '61', [UserAgeError.TYPE, UserAgeError.MAX, UserAgeError.MIN])
})
