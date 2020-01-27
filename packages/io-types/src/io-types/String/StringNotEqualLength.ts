import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface IUserEmailC extends t.Type<string> {}

export const stringNotEqualLength = (value: number): IUserEmailC => new t.Type<string>(
    'StringGreaterThenOrEqual',
    t.string.is,
    (u, c) =>
        E.either.chain(
            t.string.validate(u, c),
            s => s.length !== value ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
