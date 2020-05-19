import {is_in} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with array and valid condition', () => {
    expect(is_in('foo', ['foo', 'bar'])).toBe(true);
});

test('passes with comma separated string and valid condition', () => {
    expect(is_in('foo', 'foo,bar')).toBe(true);
});

test('fails with array and invalid condition', () => {
    expect(is_in('hello', ['foo', 'bar'])).toBe(false);
});

test('fails with comma separated string and invalid condition', () => {
    expect(is_in('hello', 'foo,bar')).toBe(false);
});

test('fails with empty values', () => {
    expect(is_in(null, null)).toBe(false);
    expect(is_in('', '')).toBe(false);
    expect(is_in(undefined, null)).toBe(false);
});