import is_array from "./is_array";

/**
 * Validates if a given value is an integer
 *
 * @example integer(100)
 *
 * @param value
 * @returns {boolean|boolean}
 */
const integer = function(value) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    return parseInt(value).toString() === value.toString();
}

export default integer;