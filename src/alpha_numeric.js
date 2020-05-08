/**
 * Validates if a given value contains only letters and numbers
 *
 * @example alphanumeric('foo123')
 *
 * @param value
 * @returns {boolean}
 */
const alpha_numeric = function(value) {
    if(!value || typeof value === 'object')
        return false;

    return new RegExp("^[a-zA-Z0-9\\s]+$").test(String(value).toLowerCase());
}

export default alpha_numeric;