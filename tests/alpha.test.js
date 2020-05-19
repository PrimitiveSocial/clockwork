import {alpha} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with valid condition', () => {
    expect(alpha('foo')).toBe(true);
});

test('fails with invalid condition', () => {
    expect(alpha('foo-bar!')).toBe(false);
    expect(alpha('foobar23')).toBe(false);
    expect(alpha(100)).toBe(false);
    expect(alpha(['foo'])).toBe(false);
    expect(alpha({foo: 'bar'})).toBe(false);
    expect(alpha('')).toBe(false);
    expect(alpha(null)).toBe(false);
    expect(alpha(undefined)).toBe(false);
});
