import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface IStringGreaterThenOrEqualC extends t.Type<string> {}

export const stringGreaterThenOrEqual = (min: number): IStringGreaterThenOrEqualC => new t.Type<string>(
    'StringGreaterThenOrEqual',
    t.string.is,
    (u, c) =>
        E.either.chain(
            t.string.validate(u, c),
            s => s.length >= min ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
