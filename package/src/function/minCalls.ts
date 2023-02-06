import type { GenericFunction } from '@helpers/types.js';

/**
 * Creates a function that invokes the given function once it's called more than `n` times.  
 * Returns undefined until the minimum call count is reached.
 * 
 * This function can be used as a decorator with {@link decMinCalls}.
 * @example
 * const caution = () => console.log("Caution!");
 * const minCalls = after(caution, 2);
 *
 * minCalls()
 * minCalls()
 * minCalls()
 * // => `caution` is invoked on the third call.
 * @param n The number of calls before the given function is invoked.
 * @param func The function to restrict.
 * @returns Returns the new restricted function.
 */

export function minCalls<TFunc extends GenericFunction<TFunc>>(func: TFunc, n: number) {
    let count = 1;
    return function (this: unknown, ...args: Parameters<TFunc>): ReturnType<TFunc> | undefined {
        if (count > n) {
            return func.apply(this, args);
        }
        count += 1;
    };
}