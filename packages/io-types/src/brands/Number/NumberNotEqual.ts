import * as t from 'io-ts'

export interface INumberNotEqualLengthBrand {
    readonly NumberNotEqualLength: unique symbol
}

export const numberNotEqual = (value: number) => t.brand(
    t.number,
    (n): n is t.Branded<number, INumberNotEqualLengthBrand> => n !== value,
    'NumberNotEqualLength',
)
