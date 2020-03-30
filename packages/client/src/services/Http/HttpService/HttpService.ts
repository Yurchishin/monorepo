/* tslint:disable:no-this no-class */
import HttpURL from '../HttpURL'
import HttpMethod from '../HttpMethod'
import HttpHeaders from '../HttpHeaders'
import HttpRequest from '../HttpRequest'
import HttpFetch from '../HttpFetch'

class HttpService {
    url: HttpURL
    headers: HttpHeaders

    constructor(url: HttpURL, headers: HttpHeaders = HttpHeaders.of()) {
        this.url = url
        this.headers = headers
    }

    static of(url: HttpURL, headers: HttpHeaders = HttpHeaders.of()) {
        return new HttpService(url, headers)
    }

    static get(request: HttpRequest) {
        return HttpService.request(request.method(HttpMethod.GET))
    }

    static post(request: HttpRequest) {
        return HttpService.request(request.method(HttpMethod.POST))
    }

    static put(request: HttpRequest) {
        return HttpService.request(request.method(HttpMethod.PUT))
    }

    static patch(request: HttpRequest) {
        return HttpService.request(request.method(HttpMethod.PATCH))
    }

    static delete(request: HttpRequest) {
        return HttpService.request(request.method(HttpMethod.DELETE))
    }

    private static request(request: HttpRequest) {
        return HttpFetch(request)
    }

    mapURL(f: (a: HttpURL) => HttpURL) {
        this.url = f(this.url)

        return this
    }

    mapHeaders(f: (a: HttpHeaders) => HttpHeaders) {
        this.headers = f(this.headers)

        return this
    }

    get(request: HttpRequest) {
        return this.request(request.method(HttpMethod.GET))
    }

    post(request: HttpRequest) {
        return this.request(request.method(HttpMethod.POST))
    }

    put(request: HttpRequest) {
        return this.request(request.method(HttpMethod.PUT))
    }

    patch(request: HttpRequest) {
        return this.request(request.method(HttpMethod.PATCH))
    }

    delete(request: HttpRequest) {
        return this.request(request.method(HttpMethod.DELETE))
    }

    private request(request: HttpRequest) {
        request.mapHeaders(headers => headers.concat(this.headers))

        request.mapURL(url => url.origin(this.url.getOrigin()))

        return HttpFetch(request)
    }
}

export default HttpService
