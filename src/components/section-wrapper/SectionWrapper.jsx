import React from 'react';
import FavoritesList from '../favorites-list/FavoritesList';
import WeatherInfo from '../weather-info/WeatherInfo';
import SpinnerNearByList from '../spinner/SpinnerNearByList';
import SpinnerList from '../spinner/SpinnerList';
import SpinnerSection from '../spinner/SpinnerSection';
import NearbyList from '../nearby-list/NearbyList';
import Error from '../error/Error';

import { useGlobalContext } from '../../context/ContextProvider';

function SectionWrapper() {
	const { isLoading, isError, errorMessage } = useGlobalContext();
	return (
		<>
			{isError ? (
				<Error message={errorMessage} />
			) : (
				<div className="row bg-light py-4 ">
					<div className="col-12 col-md-8 order-md-2 ">
						{isLoading ? <SpinnerSection /> : <WeatherInfo />}
						<div>{isLoading ? <SpinnerNearByList /> : <NearbyList />}</div>
					</div>
					<div className="col-12 col-md-4 order-md-1 ">
						{isLoading ? <SpinnerList /> : <FavoritesList />}
					</div>
				</div>
			)}
		</>
	);
}

export default SectionWrapper;
