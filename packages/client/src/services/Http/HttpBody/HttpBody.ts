/* tslint:disable:no-this no-class variable-name */
import { Option, None } from '@chat/ramda'

class HttpBody {
    private _value: Option<BodyInit> = None

    constructor(body: Option<BodyInit> = None) {
        this._value = body
    }

    static of(body: Option<BodyInit> = None) {
        return new HttpBody(body)
    }

    equals(b: HttpBody) {
        return this._value.equals(b._value)
    }

    stringify() {
        this.map(JSON.stringify)

        return this
    }

    map<B extends BodyInit>(f: (a: BodyInit) => B) {
        this._value.map(f)

        return this
    }

    orUndefined() {
        return this._value.orUndefined()
    }

    get() {
        return this._value
    }
}

export default HttpBody
