import React from 'react';
import List from '../list/List';
import WeatherInfo from '../weather-info/WeatherInfo';
import SpinnerList from '../spinner/SpinnerList';
import SpinnerSection from '../spinner/SpinnerSection';

import { useGlobalContext } from '../../context/ContextProvider';

function SectionWrapper() {
	const { isLoading } = useGlobalContext();
	return (
		<div className="row bg-light py-4">
			<div className="col-12 col-md-8 order-md-2">
				{isLoading ? <SpinnerSection /> : <WeatherInfo />}
			</div>
			<div className="col-12 col-md-4 order-md-1">
				{isLoading ? <SpinnerList /> : <List />}
			</div>
		</div>
	);
}

export default SectionWrapper;
