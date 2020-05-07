import {alphanumeric} from "../src";
import {expect} from "@jest/globals";

test('passes with valid condition', () => {
    expect(alphanumeric('foo')).toBe(true);
    expect(alphanumeric('foobar23')).toBe(true);
    expect(alphanumeric('123')).toBe(true);
    expect(alphanumeric(100)).toBe(true);
});

test('fails with invalid condition', () => {
    expect(alphanumeric('foo-bar!')).toBe(false);
    expect(alphanumeric('10.75')).toBe(false);
    expect(alphanumeric(100.25)).toBe(false);
    expect(alphanumeric(['foo'])).toBe(false);
    expect(alphanumeric({foo: 'bar'})).toBe(false);
    expect(alphanumeric('')).toBe(false);
    expect(alphanumeric(null)).toBe(false);
    expect(alphanumeric(undefined)).toBe(false);
});
