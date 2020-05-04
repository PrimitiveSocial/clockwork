const moment = require('moment');

export function is_array(value, arg=null) {
    return Array.isArray(value);
}

export function is_string(value, arg=null) {
    return typeof value === 'string';
}

export function length(value, arg) {
    if(!is_string(value) && !is_array(value)) {
        return false;
    }

    return value.length === arg;
}

export function date(value, arg='YYYY-MM-DD') {
    return moment(value, arg, true).isValid();
}