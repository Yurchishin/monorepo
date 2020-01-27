import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

export interface IStringRegExpC extends t.Type<string> {}

export const stringRegExp = (regExp: RegExp): IStringRegExpC => new t.Type<string>(
    'StringRegExp',
    t.string.is,
    (u, c) =>
        E.either.chain(
            t.string.validate(u, c),
            s => regExp.test(s) ? t.success(s) : t.failure(u, c),
        ),
    t.identity,
)
