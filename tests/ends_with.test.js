import {ends_with} from "../src";
import {expect, test} from "@jest/globals";

test('passes with valid conditions', () => {
    expect(ends_with('foo', 'o')).toBe(true);
});

test('fails with invalid conditions', () => {
    expect(ends_with('foo', 'b')).toBe(false);
    expect(ends_with(10, 0)).toBe(false);
    expect(ends_with(['foo', 'bar'], 'bar')).toBe(false);
    expect(ends_with({foo: 'bar'}, 'bar')).toBe(false);
    expect(ends_with('', 'a')).toBe(false);
    expect(ends_with(null, 'a')).toBe(false);
    expect(ends_with(undefined, 'a')).toBe(false);
});