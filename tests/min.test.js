import {min} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with numeric values and valid conditions', () => {
    expect(min(10, 5)).toBe(true);
    expect(min(12.5, 2.3)).toBe(true);
});

test('fails with numeric values and invalid conditions', () => {
    expect(min(10, 50)).toBe(false);
    expect(min(12.5, 25.3)).toBe(false);
});

test('passes with string and valid conditions', () => {
    expect(min('foo-bar', 5)).toBe(true);
});

test('fails with string and invalid conditions', () => {
    expect(min('foo-bar', 50)).toBe(false);
});

test('passes with array', () => {
    expect(min([1, 2, 3], 2)).toBe(true);
});

test('fails with array and valid conditions', () => {
    expect(min([1, 2, 3], 5)).toBe(false);
});

test('fails with object', () => {
    expect(min({1: 1}, 2)).toBe(false);
});

test('fails with empty values', () => {
    expect(min(null, 1)).toBe(false);
    expect(min('', 1)).toBe(false);
    expect(min(undefined, 1)).toBe(false);
});