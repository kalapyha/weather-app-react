import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SectionWrapper from './components/section-wrapper/SectionWrapper';

function App() {
	return (
		<div className="bg-light pb-5">
			<Header />
			<div className="container">
				<SectionWrapper />
			</div>
			<Footer />
		</div>
	);
}

export default App;
