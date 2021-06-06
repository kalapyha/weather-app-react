import React from 'react';
import './Switch.css';
import { useGlobalContext } from '../../context/ContextProvider';

function Switch() {
	const { isMetric, toggleTemperature } = useGlobalContext();

	return (
		<label className="switch">
			<input
				type="checkbox"
				defaultChecked={isMetric && 'checked'}
				onChange={toggleTemperature}
			/>
			<span className="slider round pl-2 pt-1">°C °F</span>
		</label>
	);
}

export default Switch;
