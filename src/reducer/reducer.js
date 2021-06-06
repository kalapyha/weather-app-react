const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_TEMPERATURE':
			return { ...state, isMetric: !state.isMetric };
		case 'ON_LOADING':
			return { ...state, isLoading: true };
		case 'OFF_LOADING':
			return { ...state, isLoading: false };
		case 'UPDATE_ACTIVE_LOCATION':
			return { ...state, activeLocationIndex: action.payload };
		case 'SET_LOCATION':
			return {
				...state,
				latitude: action.payload.coords.latitude,
				longitude: action.payload.coords.longitude,
			};
		case 'SET_CURRENT_WEATHER':
			return {
				...state,
				currentWeather: action.payload,
			};
		case 'SET_WEATHER_DATA':
			return { ...state, list: action.payload };
		case 'SHOW_ERROR':
			return {
				...state,
				isLoading: false,
				isError: true,
				errorMessage: action.payload.err,
			};
		default:
			throw new Error('Incorrect action type!');
	}
};

export default reducer;
//AIzaSyAs83aBcujrQcZcHJyEPVwn4T-QKTzKGNw
