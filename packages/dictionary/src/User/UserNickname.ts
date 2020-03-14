export const UserNicknameRange = {
    MIN: 5,
    MAX: 20,
}

export const UserNicknameRegExp = new RegExp('^[^0-9][^@#_-]+$')

export const UserNicknameError = {
    TYPE: 'Wrong nickname type',
    MIN_LENGTH: 'Wrong nickname type min length',
    MAX_LENGTH: 'Wrong nickname type max length',
    REG_EXP: 'Wrong nickname format',
}
