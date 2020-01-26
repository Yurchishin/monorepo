/* tslint:disable:no-throw no-expression-statement no-any no-if-statement triple-equals no-console */
import * as assert from 'assert'
import { fold } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'

export function assertStrictEqual<T>(result: t.Validation<T>, expected: any): void {
    pipe(
        result,
        fold(
            () => {
                throw new Error(`${result} is not a right`)
            },
            a => {
                assert.deepStrictEqual(a, expected)
            },
        ),
    )
}

export function assertSuccess(codec: t.Any, value: unknown): void {
    const result = codec.decode(value)
    pipe(
        result,
        fold(
            _ => {
                throw new Error(`${result} is not a right`)
            },
            _ => {},
        ),
    )
}

export function assertStrictSuccess<T>(result: t.Validation<T>, expected: T): void {
    pipe(
        result,
        fold(
            () => {
                throw new Error(`${result} is not a right`)
            },
            a => {
                if (expected !== undefined) assert.strictEqual(a, expected)
            },
        ),
    )
}

export function assertFailure(codec: t.Any, value: unknown, errorsLength: number): void {
    const result = codec.decode(value)
    pipe(
        result,
        fold(
            () => {
                const report = PathReporter.report(result)
                if (report.length !== errorsLength) console.log(codec.name, report)
                assert.equal(report.length, errorsLength)
            },
            () => {
                throw new Error(`${result} is not a left`)
            },
        ),
    )
}

export function assertSuccessMessage(codec: t.Any, value: unknown, messages: string[]): void {
    const result = codec.decode(value)
    pipe(
        result,
        fold(
            () => {
                const report = PathReporter.report(result)
                assert.deepEqual(report, messages)
            },
            () => {
                throw new Error(`${result} is not a left`)
            },
        ),
    )
}

export function withDefault<T extends t.Mixed>(
    type: T,
    defaultValue: t.TypeOf<T>,
): t.Type<t.TypeOf<T>, t.TypeOf<T>, unknown> {
    return new t.Type(
        `withDefault(${type.name}, ${JSON.stringify(defaultValue)})`,
        type.is,
        v => type.decode(v != undefined ? v : defaultValue),
        type.encode,
    )
}
