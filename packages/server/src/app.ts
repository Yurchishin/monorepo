import { httpListener, HttpMiddlewareEffect, RouteEffectGroup } from '@marblejs/core'
import { bodyParser$ } from '@marblejs/middleware-body'
import { api$ } from '@effects'

const middlewares: HttpMiddlewareEffect[] = [
    bodyParser$(),
]

const effects: RouteEffectGroup[] = [
    api$,
]


export default httpListener({ middlewares, effects })
