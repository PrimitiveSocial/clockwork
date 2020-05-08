import integer from "../src/integer";
import {expect} from "@jest/globals";

test('passes with valid numbers', () => {
    expect(integer(1)).toBe(true);
    expect(integer('1')).toBe(true);
});

test('fails with decimals', () => {
    expect(integer(1.5)).toBe(false);
    expect(integer('1.5')).toBe(false);
})

test('fails with strings', () => {
    expect(integer('foo')).toBe(false);
    expect(integer('123d')).toBe(false);
});

test('fails with array', () => {
    expect(integer([1])).toBe(false);
});

test('fails with object', () => {
    expect(integer({1: 1})).toBe(false);
});

test('fails with empty values', () => {
    expect(integer(null)).toBe(false);
    expect(integer('')).toBe(false);
    expect(integer(undefined)).toBe(false);
});