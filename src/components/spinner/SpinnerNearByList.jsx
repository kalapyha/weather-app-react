import React from 'react';
import Spinner from './Spinner';

function SpinnerNearByList() {
	return (
		<article className="d-none d-lg-block d-xl-block mt-3 pt-2">
			<hr />
			<h3 className="text-center font-weight-light py-2">
				{' '}
				Looking for places near you...
			</h3>
			<div className="d-flex align-items-center justify-content-center p-5">
				<Spinner />
			</div>
		</article>
	);
}

export default SpinnerNearByList;
