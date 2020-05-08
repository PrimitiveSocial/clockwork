import is_in from "./is_in";

/**
 * Validates if a given value does not exists in an array or a comma separated string
 * Supports both array and strings
 *
 * @example not_in('foo', ['foo', 'bar'] not_in('foo', 'foo,bar')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const not_in = function(value, arg) {
    return !is_in(value, arg);
}

export default not_in;