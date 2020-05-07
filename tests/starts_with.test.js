import {starts_with} from "../src";
import {expect} from "@jest/globals";

test('passes with valid conditions', () => {
    expect(starts_with('foo', 'f')).toBe(true);
});

test('fails with invalid conditions', () => {
    expect(starts_with('foo', 'b')).toBe(false);
    expect(starts_with(10, 1)).toBe(false);
    expect(starts_with(['foo', 'bar'], 'foo')).toBe(false);
    expect(starts_with({foo: 'bar'}, 'bar')).toBe(false);
    expect(starts_with('', 'a')).toBe(false);
    expect(starts_with(null, 'a')).toBe(false);
    expect(starts_with(undefined, 'a')).toBe(false);
});