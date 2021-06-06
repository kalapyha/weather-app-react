import React from 'react';
import ParlyCloudy from '../../assets/PartlyCloudy.png';
import { useGlobalContext } from '../../context/ContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

function WeatherInfo() {
	const { currentWeather } = useGlobalContext();
	console.log(currentWeather, 'Current weather in component');
	return (
		<section className="card">
			<div className="card-header bg-white">Ottawa ON</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="pl-3">
					<img src={ParlyCloudy} style={{ width: '15rem' }} />
				</div>
				<div className="card-body ">
					<h5 className="card-title" style={{ fontSize: '6rem' }}>
						c{/* {currentWeather.main.temp}°C */}
					</h5>
					{/* <p className="card-text">{currentWeather.weather.description}</p> */}
					{/* <FontAwesomeIcon icon={faWind} /> {currentWeather.wind.speed} m/s */}
				</div>
			</div>

			<div className="card-body">
				Some Extra goes here text or .... goes here
			</div>
		</section>
	);
}

export default WeatherInfo;
