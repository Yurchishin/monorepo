/* eslint-disable */
/* tslint:disable */

declare module 'ramda' {
  import {Placeholder} from "ramda/tools";

  type NumberString = number | string

  export function gte<T1 extends NumberString, T2 extends NumberString>(a: T1, b: T2): boolean;
  export function gte<T1 extends NumberString, T2 extends NumberString>(a: T1): (b: T2) => boolean;
  export function gte<T1 extends NumberString, T2 extends NumberString>(__: Placeholder, a: T1): (b: T2) => boolean;
  export function gte<T1 extends NumberString, T2 extends NumberString>(__: Placeholder): (a: T1, b: T2) => boolean;

  export function gt<T1 extends NumberString, T2 extends NumberString>(a: T1, b: T2): boolean;
  export function gt<T1 extends NumberString, T2 extends NumberString>(a: T1): (b: T2) => boolean;
  export function gt<T1 extends NumberString, T2 extends NumberString>(__: Placeholder, a: T1): (b: T2) => boolean;
  export function gt<T1 extends NumberString, T2 extends NumberString>(__: Placeholder): (a: T1, b: T2) => boolean;

  export function lte<T1 extends NumberString, T2 extends NumberString>(a: T1, b: T2): boolean;
  export function lte<T1 extends NumberString, T2 extends NumberString>(a: T1): (b: T2) => boolean;
  export function lte<T1 extends NumberString, T2 extends NumberString>(__: Placeholder, a: T1): (b: T2) => boolean;
  export function lte<T1 extends NumberString, T2 extends NumberString>(__: Placeholder): (a: T1, b: T2) => boolean;

  export function lt<T1 extends NumberString, T2 extends NumberString>(a: T1, b: T2): boolean;
  export function lt<T1 extends NumberString, T2 extends NumberString>(a: T1): (b: T2) => boolean;
  export function lt<T1 extends NumberString, T2 extends NumberString>(__: Placeholder, a: T1): (b: T2) => boolean;
  export function lt<T1 extends NumberString, T2 extends NumberString>(__: Placeholder): (a: T1, b: T2) => boolean;

  export function equals<T1, T2>(a: T1, b: T2): boolean;
  export function equals<T1, T2>(a: T1): (b: T2) => boolean;

  export function length<T>(a: T | T[]): number;

  export function concat<T>(placeholder: Placeholder): (list2: readonly T[], list1: readonly T[]) => T[];
  export function concat<T>(placeholder: Placeholder, list2: readonly T[]): (list1: readonly T[]) => T[];
  export function concat<T>(list1: readonly T[], list2: readonly T[]): T[];
  export function concat<T>(list1: readonly T[]): (list2: readonly T[]) => T[];
  export function concat(list1: string, list2: string): string;
  export function concat(list1: string): (list2: string) => string;
  export function concat<T1 extends NumberString, T2 extends NumberString>(a: T1, b: T2): string;
  export function concat<T1 extends NumberString, T2 extends NumberString>
  (placeholder: Placeholder, list2: T1): (list1: T2) => string;
  export function concat<T1 extends NumberString, T2 extends NumberString>
  (placeholder: Placeholder): (list2: T1, list1: T2) => string;
  export function concat<T1 extends NumberString, T2 extends NumberString>
  (placeholder: Placeholder): (list2: T1) => (list1: T2) => string;

  export * from 'ramda/index'
  export * from 'ramda/tools'
}
