const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const exercises = require ('./exercises');

//1

test("return a text in string", () => {
    expect(exercises.texto("text")).toBe("text");
});

//2 

test("adds 1 + 9 to equal 10", () => {
    expect(exercises.suma(1, 9)).toBe(10);
    expect(exercises.suma(2, 7)).not.toBe(10);
});

//3

test("rest 10 - 1 to equal 9", () => {
    expect(exercises.resta(10, 1)).toBe(9);
    expect(exercises.resta(10, 2)).not.toBe(9);
});

//4

describe('Signs in the multiply', () => {

    test("multiply 2 x 3 to equal 6", () => {
        expect(exercises.multiplicacion(2, 3)).toBe(6);
        expect(exercises.multiplicacion(2, 3)).not.toBe(7);
    });

    test("multiply -2 x -3 to equal 6", () => {
        expect(exercises.multiplicacion(-2, -3)).toBe(6);
        expect(exercises.multiplicacion(-2, -3)).not.toBe(6);
    });

    test("multiply -2 x 3 to equal -6", () => {
        expect(exercises.multiplicacion(-2, 3)).toBe(-6);
        expect(exercises.multiplicacion(-2, 3)).not.toBe(6);
    });
});

//5

describe('Division', () => {
    test('The divisor cannot be zero', () => {
        expect(exercises.division(2,0)).tobe("It is invalid, we cannot division with 0");
    });
    test('divide 10 by 2 to equal 5', () => {
        expect(exercises.division(10, 2)).toBe(5);
        expect(exercises.division(10, 10)).not.toBe(5);
    })
})

//6

test("if multiplicador is undefined then multiplicador is equal to 10", () => {
    expect(exercises.tablaMultiplicar(2)).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

//7

test("10 squad to equal 100", () => {
    expect(exercises.potencia(10, 2)).toBe(100);
    expect(exercises.potencia(10, 3)).not.toBe(100);
});

//8

test("1^2 + 2^2 to be 5", () => {
    expect(exercises.anidada(1, 2)).toBe(5);
    expect(exercises.anidada(1, 3)).not.toBe(5);
});

//9

test("5 to have six 0 to the left", () => {
    expect(exercises.cerosIzq(5, 7)).toBe("0000005");
});
