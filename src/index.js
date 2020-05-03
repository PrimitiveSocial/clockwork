export function is_array(value) {
    return Array.isArray(value);
}

export function is_string(value) {
    return typeof value === 'string';
}

export function length(value, arg) {
    if(!is_string(value) && !is_array(value)) {
        return false;
    }

    return value.length === arg;
}