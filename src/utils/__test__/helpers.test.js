import { convertTemperature } from '../helpers';

describe('convertTemperature', () => {
	test('should return a correct number', () => {
		expect(convertTemperature(10)).toBe(50);
	});
	test('should return a correct number', () => {
		expect(convertTemperature(55, false)).toBeCloseTo(12.9, 0);
	});
	test('should return a correct number', () => {
		expect(convertTemperature(0, false)).toBeCloseTo(-17.8, 0);
	});
	test('should return a correct number', () => {
		expect(convertTemperature(0, true)).toBe(32);
	});
});
