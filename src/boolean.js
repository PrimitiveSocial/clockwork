/**
 * Validates that a given value is boolean.
 *
 * @example boolean(true)
 * @param value
 * @returns {boolean}
 */
const boolean = function(value) {
    return [true, false].includes(value);
}

export default boolean;