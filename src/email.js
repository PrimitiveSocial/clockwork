/**
 * Validates if a given value is a valid email.
 *
 * @param value
 * @returns {boolean}
 */
const email = function(value) {
    return new RegExp("^\\S+@\\S+[\\.][0-9a-z]+$").test(
        String(value).toLowerCase()
    );
}

export default email;