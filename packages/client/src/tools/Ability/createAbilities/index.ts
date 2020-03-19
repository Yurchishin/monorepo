/* tslint:disable:no-any */
import { AbilityBuilder } from '@casl/ability'

export type Ability = {
    action: string;
    subject: any;
    field?: string;
}
export type CanAbility = (action: string, subject: any, field?: string) => boolean

const createAbilities = <R extends string>(abilities: Record<R | 'COMMON', Ability[]>, role: R) => {
    const COMMON_ABILITIES = abilities.COMMON || []
    const ROLE_ABILITIES = abilities[role] || []
    const ALL_ROLE_ABILITIES = [...COMMON_ABILITIES, ...ROLE_ABILITIES]

    return AbilityBuilder.define((can: CanAbility) => ALL_ROLE_ABILITIES.map(ability => can(
        ability.action,
        ability.subject,
        ability.field,
    )))
}

export default createAbilities
