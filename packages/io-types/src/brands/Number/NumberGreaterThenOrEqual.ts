import * as t from 'io-ts'

export interface INumberGreaterThenOrEqualBrand {
    readonly NumberGreaterThenOrEqual: unique symbol
}

export const numberGreaterThenOrEqual = (min: number) => t.brand(
    t.number,
    (n): n is t.Branded<number, INumberGreaterThenOrEqualBrand> => n >= min,
    'NumberGreaterThenOrEqual',
)
