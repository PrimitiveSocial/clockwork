/**
 * Validates if a given value is an array
 *
 * @example is_array(['foo', 'bar'])
 *
 * @param value
 * @returns {boolean}
 */
const is_array = function(value) {
    return Array.isArray(value);
}

export default is_array;