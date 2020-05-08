import boolean from "../src/boolean";
import {expect} from "@jest/globals";

test('passes with valid conditions', () => {
    expect(boolean(false)).toBe(true);
    expect(boolean(true)).toBe(true);
});

test('fails with invalid conditions', () => {
    expect(boolean('foo')).toBe(false);
    expect(boolean(1)).toBe(false);
    expect(boolean(0)).toBe(false);
    expect(boolean('true')).toBe(false);
    expect(boolean('false')).toBe(false);
    expect(boolean('0')).toBe(false);
    expect(boolean(['foo'])).toBe(false);
    expect(boolean({foo: 'bar'})).toBe(false);
    expect(boolean('')).toBe(false);
    expect(boolean(null)).toBe(false);
    expect(boolean(undefined)).toBe(false);
});