import React from 'react';

function Error({ message }) {
	return (
		<div className="alert alert-danger d-flex align-items-center" role="alert">
			<div>{message}</div>
		</div>
	);
}

export default Error;
