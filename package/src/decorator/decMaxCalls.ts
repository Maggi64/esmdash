import { toDecorator } from '@decorator/toDecorator.js';
import { maxCalls } from '@function/maxCalls.js';

/**
 * Only invokes the decorated function as long as it's called `<= n` times.  
 * Subsequent calls to the decorated function return the result of the last invocation.
 * 
 * Look at {@link maxCalls} for the non-decorator version.
 * 
 * *Requires TypeScript >=5.0 or `experimentalDecorators` flag enabled.*
 * 
 * @example
 * class TestClass {
 *  private count = 0;
 *  @decMaxCalls(2)
 *  testMethod() {
 *    return ++this.count;
 *  }
 * }
 * const instance = new TestClass();
 * instance.testMethod(); // => 1 
 * instance.testMethod(); // => 2
 * instance.testMethod(); // => 2
 * 
 * @param n - The number of calls before the cached result is returned.
 */

export const decMaxCalls = toDecorator(maxCalls);