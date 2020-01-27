import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface IStringLessThenOrEqualC extends t.Type<string> {}

export const stringLessThenOrEqual = (max: number): IStringLessThenOrEqualC => new t.Type<string>(
    'StringLessThenOrEqual',
    t.string.is,
    (u, c) =>
        E.either.chain(
            t.string.validate(u, c),
            s => s.length <= max ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
