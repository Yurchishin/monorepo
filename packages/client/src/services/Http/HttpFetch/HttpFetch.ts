/* eslint-disable promise/no-callback-in-promise */
import { Cancelable, Failure, Future, Success, Scheduler } from '@chat/ramda'
import HttpRequest from '../HttpRequest'

const HttpFetch = (request: HttpRequest, ec?: Scheduler) => Future.create<Response>(
    cb => {
        fetch(request.toNative())
            .then(value => cb(Success(value)))
            .catch(error => cb(Failure(error)))

        return Cancelable.of(request.cancel)
    },
    ec,
)

export default HttpFetch
