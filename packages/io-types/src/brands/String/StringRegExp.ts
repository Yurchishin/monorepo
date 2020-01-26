import * as t from 'io-ts'

export interface IStringRegExpBrand {
    readonly StringRegExp: unique symbol
}

export const stringRegExp = (regExp: RegExp) => t.brand(
    t.string,
    (n): n is t.Branded<string, IStringRegExpBrand> => regExp.test(n),
    'StringRegExp',
)
