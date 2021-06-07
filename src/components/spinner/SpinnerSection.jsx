import React from 'react';
import Spinner from './Spinner';

function SpinnerSection() {
	return (
		<section className="card">
			<div className="card-header bg-white">
				Finding your current location...
			</div>
			<div className="d-flex justify-content-center align-items-center p-5">
				<Spinner />
			</div>
		</section>
	);
}

export default SpinnerSection;
