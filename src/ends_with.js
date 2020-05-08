import is_string from "./is_string";

/**
 * Validates that a string ends with another string
 *
 * @example ends_with('foo', 'o')
 *
 * @param value
 * @param arg
 * @returns {*|boolean}
 */
const ends_with = function(value, arg) {
    return is_string(value) && is_string(arg) && value.endsWith(arg);
}

export default ends_with;