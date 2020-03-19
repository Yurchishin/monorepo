import { useContext } from 'react'
import { AbilityContextError } from '@client/services'

import { AbilityContext } from '../AbilityProvider/AbilityProvider.constants'
import { TUseAbility } from './useAbility.types'

const useAbility: TUseAbility = () => {
    const ability = useContext(AbilityContext)

    if (!ability) {
        throw AbilityContextError('bility is empty')
    }

    return [ ability.value, ability.setAbility ]
}

export default useAbility
