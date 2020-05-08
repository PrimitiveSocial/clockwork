import alpha_numeric from "../src/alpha_numeric";
import {expect} from "@jest/globals";

test('passes with valid condition', () => {
    expect(alpha_numeric('foo')).toBe(true);
    expect(alpha_numeric('foobar23')).toBe(true);
    expect(alpha_numeric('123')).toBe(true);
    expect(alpha_numeric(100)).toBe(true);
});

test('fails with invalid condition', () => {
    expect(alpha_numeric('foo-bar!')).toBe(false);
    expect(alpha_numeric('10.75')).toBe(false);
    expect(alpha_numeric(100.25)).toBe(false);
    expect(alpha_numeric(['foo'])).toBe(false);
    expect(alpha_numeric({foo: 'bar'})).toBe(false);
    expect(alpha_numeric('')).toBe(false);
    expect(alpha_numeric(null)).toBe(false);
    expect(alpha_numeric(undefined)).toBe(false);
});
