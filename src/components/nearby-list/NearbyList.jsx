import React from 'react';
import NearbyListItem from './NearbyListItem';
import { useGlobalContext } from '../../context/ContextProvider';

function NearbyList() {
	const { placesNear } = useGlobalContext();
	return (
		<article className="d-none d-lg-block d-xl-block mt-3 pt-2">
			<hr />
			<h3 className="text-center font-weight-light py-2">
				{' '}
				Places located near you:
			</h3>
			<div className="d-flex align-items-stretch justify-content-between ">
				{placesNear.map((data, i) => {
					return (
						<NearbyListItem
							key={i}
							name={data.name}
							wind={data.wind.speed}
							temp={data.main.temp}
						/>
					);
				})}
			</div>
		</article>
	);
}

export default NearbyList;
