/**
 * Validates if a given value contains only letters, dashes and underscores
 *
 * @example alphanumeric('_bar-foo')
 *
 * @param value
 * @returns {boolean}
 */
const alpha_dash = function(value) {
    if(!value || typeof value === 'object')
        return false;

    return new RegExp("^[a-zA-Z-_]+$").test(String(value).toLowerCase());
}

export default alpha_dash;