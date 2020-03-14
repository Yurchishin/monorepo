/* tslint:disable:no-any */
/* tslint:disable:no-object-mutation */
import { Type } from 'tcomb-validation'

type Path = Array<string | number>
type ErrorCallback<T> = (actual: T, path: Path, context: any) => string

export const addErrorMessage = <T extends Type<any>>(
    type: T,
    message: string,
): T => {
    // tslint:disable-next-line:no-expression-statement
    type.getValidationErrorMessage = _ => message

    return type
}

export const addErrorCallback = <T extends Type<any>>(
    type: T,
    callback: ErrorCallback<T>,
): T => {
    // tslint:disable-next-line:no-expression-statement
    type.getValidationErrorMessage = callback

    return type
}
