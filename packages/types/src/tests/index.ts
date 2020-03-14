/* eslint-disable jest/no-export */
/* tslint:disable */
import {validate, Type} from 'tcomb-validation'

export const expectTypeSuccess = (type: Type<any>, value: any) => {
	it(`expectTypeSuccess(${value})`, () => {
		const result = validate(value, type)

		expect(result.isValid()).toBeTruthy()
		expect(result.firstError()).toBeNull()
		expect(result.errors).toHaveLength(0)
	})
}

export const expectTypeFailure = (type: Type<any>, value: any) => {
	it(`expectTypeFailure(${value})`, () => {
		const result = validate(value, type)

		expect(result.isValid()).toBeFalsy()
		expect(result).toMatchSnapshot(`TYPE_FAILURE::${type.displayName}(${value})`)
	})
}

export const expectTypeErrors = (type: Type<any>, value: any, errors: string[]) => {
	it(`expectTypeFailure(${value})`, () => {
		const result = validate(value, type)

		expect(result.isValid()).toBeFalsy()
		expect(result.errors.map(v => v.message)).toEqual(errors)
		expect(result).toMatchSnapshot(`TYPE_FAILURE::${type.displayName}(${value})`)
	})
}
