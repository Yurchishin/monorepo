import { Some, None } from '@chat/ramda'
import HttpBody from './HttpBody'

const mockBodyData = { data: 'aaa' }
const mockBody = Some(JSON.stringify(mockBodyData))

describe('HttpBody', () => {
    describe('CREATE:', () => {
        it('new', () => {
            expect(() => new HttpBody()).not.toThrow()
            expect(() => new HttpBody(None)).not.toThrow()
            expect(() => new HttpBody(mockBody)).not.toThrow()
        })
        it('of', () => {
            expect(() => HttpBody.of()).not.toThrow()
            expect(() => HttpBody.of(None)).not.toThrow()
            expect(() => HttpBody.of(mockBody)).not.toThrow()
        })
        it('stringify', () => {
            expect(() => HttpBody.stringify()).not.toThrow()
            expect(() => HttpBody.stringify(None)).not.toThrow()
            expect(() => HttpBody.stringify(Some(mockBody))).not.toThrow()
        })
    })

    describe('METHODS:', () => {
        it('equals', () => {
            const body = HttpBody.of(mockBody)
            const body2 = HttpBody.of(mockBody)
            const body3 = HttpBody.of(Some(JSON.stringify({ data: 'bbb' })))
            expect(body.equals(body2)).toBeTruthy()
            expect(body.equals(body3)).toBeFalsy()

            const bodyEmpty = HttpBody.of()
            expect(bodyEmpty.equals(body3)).toBeFalsy()
        })
    })
})
