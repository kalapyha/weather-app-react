import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SectionWrapper from './components/section-wrapper/SectionWrapper';

// console.log(process.env.REACT_APP_WEATHER_API_KEY);
function App() {
	return (
		<div className="bg-light">
			<Header />
			<div className="container">
				<SectionWrapper />
			</div>
		</div>
	);
}

export default App;
