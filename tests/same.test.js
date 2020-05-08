import same from "../src/same";
import {expect} from "@jest/globals";

test('passes with valid conditions', () => {
    expect(same('foo', 'foo')).toBe(true);
    expect(same(1, 1)).toBe(true);
    expect(same(['foo', 'bar'], ['foo', 'bar'])).toBe(true);
    expect(same({foo: 'bar'}, {foo: 'bar'})).toBe(true);
});

test('fails with invalid conditions', () => {
    expect(same('foo', 'bar')).toBe(false);
    expect(same(10, 20)).toBe(false);
    expect(same(1, '1')).toBe(false);
    expect(same(1, 'foo')).toBe(false);
    expect(same(1, '1')).toBe(false);
    expect(same(['foo', 'bar'], ['bar', 'foo'])).toBe(false);
    expect(same({foo: 'bar'}, {bar: 'bar'})).toBe(false);
});