import * as t from 'io-ts'

export interface IStringNotEqualLengthBrand {
    readonly StringNotEqualLength: unique symbol
}

export const stringNotEqualLength = (value: number) => t.brand(
    t.string,
    (n): n is t.Branded<string, IStringNotEqualLengthBrand> => n.length !== value,
    'StringNotEqualLength',
)
