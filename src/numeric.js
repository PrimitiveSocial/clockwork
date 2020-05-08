import is_array from "./is_array";

/**
 * Validates if a given value is numeric
 *
 * @example numeric(1.5)
 *
 * @param value
 * @returns {boolean|boolean}
 */
const numeric = function(value) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    return !isNaN(parseFloat(value)) && isFinite(value);
}

export default numeric;