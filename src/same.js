/**
 * Validates if a given value is the same as a given argument
 * Supports numbers, strings, array and objects.
 *
 * @example same(1,1) same('foo', 'foo') same([1,2], [1,2])
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const same = function(value, arg) {
    return (typeof value === 'object') ? JSON.stringify(value) === JSON.stringify(arg) : value === arg;
}

export default same;