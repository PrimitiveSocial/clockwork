import {alpha_dash} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with valid condition', () => {
    expect(alpha_dash('foo')).toBe(true);
    expect(alpha_dash('-')).toBe(true);
    expect(alpha_dash('_')).toBe(true);
    expect(alpha_dash('_foo-bar')).toBe(true);
});

test('fails with invalid condition', () => {
    expect(alpha_dash('foo-bar!')).toBe(false);
    expect(alpha_dash('foobar23')).toBe(false);
    expect(alpha_dash('10.75')).toBe(false);
    expect(alpha_dash(100.25)).toBe(false);
    expect(alpha_dash(['foo'])).toBe(false);
    expect(alpha_dash({foo: 'bar'})).toBe(false);
    expect(alpha_dash('')).toBe(false);
    expect(alpha_dash(null)).toBe(false);
    expect(alpha_dash(undefined)).toBe(false);
});
