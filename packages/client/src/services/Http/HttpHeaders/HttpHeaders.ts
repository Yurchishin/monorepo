/* tslint:disable:no-class no-this no-class variable-name no-if-statement */
import HeadersAdapter, { HttpHeadersName } from '../Headers'
import HttpHeader from '../HttpHeader'

class HttpHeaders {
    private _value: HttpHeader[] = []

    constructor(headers: HttpHeader[] | Headers | HeadersAdapter = []) {
        if (headers instanceof HeadersAdapter) this.fromNativeAdapter(headers)
        if (headers instanceof Headers) this.fromNative(headers)
        else this._value = headers
    }

    static of(headers: HttpHeader[] | Headers | HeadersAdapter = []) {
        return new HttpHeaders(headers)
    }

    concat(headers: HttpHeaders) {
        this.chain(v1 => headers.map(v2 => v2.concat(v1)))

        return this
    }

    chain(f: (a: HttpHeader[]) => HttpHeaders) {
        return f(this._value)
    }

    get() {
        return this._value
    }

    map(f: (a: HttpHeader[]) => HttpHeader[]) {
        this._value = f(this._value)

        return this
    }

    toNative() {
        return this._value
            .map(header => header.get())
            .reduce(
                (acc, header) => acc.merge(header.name, header.value, header.mergeType),
                HeadersAdapter.of(),
            )
    }

    private fromNative(nativeHeaders: Headers) {
        const headers = HeadersAdapter.of(nativeHeaders)

        const httpHeaders: HttpHeader[] = []

        // tslint:disable-next-line:no-loop-statement
        for (const [name, value] of headers.entries()) {
            httpHeaders.push(HttpHeader.of(name as HttpHeadersName, value))
        }

        return this._value = httpHeaders
    }

    private fromNativeAdapter(nativeHeaders: HeadersAdapter) {
        const httpHeaders: HttpHeader[] = []

        // tslint:disable-next-line:no-loop-statement
        for (const [name, value] of nativeHeaders.entries()) {
            httpHeaders.push(HttpHeader.of(name as HttpHeadersName, value))
        }

        return this._value = httpHeaders
    }
}

export default HttpHeaders
