import email from "../src/email";
import {expect} from "@jest/globals";

test('passes with valid conditions', () => {
    expect(email('foo@bar.com')).toBe(true);
});

test('fails with invalid conditions', () => {
    expect(email('foo')).toBe(false);
    expect(email('foo@')).toBe(false);
    expect(email('foo@bar')).toBe(false);
    expect(email('@bar.com')).toBe(false);
    expect(email('')).toBe(false);
    expect(email(null)).toBe(false);
    expect(email(undefined)).toBe(false);
    expect(email([])).toBe(false);
    expect(email({})).toBe(false);
});