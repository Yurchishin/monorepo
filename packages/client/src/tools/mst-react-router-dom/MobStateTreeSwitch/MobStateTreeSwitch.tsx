import React, { Children, isValidElement } from 'react'
import { Switch } from 'react-router-dom'
import { useNSTNavigationStore } from '../useNSTNavigationStore'
import { TMobStateTreeSwitch } from './MobStateTreeSwitch.types'

const MobStateTreeSwitch: TMobStateTreeSwitch = ({ children, ...switchProps }) => {
    const navigationStore = useNSTNavigationStore()

    Children.toArray(children)
        .filter(isValidElement)
        .map((child => child.props))
        .forEach(console.log)

    return (
        <Switch {...switchProps}>
            {children}
        </Switch>
    )
}

export default MobStateTreeSwitch
