import {after_or_equal} from "../src";
import {expect, test} from "@jest/globals";

test('passes with future date', () => {
    expect(after_or_equal('2021-01-10', '2020-01-10')).toBe(true);
});

test('fails with same date', () => {
    expect(after_or_equal('2020-01-10', '2020-01-10')).toBe(true);
});

test('fails with valid dates and invalid condition', () => {
    expect(after_or_equal('2020-01-10', '2021-01-10')).toBe(false);
});

test('fails with invalid dates', () => {
    expect(after_or_equal('20200110', '20190110')).toBe(false);
});

test('passes with valid dates and condition, with different date format', () => {
    expect(after_or_equal('2021-01-10', '2020/01/10:YYYY/MM/DD')).toBe(true);
});
