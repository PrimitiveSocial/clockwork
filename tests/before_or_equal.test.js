import before_or_equal from "../src/before_or_equal";
import {expect} from "@jest/globals";

test('passes with previous date', () => {
    expect(before_or_equal('2020-01-10', '2021-01-10')).toBe(true);
});

test('passes with equal date', () => {
    expect(before_or_equal('2020-01-10', '2020-01-10')).toBe(true);
});

test('fails with valid dates and invalid condition', () => {
    expect(before_or_equal('2020-01-10', '2019-01-10')).toBe(false);
});

test('fails with invalid dates', () => {
    expect(before_or_equal('20200110', '20190110')).toBe(false);
});

test('passes with valid dates and condition, with different date format', () => {
    expect(before_or_equal('2020-01-10', '2021/01/10:YYYY/MM/DD')).toBe(true);
});
