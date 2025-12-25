const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds -2 + -3 to equal -5', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('multiplies 4 * 3 to equal 12', () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('dividing by zero should throw an error', () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });

    test('adds 0.1 + 0.2 to be close to 0.3', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('subtract -5 - (-5) equals 0', () => {
        expect(subtract(-5, -5)).toBe(0);
    });

    test('multiplying two negative numbers', () => {
        expect(multiply(-4, -3)).toBe(12);
    });
});
