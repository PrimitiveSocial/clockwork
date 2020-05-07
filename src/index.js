const moment = require('moment');

/**
 * Validates if a given value is an array
 *
 * @example is_array(['foo', 'bar'])
 *
 * @param value
 * @returns {boolean}
 */
export function is_array(value) {
    return Array.isArray(value);
}

/**
 * Validates if a given value is a string
 *
 * @example is_string('clockwork')
 *
 * @param value
 * @returns {boolean}
 */
export function is_string(value) {
    return typeof value === 'string';
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
export function length(value, arg) {
    if(!is_string(value) && !is_array(value)) {
        return false;
    }

    return value.length === arg;
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
export function date(value) {
    let arg = value.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(arg[0], format, true).isValid();
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
export function before(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isBefore(moment(arg[0], format, true));
}

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
export function after(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isAfter(moment(arg[0], format, true));
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
export function before_or_equal(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isSameOrBefore(moment(arg[0], format, true));
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
export function after_or_equal(value, arg) {
    if(!date(value))
        return false;

    arg = arg.split(':');
    let format = (arg.length === 2) ? arg[1] : 'YYYY-MM-DD';

    return moment(value).isSameOrAfter(moment(arg[0], format, true));
}

/**
 * Validates if a given value is present
 *
 * @example required('Foo')
 *
 * @param value
 * @returns {boolean}
 */
export function required(value)  {
    return (value !== '' && value !== null && typeof value !== 'undefined');
}

/**
 * Validates if a given value is valid url
 *
 * @example url('https://example.com')
 *
 * @param value
 * @returns {boolean}
 */
export function url(value) {
    return new RegExp(
        "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$"
    ).test(String(value).toLowerCase());
}

/**
 * Validates if a given value is numeric
 *
 * @example numeric(1.5)
 *
 * @param value
 * @returns {boolean|boolean}
 */
export function numeric(value) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Validates if a given value is an integer
 *
 * @example integer(100)
 *
 * @param value
 * @returns {boolean|boolean}
 */
export function integer(value) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    return parseInt(value).toString() === value.toString();
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
export function min(value, arg) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    value = typeof value === "string" ? value.length : value;

    return parseFloat(value) >= arg;
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
export function max(value, arg) {
    if(!value || is_array(value) || typeof value === 'object') {
        return false;
    }

    value = typeof value === "string" ? value.length : value;
    return parseFloat(value) <= arg;
}

/**
 * Validates if a given value is a json object
 *
 * @example json({ foo: 'bar'})
 *
 * @param value
 * @returns {boolean}
 */
export function json(value) {
    if(!value || is_array(value)) {
        return false;
    }

    return typeof value === "object";
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
export function is_in(value, arg) {
    if(!value || !arg) {
        return false;
    }

    arg = typeof arg === "string" ? arg.split(",") : arg;
    return arg.includes(value);
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
export function not_in(value, arg) {
    return !is_in(value, arg);
}

export function same(value, arg) {
    return value === arg;
}