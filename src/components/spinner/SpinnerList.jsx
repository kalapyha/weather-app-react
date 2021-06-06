import React from 'react';
import Spinner from './Spinner';

function SpinnerList() {
	return (
		<section className="card">
			<div className="card-header bg-white">Favorite Locations</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<article className="d-flex align-items-center justify-content-between">
						<Spinner />
					</article>
				</li>
				<li className="list-group-item">
					<article className="d-flex align-items-center justify-content-between">
						<Spinner />
					</article>
				</li>
				<li className="list-group-item">
					<article className="d-flex align-items-center justify-content-between">
						<Spinner />
					</article>
				</li>
			</ul>
		</section>
	);
}

export default SpinnerList;
