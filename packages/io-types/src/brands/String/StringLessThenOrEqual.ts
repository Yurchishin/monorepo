import * as t from 'io-ts'

export interface IStringLessThenOrEqualBrand {
    readonly StringLessThenOrEqual: unique symbol
}

export const stringLessThenOrEqual = (max: number) => t.brand(
    t.string,
    (n): n is t.Branded<string, IStringLessThenOrEqualBrand> => n.length <= max,
    'StringLessThenOrEqual',
)
