import {is_string} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with valid string', () => {
    expect(is_string('clockwork')).toBe(true);
});

test('fails with an array', () => {
    expect(is_string([])).toBe(false);
});

test('fails with an object', () => {
    expect(is_string({})).toBe(false);
});

test('fails with a number', () => {
    expect(is_string(1)).toBe(false);
});