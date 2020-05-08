import is_array from "./is_array";

/**
 * Validates if a given value is greater than the minimum specified
 * Supports both numbers and strings
 *
 * @example min(15, 10) min('foo-bar', 5)
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const min = function(value, arg) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    value = typeof value === "string" ? value.length : value;

    return parseFloat(value) >= arg;
}

export default min;