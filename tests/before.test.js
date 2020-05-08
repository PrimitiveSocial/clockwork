import before from "../src/before";
import {expect} from "@jest/globals";

test('passes with valid dates and condition', () => {
    expect(before('2020-01-10', '2021-01-10')).toBe(true);
});

test('fails with valid dates and invalid condition', () => {
    expect(before('2020-01-10', '2019-01-10')).toBe(false);
});

test('fails with invalid dates', () => {
    expect(before('20200110', '20190110')).toBe(false);
});

test('passes with valid dates and condition, with different date format', () => {
    expect(before('2020-01-10', '2021/01/10:YYYY/MM/DD')).toBe(true);
});
