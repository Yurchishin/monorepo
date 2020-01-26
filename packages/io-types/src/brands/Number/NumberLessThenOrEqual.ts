import * as t from 'io-ts'

export interface INumberLessThenOrEqualBrand {
    readonly NumberLessThenOrEqual: unique symbol
}

export const numberLessThenOrEqual = (max: number) => t.brand(
    t.number,
    (n): n is t.Branded<number, INumberLessThenOrEqualBrand> => n <= max,
    'NumberLessThenOrEqual',
)
