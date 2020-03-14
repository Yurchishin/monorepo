/* tslint:disable:no-any */
import { Type } from 'tcomb-validation'

export type TypeOf<T extends Type<any>> = ReturnType<T>
