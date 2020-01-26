import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'
import isEmail from 'validator/lib/isEmail'
import { withMessage } from 'io-ts-types/lib/withMessage'
import { UserEmailError } from '@monorepo/dictionary'

export interface IUserEmailC extends t.Type<string> {}

export const userEmail: IUserEmailC = new t.Type<string>(
    'UserEmail',
    t.string.is,
    (u, c) =>
        E.either.chain(
            withMessage(t.string, () => UserEmailError.TYPE)
                .validate(u, c),
            s => isEmail(s) ? t.success(s) : t.failure(u, c, UserEmailError.REG_EXP),
        ),
    t.identity,
)

export type TUserEmail = t.TypeOf<typeof userEmail>
