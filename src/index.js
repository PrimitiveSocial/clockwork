const moment = require('moment');

/**
 * Validates if a given date is after another date
 * The compared dates can have different formats
 *
 * @example after('2021-01-10', '2020-01-10')
 * @example after('2021-01-10', '2020/01/10:YYYY/MM/DD')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const after = function(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isAfter(moment(arg[0], format, true));
}

/**
 * Validates if a given date is after or equal to another date
 * The compared dates can have different formats
 *
 * @example after_or_equal('2021-01-10', '2020-01-10')
 * @example after_or_equal('2021-01-10', '2020/01/10:YYYY/MM/DD')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const after_or_equal = function(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isSameOrAfter(moment(arg[0], format, true));
}

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

/**
 * Validates if a given date is before another date
 * The compared dates can have different formats
 *
 * @example before('2020-01-10', '2021-01-10')
 * @example before('2020-01-10', '2021/01/10:YYYY/MM/DD')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const before = function(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isBefore(moment(arg[0], format, true));
}

/**
 * Validates if a given date is before or equal to another date
 * The compared dates can have different formats
 *
 * @example before_or_equal('2020-01-10', '2021-01-10')
 * @example before_or_equal('2020-01-10', '2021/01/10:YYYY/MM/DD')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const before_or_equal = function(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isSameOrBefore(moment(arg[0], format, true));
}

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

/**
 * Validates if a given value is a valid date
 * Also supports strict date string format
 *
 * @example date('2020-01-10')
 * @example date('01-03, 2020:DD-MM, YYYY')
 *
 * @param value
 * @returns {boolean}
 */
const date = function(value) {
    if(!value || typeof value !== 'string')
        return false;

    let arg = value.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(arg[0], format, true).isValid();
}

/**
 * Validates if a given value is the different than a given argument
 * Supports numbers, strings, array and objects.
 *
 * @example different(1,1) different('foo', 'bar') different([1,2], [1,3])
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const different = function(value, arg) {
    return !same(value,arg);
}

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

/**
 * Validates that a string ends with another string
 *
 * @example ends_with('foo', 'o')
 *
 * @param value
 * @param arg
 * @returns {*|boolean}
 */
const ends_with = function(value, arg) {
    return is_string(value) && is_string(arg) && value.endsWith(arg);
}

/**
 * Validates if a given value is an integer
 *
 * @example integer(100)
 *
 * @param value
 * @returns {boolean|boolean}
 */
const integer = function(value) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    return parseInt(value).toString() === value.toString();
}

/**
 * Validates if a given value is an array
 *
 * @example is_array(['foo', 'bar'])
 *
 * @param value
 * @returns {boolean}
 */
const is_array = function(value) {
    return Array.isArray(value);
}

/**
 * Validates if a given value is exists in an array or a comma separated string
 * Supports both array and strings
 *
 * @example is_in('foo', ['foo', 'bar'] is_in('foo', 'foo,bar')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const is_in = function(value, arg) {
    if(!value || !arg) {
        return false;
    }

    arg = typeof arg === "string" ? arg.split(",") : arg;
    return arg.includes(value);
}

/**
 * Validates if a given value is a string
 *
 * @example is_string('clockwork')
 *
 * @param value
 * @returns {boolean}
 */
const is_string = function(value) {
    return typeof value === 'string';
}

/**
 * Validates if a given value is a json object
 *
 * @example json({ foo: 'bar'})
 *
 * @param value
 * @returns {boolean}
 */
const json = function(value) {
    if(!value || is_array(value)) {
        return false;
    }

    return typeof value === "object";
}

/**
 * Validates the length of a given value
 * Supports both strings and arrays
 *
 * @example length('foo', 3)
 * @example length(['foo', 'bar'], 2)
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const length = function(value, arg) {
    if(!is_string(value) && !is_array(value)) {
        return false;
    }

    return value.length === arg;
}

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

/**
 * Validates if a given value is greater than the maximum specified
 * Supports both numbers and strings
 *
 * @example max(15, 10) max('foo-bar', 15)
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const max = function(value, arg) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    value = typeof value === "string" ? value.length : value;
    return parseFloat(value) <= arg;
}

/**
 * Validates if a given value is greater than the minimum specified
 * Supports both numbers and strings
 *
 * @example min(15, 10) min('foo-bar', 5)
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const min = function(value, arg) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    value = typeof value === "string" ? value.length : value;

    return parseFloat(value) >= arg;
}

/**
 * Validates if a given value does not exists in an array or a comma separated string
 * Supports both array and strings
 *
 * @example not_in('foo', ['foo', 'bar'] not_in('foo', 'foo,bar')
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const not_in = function(value, arg) {
    return !is_in(value, arg);
}

/**
 * Validates if a given value is numeric
 *
 * @example numeric(1.5)
 *
 * @param value
 * @returns {boolean|boolean}
 */
const numeric = function(value) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    return !isNaN(parseFloat(value)) && isFinite(value);
}

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

/**
 * Validates if a given value is the same as a given argument
 * Supports numbers, strings, array and objects.
 *
 * @example same(1,1) same('foo', 'foo') same([1,2], [1,2])
 *
 * @param value
 * @param arg
 * @returns {boolean}
 */
const same = function(value, arg) {
    return (typeof value === 'object') ? JSON.stringify(value) === JSON.stringify(arg) : value === arg;
}

/**
 * Validates that a string begins with another string
 *
 * @example starts_with('foo', 'f')
 *
 * @param value
 * @param arg
 * @returns {*|boolean}
 */
const starts_with = function(value, arg) {
    return is_string(value) && is_string(arg) && value.startsWith(arg);
}

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

module.exports = {
    after,
    after_or_equal,
    alpha,
    alpha_dash,
    alpha_numeric,
    before,
    before_or_equal,
    boolean,
    date,
    different,
    email,
    ends_with,
    integer,
    is_array,
    is_in,
    is_string,
    json,
    length,
    matches_regex,
    max,
    min,
    not_in,
    numeric,
    required,
    same,
    starts_with,
    url,
    uuid
}