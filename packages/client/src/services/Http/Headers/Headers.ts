/* tslint:disable:no-this no-loop-statement no-class */
import { HttpHeadersName, HttpHeadersMergeType } from './Headers.types'

class HeadersAdapter extends Headers {
    constructor(init: PartialRecord<HttpHeadersName, string> | Headers = {}) {
        super(init as Record<string, string>)
    }

    static of(init: PartialRecord<HttpHeadersName, string> | Headers = {}) {
        return new HeadersAdapter(init)
    }

    merge(name: HttpHeadersName, value: string, mergeType: HttpHeadersMergeType = HttpHeadersMergeType.SET) {
        this[mergeType](name, value)

        return this
    }
}

export default HeadersAdapter
