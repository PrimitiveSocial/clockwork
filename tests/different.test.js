import different from "../src/different";
import {expect} from "@jest/globals";

test('passes with valid conditions', () => {
    expect(different('foo', 'bar')).toBe(true);
    expect(different(10, 20)).toBe(true);
    expect(different(1, '1')).toBe(true);
    expect(different(1, 'foo')).toBe(true);
    expect(different(1, '1')).toBe(true);
    expect(different(['foo', 'bar'], ['bar', 'foo'])).toBe(true);
    expect(different({foo: 'bar'}, {bar: 'bar'})).toBe(true);
});

test('fails with invalid conditions', () => {
    expect(different('foo', 'foo')).toBe(false);
    expect(different(1, 1)).toBe(false);
    expect(different(['foo', 'bar'], ['foo', 'bar'])).toBe(false);
    expect(different({foo: 'bar'}, {foo: 'bar'})).toBe(false);
});