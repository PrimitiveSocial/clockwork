import {uuid} from "../src";
import {expect, test} from "@jest/globals";

test('passes with valid condition', () => {
    expect(uuid('b3da27fd-aa19-401c-8db9-6bd53b48d4b0')).toBe(true);
});

test('fails with invalid condition', () => {
    expect(uuid('b3da27fd-aa19')).toBe(false);
    expect(uuid(100.25)).toBe(false);
    expect(uuid(['foo'])).toBe(false);
    expect(uuid({foo: 'bar'})).toBe(false);
    expect(uuid('')).toBe(false);
    expect(uuid(null)).toBe(false);
    expect(uuid(undefined)).toBe(false);
});
