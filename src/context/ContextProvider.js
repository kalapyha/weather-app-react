import React, { useContext, useReducer, useEffect, useRef } from 'react';
import reducer from '../reducer/reducer';
import axios from 'axios';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const initialState = {
		isLoading: true,
		isError: false,
		activeLocationIndex: 0,
		errorMessage: 'Ooops, something went wrong.',
		isMetric: true,
		list: [],
		currentWeather: {},
		latitude: '',
		longitude: '',
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const initialRender = useRef(true);

	const toggleTemperature = () => {
		dispatch({ type: 'TOGGLE_TEMPERATURE' });
	};

	const showWeatherFromList = (index) => {
		dispatch({ type: 'UPDATE_ACTIVE_LOCATION', payload: index });
		dispatch({
			type: 'SET_CURRENT_WEATHER',
			payload: state.list[state.activeLocationIndex],
		});
	};

	const saveCoordinates = (location) => {
		dispatch({ type: 'SET_LOCATION', payload: location });
		console.log('HERE!!!', location);
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
				const res = await axios.get(
					`http://api.openweathermap.org/data/2.5/find?lat=${state.latitude}&lon=${state.longitude}&cnt=6&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
				);
				dispatch({ type: 'SET_WEATHER_DATA', payload: res.data.list });
				//TODO !!!!
				dispatch({
					type: 'SET_CURRENT_WEATHER',
					payload: res.data.list[0],
				});
			} catch (err) {
				console.error(err);
				dispatch({ type: 'SHOW_ERROR', payload: err });
			}
		};

		if (initialRender.current) {
			initialRender.current = false;
		} else {
			fetchWeather();
			dispatch({ type: 'OFF_LOADING' });
		}
	}, [state.latitude, state.longitude]);

	useEffect(() => {
		if (initialRender.current) {
			console.log('List was updated!!!');
		} else {
			console.log('Second List was updated!!!');
		}
	}, [state.currentWeather]);

	return (
		<AppContext.Provider
			value={{ ...state, toggleTemperature, showWeatherFromList }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
