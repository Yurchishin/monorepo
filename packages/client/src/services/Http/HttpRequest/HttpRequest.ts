/* tslint:disable:no-this no-class variable-name */
import HttpURL from '../HttpURL'
import HttpBody from '../HttpBody'
import HttpMethod from '../HttpMethod'
import HttpHeaders from '../HttpHeaders'
import { HttpRequestInit, HttpRequestOptions } from './HttpRequest.types'

class HttpRequest {
    private _value: Request
    private _url: HttpURL
    private _headers: HttpHeaders
    private _body: HttpBody
    private _method: HttpMethod
    private readonly _options: HttpRequestOptions
    private readonly _abortController: AbortController

    constructor(init: HttpRequestInit) {
        const { url, headers = HttpHeaders.of(), method = HttpMethod.GET, body = HttpBody.of(), ...restOption } = init
        this._abortController = new AbortController()

        this._url = url
        this._headers = headers
        this._body = body
        this._method = method
        this._options = restOption

        this._value = new Request(this._url.get(), {
            method: this._method,
            headers: this._headers.toNative(),
            body: this._body.orUndefined(),
            signal: this._abortController.signal,
            ...this._options,
        })
    }

    static of(init: HttpRequestInit) {
        return new HttpRequest(init)
    }

    chain(f: (a: Request) => HttpRequest) {
        return f(this._value)
    }

    map<T>(f: (a: Request) => Request) {
        this._value = f(this._value)

        return this
    }

    mapURL(f: (a: HttpURL) => HttpURL) {
        return this.url(f(this._url))
    }

    mapMethod(f: (a: HttpMethod) => HttpMethod) {
        return this.method(f(this._method))
    }

    mapHeaders(f: (a: HttpHeaders) => HttpHeaders) {
        return this.headers(f(this._headers))
    }

    mapBody(f: (a: HttpBody) => HttpBody) {
        return this.body(f(this._body))
    }

    url(url: HttpURL) {
        this._url = url
        this.createRequest()

        return this
    }

    method(method: HttpMethod) {
        this._method = method
        this.createRequest()

        return this
    }

    headers(headers: HttpHeaders) {
        this._headers = headers
        this.createRequest()

        return this
    }

    body(body: HttpBody) {
        this._body = body
        this.createRequest()

        return this
    }

    cancel() {
        this._abortController.abort()

        return this
    }

    toNative() {
        return this._value
    }

    private createRequest() {
        this._value = new Request(this._url.get(), {
            method: this._method,
            headers: this._headers.toNative(),
            body: this._body.orUndefined(),
            signal: this._abortController.signal,
            ...this._options,
        })
    }
}

export default HttpRequest
