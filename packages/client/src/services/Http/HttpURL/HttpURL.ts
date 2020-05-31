/* tslint:disable:no-this no-class variable-name no-if-statement */

class HttpURL {
    private _url: string
    private _base: string
    private _value: URL

    constructor(base: URL)
    constructor(base: string, url: string)
    constructor(base: string | URL, url: string = '') {
        if (base instanceof URL) {
            this._url = base.pathname
            this._base = base.origin
            this._value = base
        } else {
            this._url = url
            this._base = base
            this._value = new URL(this._url, this._base)
        }
    }

    static of(base: URL | string): HttpURL
    static of(base: string, url: string): HttpURL
    static of(base: string | URL, url: string = '') {
        return base instanceof URL ? new HttpURL(base) : new HttpURL(base, url)
    }

    chain(f: (url: string) => HttpURL) {
        return f(this._value.toString())
    }

    map(f: (url: URL) => URL) {
        this._value = f(this._value)
        this._url = this._value.pathname
        this._base = this._value.origin

        return this
    }

    mapOrigin(f: (origin: string) => string) {
        return this.origin(f(this._value.origin))
    }

    mapPathname(f: (pathname: string) => string) {
        return this.pathname(f(this._value.pathname))
    }

    origin(origin: string) {
        this._value = new URL(this._url, origin)
        this._url = this._value.pathname
        this._base = this._value.origin

        return this
    }

    pathname(pathname: string) {
        this._value = new URL(pathname, this._base)
        this._url = this._value.pathname
        this._base = this._value.origin

        return this
    }

    get() {
        return this._value.toString()
    }

    getOrigin() {
        return this._base
    }

    toNative() {
        return this._value
    }
}

export default HttpURL
