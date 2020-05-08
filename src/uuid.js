/**
 * Validates if a given value is a uuid
 *
 * @example uuid('9034dfa4-49d9-4e3f-9c6d-bc6a0e2233d1')
 *
 * @param value
 * @returns {boolean}
 */
const uuid = function(value) {
    if(!value || typeof value === 'object')
        return false;

    return new RegExp(
        "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
    ).test(String(value).toLowerCase());
}

export default uuid;