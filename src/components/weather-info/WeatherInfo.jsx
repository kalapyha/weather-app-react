import React from 'react';
import { useGlobalContext } from '../../context/ContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherImage } from '../../utils/helpers';
import {
	faWind,
	faWater,
	faThermometerHalf,
} from '@fortawesome/free-solid-svg-icons';

function WeatherInfo() {
	const { currentWeather, isCelsius } = useGlobalContext();

	const imgURL = `/assets/${getWeatherImage(currentWeather.weather[0].main)}`;

	return (
		<section className="card">
			<div className="card-header bg-white text-center text-uppercase text-md-left">
				{currentWeather.name}
			</div>
			<div className="d-flex justify-content-center align-items-center flex-column flex-lg-row">
				<div className="p-3">
					<img src={imgURL} alt="Weather Logo" style={{ width: '14vw' }} />
				</div>
				<div className="card-body ">
					<h5
						className="card-title text-center"
						style={{ fontSize: 'calc(3vw + 10px)' }}
					>
						{currentWeather.main.temp}
						{isCelsius ? '°C' : '°F'}
					</h5>
					<p className="card-text text-capitalize font-italic text-center ">
						{currentWeather.weather[0].description}
					</p>
					<section className="d-flex align-items-center justify-content-between flex-column flex-md-row">
						<div className="px-2">
							<FontAwesomeIcon icon={faWind} /> {currentWeather.wind.speed} m/s
						</div>
						<div className="px-2">
							<FontAwesomeIcon icon={faWater} /> {currentWeather.main.humidity}{' '}
							%
						</div>
						<div className="px-2">
							<FontAwesomeIcon icon={faThermometerHalf} />{' '}
							{currentWeather.main.feels_like} {isCelsius ? '°C' : '°F'}
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}

export default WeatherInfo;
