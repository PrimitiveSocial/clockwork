import {required} from "../src";
import {expect} from "@jest/globals";

test('fails with null value', () => {
    expect(required(null)).toBe(false);
});

test('fails with empty string', () => {
    expect(required('')).toBe(false);
});

test('passes with valid string', () => {
    expect(required('Jest')).toBe(true);
});

test('passes with valid integer', () => {
    expect(required(100)).toBe(true);
});

test('passes with array', () => {
    expect(required(['foo'])).toBe(true);
});

test('passes with object', () => {
    expect(required({ foo: 'bar'})).toBe(true);
});