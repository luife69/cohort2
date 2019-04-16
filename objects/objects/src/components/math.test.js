
import math from "./math";

test('Test the math functions', () => {
	console.log('test for sum');
	expect(math.sum(2,2)).toBe(4);
});

test('Test the math functions', () => {
	console.log('test for substract');
	expect(math.substract(4,2)).toBe(2);
});

test('Test the math functions', () => {
	console.log('test for multiply');
	expect(math.multiply(4,2)).toBe(8);
});

test('Test the math functions', () => {
	console.log('test for divide');
	expect(math.divide(6,2)).toBe(3);
});