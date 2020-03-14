/* eslint-disable */
/* tslint:disable */
import { Constructor, Type, Update } from 'tcomb'

declare module 'tcomb' {
	interface Maybe<T> extends Type<undefined | T> {
        meta: {
            kind: string;
            name: string;
            identity: boolean;
            type: Constructor<T>;
        }
        update: Update<undefined | T>
    }

    export function maybe<T>(type: Constructor<T>, name?: string): Maybe<T>;
}
