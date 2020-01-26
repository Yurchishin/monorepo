export const UserSurnameRange = {
    MIN: 3,
    MAX: 20,
}

export const UserSurnameRegExp = '^[a-zA-Z \'-]+$'

export const UserSurnameError = {
    TYPE: 'Wrong surname type',
    MIN_LENGTH: 'Wrong surname type min length',
    MAX_LENGTH: 'Wrong surname type max length',
    REG_EXP: 'Wrong surname format',
}
