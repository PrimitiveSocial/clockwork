/**
 * Check if the value is a javascript object.
 *
 * @param value
 * @returns {boolean}
 */
export function is_object(value) {
    let type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}

/**
 * Check a string has arguments with the delimiter format
 *
 * @param value
 * @param delimiter
 * @returns {boolean|boolean}
 */
export function hasArg(value, delimiter = ':') {
    return ( typeof value === 'string' && value.split(delimiter).length > 1);
}