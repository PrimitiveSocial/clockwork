/**
 * Validates if a given value contains only letters
 *
 * @example alpha('foo')
 *
 * @param value
 * @returns {boolean}
 */
const alpha = function(value) {
    if(!value || typeof value === 'object')
        return false;

    return new RegExp("^[A-Za-z]+$").test(String(value).toLowerCase());
}

export default alpha;