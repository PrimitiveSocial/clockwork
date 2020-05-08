import is_string from "./is_string";
import is_array from "./is_array";

/**
 * Validates the length of a given value
 * Supports both strings and arrays
 *
 * @example length('foo', 3)
 * @example length(['foo', 'bar'], 2)
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const length = function(value, arg) {
    if(!is_string(value) && !is_array(value)) {
        return false;
    }

    return value.length === arg;
}

export default length;