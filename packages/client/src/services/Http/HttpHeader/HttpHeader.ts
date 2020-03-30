/* tslint:disable:no-this variable-name no-class */
import { HttpHeadersName, HttpHeadersMergeType } from '../Headers'
import { HttpHeaderValue } from './HttpHeader.types'

class HttpHeader {
    private _value: HttpHeaderValue

    constructor(name: HttpHeadersName, value: string, mergeType: HttpHeadersMergeType = HttpHeadersMergeType.SET) {
        this._value = { name, value, mergeType }
    }

    static SET: HttpHeadersMergeType = HttpHeadersMergeType.SET

    static APPEND: HttpHeadersMergeType = HttpHeadersMergeType.APPEND

    static of(name: HttpHeadersName, value: string, mergeType: HttpHeadersMergeType = HttpHeadersMergeType.SET) {
        return new HttpHeader(name, value, mergeType)
    }

    get() {
        return this._value
    }

    map(f: (a: HttpHeaderValue) => HttpHeaderValue) {
        this._value = f(this._value)

        return this
    }

    mapName(f: (a: HttpHeadersName, v: HttpHeaderValue) => HttpHeadersName) {
        this.name(f(this._value.name, this._value))

        return this
    }

    mapValue(f: (a: string, v: HttpHeaderValue) => string) {
        this.value(f(this._value.value, this._value))

        return this
    }

    mapMergeType(f: (a: HttpHeadersMergeType, v: HttpHeaderValue) => HttpHeadersMergeType) {
        this.mergeType(f(this._value.mergeType, this._value))

        return this
    }

    name(name: HttpHeadersName) {
        this._value = { ...this._value, name }

        return this
    }

    value(value: string) {
        this._value = { ...this._value, value }

        return this
    }

    mergeType(mergeType: HttpHeadersMergeType) {
        this._value = { ...this._value, mergeType }

        return this
    }
}

export default HttpHeader
