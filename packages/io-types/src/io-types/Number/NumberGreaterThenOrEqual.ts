import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface INumberGreaterThenOrEqualC extends t.Type<number> {}

export const numberGreaterThenOrEqual = (min: number): INumberGreaterThenOrEqualC => new t.Type<number>(
    'NumberGreaterThenOrEqual',
    t.number.is,
    (u, c) =>
        E.either.chain(
            t.number.validate(u, c),
            s => s >= min ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
