import {json} from "../src";
import {expect} from "@jest/globals";

test('passes with valid json object', () => {
    expect(json({})).toBe(true);
    expect(json({foo: 'bar'})).toBe(true);
});

test('passes with numbers', () => {
    expect(json(1)).toBe(false);
});

test('passes with string', () => {
    expect(json('foo:bar')).toBe(false);
});

test('passes with array', () => {
    expect(json(['foo', 'bar'])).toBe(false);
});

test('fails with empty values', () => {
    expect(json(null)).toBe(false);
    expect(json('')).toBe(false);
    expect(json(undefined)).toBe(false);
});