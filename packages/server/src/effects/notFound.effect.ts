import { HttpError, HttpStatus, HttpEffect } from '@marblejs/core'
import * as IO from 'fp-ts/lib/IO'
import { switchMap } from 'rxjs/operators'
import { throwError } from 'rxjs'

export const notFoundEffect$: HttpEffect = req$ =>
    req$.pipe(
        switchMap(
            IO.of(
                throwError(
                    new HttpError('Route not found', HttpStatus.NOT_FOUND)
                )
            )
        )
    )
