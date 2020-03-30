import {
    HttpHeader,
    HttpHeaders,
    HttpHeadersName,
    HttpRequest,
    HttpService,
    HttpURL,
} from '@client/services'
import { Success, Failure, Future } from '@chat/ramda'

const BaseRepository = HttpService.of(HttpURL.of('http://localhost:3000/'))

const UserRepository = BaseRepository

const getAll = () => {
    const headers = HttpHeaders.of([
        HttpHeader.of(HttpHeadersName.ContentType, 'asd', HttpHeader.SET),
    ])

    const request = HttpRequest.of({
        url: UserRepository.url,
        headers,
    })

    return UserRepository.get(request)
        .chain(a => Future.fromPromise(a.json()))
}
