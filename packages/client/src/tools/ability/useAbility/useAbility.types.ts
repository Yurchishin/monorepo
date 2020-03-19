import { Dispatch, SetStateAction } from 'react'
import { Ability } from '@casl/ability'

export type TUseAbility = () => [ Ability, Dispatch<SetStateAction<Ability>> ]
