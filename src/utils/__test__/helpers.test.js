import { convertTemperature, getWeatherImage } from '../helpers';

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

describe('getWeatherImage', () => {
	test('should return a default string', () => {
		expect(getWeatherImage()).toMatch('UnknownWeather.png');
	});

	test('should return a correct string', () => {
		expect(getWeatherImage('Clear')).toMatch('Sunny.min.png');
	});
});
