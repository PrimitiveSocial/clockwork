/**
 * Validates if a given value is present
 *
 * @example required('Foo')
 *
 * @param value
 * @returns {boolean}
 */
const required = function(value)  {
    return (value !== '' && value !== null && typeof value !== 'undefined');
}

export default required;