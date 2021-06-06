import React from 'react';
import Rainy from '../../assets/Rainy.png';
import { useGlobalContext } from '../../context/ContextProvider';

function ListItem({ name, country, index }) {
	const { activeLocationIndex, showWeatherFromList } = useGlobalContext();

	return (
		<li
			className={`list-group-item ${
				activeLocationIndex === index && 'bg-light'
			}`}
			onClick={() => showWeatherFromList(index)}
		>
			<article className="d-flex align-items-center justify-content-between">
				<img
					src={Rainy}
					className="rounded float-left"
					alt="..."
					style={{ height: '5vw', width: 'auto' }}
				></img>
				<h4 className="px-2 text-center">
					{name}, {country}
				</h4>
			</article>
		</li>
	);
}

export default ListItem;
