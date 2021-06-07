import React from 'react';
import { useGlobalContext } from '../../context/ContextProvider';
import { getWeatherImage } from '../../utils/helpers';
import './ListItem.css';

function ListItem({ name, image, index }) {
	const imgURL = `/assets/${getWeatherImage(image)}`;

	const { activeLocationIndex, showWeatherFromFavoritePlaces } =
		useGlobalContext();

	return (
		<li
			className={`list-group-item ${
				activeLocationIndex === index && 'bg-light'
			}`}
			onClick={() => showWeatherFromFavoritePlaces(index)}
		>
			<article className="d-flex align-items-center justify-content-start justify-content-md-between">
				<img
					src={imgURL}
					alt="Weather Logo"
					className="rounded float-left"
					style={{ height: '5vw', width: 'auto' }}
				/>
				<h4 className="pl-3 text-center">{name}</h4>
			</article>
		</li>
	);
}

export default ListItem;
