import React, { useContext, useReducer, useEffect, useRef } from 'react';
import reducer from '../reducer/reducer';
import axios from 'axios';
import { convertTemperature } from '../utils/helpers';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const initialState = {
		isLoading: true,
		isError: false,
		activeLocationIndex: 0,
		errorMessage: 'Ooops, something went wrong.',
		isCelsius: true,
		favoriteLocations: [],
		placesNear: [],
		currentWeather: {},
		latitude: '',
		longitude: '',
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const initialRender = useRef(true);

	const toggleTemperature = () => {
		dispatch({ type: 'TOGGLE_TEMPERATURE' });
		dispatch({
			type: 'CONVERT_MAIN_TEMPERATURE',
			payload: {
				...state.currentWeather,
				main: {
					...state.currentWeather.main,
					temp: convertTemperature(
						state.currentWeather.main.temp,
						state.isCelsius
					),
					feels_like: convertTemperature(
						state.currentWeather.main.feels_like,
						state.isCelsius
					),
				},
			},
		});
	};

	const showWeatherFromFavoritePlaces = (index) => {
		dispatch({ type: 'UPDATE_ACTIVE_LOCATION', payload: index });
		dispatch({
			type: 'SET_CURRENT_WEATHER',
			payload: state.favoriteLocations[index],
		});
	};

	const saveCoordinates = (location) => {
		dispatch({ type: 'SET_LOCATION', payload: location });
	};

	useEffect(() => {
		const fetchCoordinates = async () => {
			try {
				await window.navigator.geolocation.getCurrentPosition(saveCoordinates);
			} catch (err) {
				console.error(err);
				dispatch({ type: 'SHOW_ERROR', payload: err });
			}
		};

		fetchCoordinates();
	}, []);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const placesNearUser = await axios.get(
					//Show 4 places near user location
					`http://api.openweathermap.org/data/2.5/find?lat=${state.latitude}&lon=${state.longitude}&cnt=4&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
				);

				const curLocationWeather = await axios.get(
					//Current user location city weather
					`http://api.openweathermap.org/data/2.5/weather?lat=${state.latitude}&lon=${state.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
				);

				const bboxWeather = await axios.get(
					//Cities within a geo bbox. See example on the map http://bboxfinder.com/#44,-76,46,-73
					`http://api.openweathermap.org/data/2.5/box/city?bbox=-76,44,-73,46,9&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
				);

				dispatch({
					type: 'SET_PLACES_NEAR_TO_CURRENT_LOCATION',
					payload: placesNearUser.data.list,
				});

				dispatch({
					type: 'SET_CURRENT_WEATHER',
					payload: curLocationWeather.data,
				});

				dispatch({
					type: 'SET_5_FAVORITE_PLACES',
					payload: bboxWeather.data.list.slice(0, 5),
				});

				dispatch({ type: 'OFF_LOADING' });
			} catch (err) {
				console.error(err);
				dispatch({ type: 'SHOW_ERROR' });
			}
		};

		if (initialRender.current) {
			initialRender.current = false;
		} else {
			fetchWeather();
		}
	}, [state.latitude, state.longitude]);

	return (
		<AppContext.Provider
			value={{ ...state, toggleTemperature, showWeatherFromFavoritePlaces }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
