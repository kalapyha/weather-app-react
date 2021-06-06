import React from 'react';
import ListItem from './ListItem';
import { useGlobalContext } from '../../context/ContextProvider';

function List() {
	const { list } = useGlobalContext();
	return (
		<section className="card">
			<div className="card-header bg-white">Favorite Locations</div>
			<ul className="list-group list-group-flush">
				{list.map((forecast, i) => {
					return (
						<ListItem
							key={i}
							name={forecast.name}
							country={forecast.sys.country}
							index={i}
						/>
					);
				})}
			</ul>
		</section>
	);
}

export default List;
