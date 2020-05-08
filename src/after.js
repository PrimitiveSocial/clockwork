const moment = require('moment');

import date from "./date";

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

export default after;