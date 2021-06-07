import React from 'react';

function Spinner() {
	return (
		<div
			data-testid="spinner"
			className="spinner-border p-2"
			style={{ width: '5.5rem', height: '5.5rem' }}
			role="status"
		></div>
	);
}

export default Spinner;
