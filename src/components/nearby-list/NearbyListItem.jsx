import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faWind,
	faThermometerHalf,
	faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

function NearbyListItem({ name, wind, temp }) {
	return (
		<div className="py-4 px-2 border rounded bg-white">
			<h5 className="text-center">
				<FontAwesomeIcon icon={faMapMarkerAlt} className="text-muted" /> {name}
			</h5>

			<div className="text-secondary d-flex justify-content-between flex-column align-items-md-center flex-xl-row">
				<div>
					<FontAwesomeIcon icon={faWind} /> {wind} <small>m/s</small>
				</div>
				<div className="d-inline text-dark px-1"> | </div>
				<div>
					<FontAwesomeIcon icon={faThermometerHalf} /> {temp} <small>°C</small>
				</div>
			</div>
		</div>
	);
}

export default NearbyListItem;
