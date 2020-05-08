/**
 * Validates if a given value is a string
 *
 * @example is_string('clockwork')
 *
 * @param value
 * @returns {boolean}
 */
const is_string = function(value) {
    return typeof value === 'string';
}

export default is_string;