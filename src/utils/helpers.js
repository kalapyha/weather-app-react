const convertTemperature = (temp, isCelsium = true) => {
	if (isCelsium) {
		// Celsius to Farenheit
		return Math.round(((temp * 9) / 5 + 32) * 10) / 10;
	} else {
		// Farenheit to Celsius
		return Math.round((((temp - 32) * 5) / 9) * 10) / 10;
	}
};

const getWeatherImage = (name) => {
	switch (name) {
		case 'Clear':
			return 'Sunny.min.png';
		case 'Clouds':
			return 'PartlyCloudy.min.png';
		case 'Rain':
			return 'Rainy.min.png';
		case 'Snow':
			return 'Snowy.min.png';

		default:
			return 'UnknownWeather.png';
	}
};

export { convertTemperature, getWeatherImage };
