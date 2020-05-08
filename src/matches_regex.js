/**
 * Validates if a value matches a given regex
 *
 * @example matches_regex("hello@example.com", "^\\S+@\\S+[\\.][0-9a-z]+$")
 *
 * @param value
 * @param expression
 * @returns {boolean}
 */
const matches_regex = function(value, expression) {
    return new RegExp(expression).test(String(value).toLowerCase());
}

export default matches_regex;