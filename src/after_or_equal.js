const moment = require('moment');

import date from "./date";

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

export default after_or_equal;