import { Dispatch, FC, SetStateAction } from 'react'
import { Ability } from '@casl/ability'

export type TAbilityProviderProps = {
    ability: Ability;
}

export type TAbilityProvider = FC<TAbilityProviderProps>

export type TAbilityContextValue = {
    value: Ability;
    setAbility: Dispatch<SetStateAction<Ability>>;
} | null
