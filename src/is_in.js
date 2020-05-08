/**
 * Validates if a given value is exists in an array or a comma separated string
 * Supports both array and strings
 *
 * @example is_in('foo', ['foo', 'bar'] is_in('foo', 'foo,bar')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const is_in = function(value, arg) {
    if(!value || !arg) {
        return false;
    }

    arg = typeof arg === "string" ? arg.split(",") : arg;
    return arg.includes(value);
}

export default is_in;