import is_array from "./is_array";

/**
 * Validates if a given value is a json object
 *
 * @example json({ foo: 'bar'})
 *
 * @param value
 * @returns {boolean}
 */
const json = function(value) {
    if(!value || is_array(value)) {
        return false;
    }

    return typeof value === "object";
}

export default json;