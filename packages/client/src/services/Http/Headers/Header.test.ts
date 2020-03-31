import HeadersAdapter from './Headers'
import { HttpHeadersMergeType, HttpHeadersName } from './Headers.types'

describe('HeadersAdapter', () => {
    describe ('CREATE:', () => {
        it('new', () => {
            expect(() => new HeadersAdapter()).not.toThrow()
            expect(() => new HeadersAdapter({})).not.toThrow()
            expect(() => new HeadersAdapter(new Headers({}))).not.toThrow()
        })

        it('of', () => {
            expect(() => HeadersAdapter.of()).not.toThrow()
            expect(() => HeadersAdapter.of({})).not.toThrow()
            expect(() => HeadersAdapter.of(new Headers({}))).not.toThrow()
        })
    })

    describe ('METHODS:', () => {
        describe ('merge', () => {
            it('SET', () => {
                const headers = HeadersAdapter.of()

                headers.merge(HttpHeadersName.ContentType, 'text/html; charset=UTF-8')
                headers.merge(HttpHeadersName.ContentType, 'text/html')

                expect(headers.get(HttpHeadersName.ContentType)).toBe('text/html')
            })

            it('APPEND', () => {
                const headers = HeadersAdapter.of()

                headers.merge(HttpHeadersName.ContentType, 'text/html', HttpHeadersMergeType.APPEND)
                headers.merge(HttpHeadersName.ContentType, 'charset=UTF-8', HttpHeadersMergeType.APPEND)

                expect(headers.get(HttpHeadersName.ContentType)).toBe('text/html, charset=UTF-8')
            })
        })
    })
})
