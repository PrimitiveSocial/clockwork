import {numeric} from "../src";
import {expect} from "@jest/globals";

test('passes with valid numbers', () => {
    expect(numeric(1)).toBe(true);
    expect(numeric(1.5)).toBe(true);
    expect(numeric('1')).toBe(true);
    expect(numeric('1.5')).toBe(true);
});

test('fails with strings', () => {
    expect(numeric('foo')).toBe(false);
    expect(numeric('1ad.3d')).toBe(false);
});

test('fails with array', () => {
    expect(numeric([1])).toBe(false);
});

test('fails with object', () => {
    expect(numeric({1: 1})).toBe(false);
});

test('fails with empty values', () => {
    expect(numeric(null)).toBe(false);
    expect(numeric('')).toBe(false);
    expect(numeric(undefined)).toBe(false);
});