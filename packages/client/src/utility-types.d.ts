/* tslint:disable */
declare type PartialRecord<K extends keyof any, T> =  Partial<Record<K, T>>

declare type Primitive = string | number | bigint | boolean | symbol | null | undefined

declare type Falsy = false | '' | 0 | null | undefined

declare type SetIntersection<A, B> = A extends B ? A : never

declare type SetDifference<A, B> = A extends B ? never : A

declare type SetComplement<A, A1 extends A> = SetDifference<A, A1>

declare type SymmetricDifference<A, B> = SetDifference<A | B, A & B>

declare type NonUndefined<A> = A extends undefined ? never : A

declare type NonFunctionKeys<T extends object> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K;
}[keyof T]

declare type FunctionKeys<T extends object> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never;
}[keyof T]

declare type MutableKeys<T extends object> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P>;
}[keyof T]

declare type WritableKeys<T extends object> = MutableKeys<T>

declare type ReadonlyKeys<T extends object> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, never, P>;
}[keyof T]

declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B

declare type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T]

declare type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T]

declare type PickByValue<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T]>

declare type PickByValueExact<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: [ValueType] extends [T[Key]] ? [T[Key]] extends [ValueType] ? Key : never : never;
}[keyof T]>

declare type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>

declare type OmitByValue<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? never : Key;
}[keyof T]>

declare type OmitByValueExact<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: [ValueType] extends [T[Key]] ? [T[Key]] extends [ValueType] ? never : Key : Key;
}[keyof T]>

declare type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>

declare type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>

declare type Subtract<T extends T1, T1 extends object> = Pick<T, SetComplement<keyof T, keyof T1>>

declare type Overwrite<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T>> = Pick<I, keyof I>

declare type Assign<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T> & Diff<U, T>> = Pick<I, keyof I>

declare type Exact<A extends object> = A & {
    __brand: keyof A;
}

declare type Unionize<T extends object> = {
    [P in keyof T]: {
        [Q in P]: T[P];
    };
}[keyof T]

declare type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never

declare type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive ? T : T extends _DeepReadonlyArray<infer U> ? _DeepReadonlyArray<U> : T extends _DeepReadonlyObject<infer V> ? _DeepReadonlyObject<V> : T

/** @private */
interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {
}
/** @private */
type _DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
}

declare type DeepRequired<T> = T extends (...args: any[]) => any ? T : T extends any[] ? _DeepRequiredArray<T[number]> : T extends object ? _DeepRequiredObject<T> : T
/** @private */
interface _DeepRequiredArray<T> extends Array<DeepRequired<NonUndefined<T>>> {
}
/** @private */
type _DeepRequiredObject<T> = {
    [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
}

declare type DeepNonNullable<T> = T extends (...args: any[]) => any ? T : T extends any[] ? _DeepNonNullableArray<T[number]> : T extends object ? _DeepNonNullableObject<T> : T
/** @private */
interface _DeepNonNullableArray<T> extends Array<DeepNonNullable<NonNullable<T>>> {
}
/** @private */
type _DeepNonNullableObject<T> = {
    [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>;
}

declare type DeepPartial<T> = T extends Function ? T : T extends Array<infer U> ? _DeepPartialArray<U> : T extends object ? _DeepPartialObject<T> : T | undefined
/** @private */
interface _DeepPartialArray<T> extends Array<DeepPartial<T>> {
}
/** @private */
type _DeepPartialObject<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
}

declare type Brand<T, U> = T & {
    __brand: U;
}

declare type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>

declare type ValuesType<T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>> = T extends ReadonlyArray<any> ? T[number] : T extends ArrayLike<any> ? T[number] : T extends object ? T[keyof T] : never

declare type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Required<Pick<T, K>>

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
}

declare type Writable<T> = Mutable<T>

declare type $Keys<T extends object> = keyof T

declare type $Values<T extends object> = T[keyof T]

declare type $ReadOnly<T extends object> = DeepReadonly<T>

declare type $Diff<T extends U, U extends object> = Pick<T, SetComplement<keyof T, keyof U>>

declare type $PropertyType<T extends object, K extends keyof T> = T[K]

declare type $ElementType<T extends {
    [P in K & any]: any;
}, K extends keyof T | number> = T[K]

declare type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never

declare type $Shape<T extends object> = Partial<T>

declare type $NonMaybeType<T> = NonNullable<T>

declare type Class<T> = new (...args: any[]) => T

declare type mixed = unknown
