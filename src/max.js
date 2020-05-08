import is_array from "./is_array";

/**
 * Validates if a given value is greater than the maximum specified
 * Supports both numbers and strings
 *
 * @example max(15, 10) max('foo-bar', 15)
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const max = function(value, arg) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    value = typeof value === "string" ? value.length : value;
    return parseFloat(value) <= arg;
}

export default max;