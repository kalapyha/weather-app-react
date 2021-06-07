import React from 'react';
import ListItem from './ListItem';
import { useGlobalContext } from '../../context/ContextProvider';

function List() {
	const { favoriteLocations } = useGlobalContext();
	return (
		<section className="card">
			<div className="card-header bg-white">Favorite Locations</div>
			<ul className="list-group list-group-flush">
				{favoriteLocations.map((data, i) => {
					return (
						<ListItem
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

export default List;
