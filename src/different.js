import same from "./same";

/**
 * Validates if a given value is the different than a given argument
 * Supports numbers, strings, array and objects.
 *
 * @example different(1,1) different('foo', 'bar') different([1,2], [1,3])
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const different = function(value, arg) {
    return !same(value,arg);
}

export default different;