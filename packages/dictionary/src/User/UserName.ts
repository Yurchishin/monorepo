export const UserNameRange = {
    MIN: 3,
    MAX: 20,
}

export const UserNameRegExp = new RegExp('^[a-zA-Z \'-]+$')

export const UserNameError = {
    TYPE: 'Wrong name type',
    MIN_LENGTH: 'Wrong name type min length',
    MAX_LENGTH: 'Wrong name type max length',
    REG_EXP: 'Wrong name format',
}
