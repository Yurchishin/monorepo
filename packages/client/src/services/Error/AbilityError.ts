import R from '@chat/ramda'

class AbilityContext extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'AbilityContextError'
    }
}

export const AbilityContextError = R.construct(AbilityContext)
