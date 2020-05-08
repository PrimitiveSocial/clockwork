import is_string from "./is_string";

/**
 * Validates that a string begins with another string
 *
 * @example starts_with('foo', 'f')
 *
 * @param value
 * @param arg
 * @returns {*|boolean}
 */
const starts_with = function(value, arg) {
    return is_string(value) && is_string(arg) && value.startsWith(arg);
}

export default starts_with;