import React from 'react';
import { useGlobalContext } from '../../context/ContextProvider';
import { getWeatherImage } from '../../utils/helpers';
import './css/ListItem.css';

function FavoritesListItem({ name, image, index }) {
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
				<p className="pl-3 h4 text-center ">{name}</p>
			</article>
		</li>
	);
}

export default FavoritesListItem;
