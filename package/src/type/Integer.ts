/**
 * A `number` that is an integer.
 * You can't pass a `bigint` as they are already guaranteed to be integers.
 *
 * Use-case: Validating and documenting parameters.
 * @example
 * function setYear<T extends number>(x: Integer<T>){};
 *
 * setYear(1); // OK
 * setYear(1.1); // Error
 * @category type
*/
// `${bigint}` is a type that matches a valid bigint literal without the `n` (ex. 1, 0b1, 0o1, 0x1)
// Because T is a number and not a string we can effectively use this to filter out any numbers containing decimal points
export type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never;