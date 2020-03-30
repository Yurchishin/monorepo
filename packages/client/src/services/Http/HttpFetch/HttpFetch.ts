/* eslint-disable promise/no-callback-in-promise */
import { Cancelable, Failure, Future, Success } from '@chat/ramda'
import HttpRequest from '../HttpRequest'

const HttpFetch = (request: HttpRequest) => Future.create<Response>(
    cb => {
        fetch(request.toNative())
            .then(value => cb(Success(value)))
            .catch(error => cb(Failure(error)))

        return Cancelable.of(request.cancel)
    },
)

export default HttpFetch
