export const UserPasswordRange = {
    MIN: 8,
    MAX: 20,
}

export const UserPasswordRegExp = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'

export const UserPasswordError = {
    TYPE: 'Wrong password type',
    MIN_LENGTH: 'Wrong password type min length',
    MAX_LENGTH: 'Wrong password type max length',
    REG_EXP: 'Wrong password format',
}
