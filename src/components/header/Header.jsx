import React from 'react';
import Switch from './Switch';

function Header() {
	return (
		<nav className="navbar bg-white">
			<div className="container">
				<p className="navbar-brand h1">Weather</p>
				<Switch />
			</div>
		</nav>
	);
}

export default Header;
