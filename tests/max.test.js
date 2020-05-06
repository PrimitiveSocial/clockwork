import {max} from "../src";
import {expect} from "@jest/globals";

test('passes with numeric values and valid conditions', () => {
    expect(max(5, 10)).toBe(true);
    expect(max(12.75, 50.50)).toBe(true);
});

test('fails with numeric values and invalid conditions', () => {
    expect(max(10, 2)).toBe(false);
    expect(max(12.5, 5.5)).toBe(false);
});

test('passes with string and valid conditions', () => {
    expect(max('foo-bar', 10)).toBe(true);
});

test('fails with string and invalid conditions', () => {
    expect(max('foo-bar', 3)).toBe(false);
});

test('fails with array', () => {
    expect(max([1, 2], 5)).toBe(false);
});

test('fails with object', () => {
    expect(max({1: 1}, 2)).toBe(false);
});

test('fails with empty values', () => {
    expect(max(null, 1)).toBe(false);
    expect(max('', 1)).toBe(false);
    expect(max(undefined, 1)).toBe(false);
});