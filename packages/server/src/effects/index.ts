import { combineRoutes, EffectFactory } from '@marblejs/core'
import { notFoundEffect$ } from './notFound.effect'

const notFound$ = EffectFactory
    .matchPath('*')
    .matchType('*')
    .use(notFoundEffect$)

export const api$ = combineRoutes('/', [
    notFound$
])
