import {is_array} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with valid array', () => {
    expect(is_array([])).toBe(true);
});

test('fails with a string', () => {
    expect(is_array('clockwork')).toBe(false);
});

test('fails with an object', () => {
    expect(is_array({})).toBe(false);
});

test('fails with a number', () => {
    expect(is_array(1)).toBe(false);
});