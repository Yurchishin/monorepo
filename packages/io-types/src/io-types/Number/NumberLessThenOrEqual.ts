import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface INumberLessThenOrEqualC extends t.Type<number> {}

export const numberLessThenOrEqual = (max: number): INumberLessThenOrEqualC => new t.Type<number>(
    'NumberLessThenOrEqual',
    t.number.is,
    (u, c) =>
        E.either.chain(
            t.number.validate(u, c),
            s => s <= max ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
