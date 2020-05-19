import {matches_regex} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with valid dates and condition', () => {
    expect(matches_regex('foobar', '^[A-Za-z]+$')).toBe(true);
});

test('fails with valid dates and invalid condition', () => {
    expect(matches_regex('foo-bar', '^[A-Za-z]+$')).toBe(false);
});
