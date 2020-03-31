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

    static stringify(body: Option<object> = None) {
        body.map(JSON.stringify)

        return HttpBody.of(body.map(JSON.stringify))
    }

    equals(b: HttpBody) {
        return this._value.equals(b._value)
    }

    map<B extends BodyInit>(f: (a: BodyInit) => B) {
        this._value.map(f)

        return this
    }

    orUndefined() {
        return this._value.orUndefined()
    }

    get() {
        return this._value.get()
    }
}

export default HttpBody
