import { useMemo } from 'react'
import { AbilityContextError } from '@client/services'

import { TUseCanAbility } from './useCanAbility.types'
import { useAbility } from '../index'

const useCan: TUseCanAbility = (action, subject, field) => {
    const [ ability ] = useAbility()

    if (!ability) {
        throw AbilityContextError('Ability is empty')
    }

    return useMemo(
        () => ability.can(action, subject, field),
        [action, subject, field, ability],
    )
}

export default useCan
