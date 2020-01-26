import * as t from 'io-ts'

export interface IStringGreaterThenOrEqualBrand {
    readonly StringGreaterThenOrEqual: unique symbol
}

export const stringGreaterThenOrEqual = (min: number) => t.brand(
    t.string,
    (n): n is t.Branded<string, IStringGreaterThenOrEqualBrand> => n.length >= min,
    'StringGreaterThenOrEqual',
)
