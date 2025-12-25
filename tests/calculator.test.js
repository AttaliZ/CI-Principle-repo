const { add, subtract, multiply, divide, calculate } = require('../src/calculator');

describe('Calculator basic functions', () => {
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
});

describe('Calculator calculate() wrapper', () => {
    test('calculate + should call add correctly', () => {
        expect(calculate('+', 5, 3)).toBe(8);
    });

    test('calculate * should call multiply correctly', () => {
        expect(calculate('*', 4, 2)).toBe(8);
    });

    test('divide by zero should return "Error"', () => {
        global.alert = jest.fn();

        const result = divide(10, 0);

        expect(result).toBe("Error");
        expect(global.alert).toHaveBeenCalledWith("ห้ามหารด้วย 0 ");
    });

    test('invalid operator should return null', () => {
        global.alert = jest.fn();

        const result = calculate('%', 5, 3);

        expect(result).toBeNull();
        expect(global.alert).toHaveBeenCalledWith("Operator ไม่ถูกต้อง");
    });
});
