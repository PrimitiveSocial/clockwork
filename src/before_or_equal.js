const moment = require('moment');

import date from "./date";

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

export default before_or_equal;