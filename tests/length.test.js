import {length} from "../src";
import {expect} from "@jest/globals";

test('passes with a string and a valid condition', () => {
    expect(length('clockwork', 9)).toBe(true);
});

test('fails with a string and an invalid condition', () => {
    expect(length('clockwork', 2)).toBe(false);
});


test('passes with an array and a valid condition', () => {
    expect(length(['foo', 'bar'], 2)).toBe(true);
});

test('fails with an array and an invalid condition', () => {
    expect(length(['foo', 'bar'], 3)).toBe(false);
});

test('fails with a number', () => {
    expect(length(100, 3)).toBe(false);
});

test('fails with an object', () => {
    expect(length({foo: 'bar'}, 1)).toBe(false);
});


