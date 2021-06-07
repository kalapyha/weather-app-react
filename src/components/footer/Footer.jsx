import React from 'react';

function Footer() {
	return (
		<footer className="footer d-flex align-items-center justify-content-center bg-dark fixed-bottom mt-5">
			<span className="text-muted text-center p-2">
				<small>
					CC0 ⓪ | Weather App | Made by{' '}
					<a
						href="https://github.com/kalapyha/weather-app-react"
						className="badge badge-dark"
					>{`<Nick K.>`}</a>{' '}
					using OpenWeather API
				</small>
			</span>
		</footer>
	);
}

export default Footer;
