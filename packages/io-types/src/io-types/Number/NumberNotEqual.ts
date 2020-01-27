import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface INumberNotEqualC extends t.Type<number> {}

export const numberNotEqual = (value: number): INumberNotEqualC => new t.Type<number>(
    'NumberNotEqual',
    t.number.is,
    (u, c) =>
        E.either.chain(
            t.number.validate(u, c),
            s => s !== value ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
