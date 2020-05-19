import {not_in} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with array and valid condition', () => {
    expect(not_in('hello', ['foo', 'bar'])).toBe(true);
});

test('passes with comma separated string and valid condition', () => {
    expect(not_in('hello', 'foo,bar')).toBe(true);
});

test('fails with array and invalid condition', () => {
    expect(not_in('foo', ['foo', 'bar'])).toBe(false);
});

test('fails with comma separated string and invalid condition', () => {
    expect(not_in('foo', 'foo,bar')).toBe(false);
});

test('passes with empty values', () => {
    expect(not_in(null, null)).toBe(true);
    expect(not_in('', '')).toBe(true);
    expect(not_in(undefined, null)).toBe(true);
});