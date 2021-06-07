import React from 'react';
import FavoritesListItem from './FavoritesListItem';
import { useGlobalContext } from '../../context/ContextProvider';

function FavoritesList() {
	const { favoriteLocations } = useGlobalContext();
	return (
		<section className="card pb-3">
			<div className="card-header bg-white">Favorite Locations</div>
			<ul className="list-group list-group-flush">
				{favoriteLocations.map((data, i) => {
					return (
						<FavoritesListItem
							key={i}
							image={data.weather[0].main}
							name={data.name}
							index={i}
						/>
					);
				})}
			</ul>
		</section>
	);
}

export default FavoritesList;
