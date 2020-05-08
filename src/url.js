/**
 * Validates if a given value is valid url
 *
 * @example url('https://example.com')
 *
 * @param value
 * @returns {boolean}
 */
const url = function(value) {
    return new RegExp(
        "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$"
    ).test(String(value).toLowerCase());
}

export default url;