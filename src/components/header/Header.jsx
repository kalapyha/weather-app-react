import React from 'react';
import Switcher from './Switcher';
import { useGlobalContext } from '../../context/ContextProvider';

function Header() {
	const { isLoading } = useGlobalContext();
	return (
		<nav className="navbar bg-white" data-testid="header">
			<div className="container">
				<p className="navbar-brand h1">Weather</p>
				{!isLoading && <Switcher />}
			</div>
		</nav>
	);
}

export default Header;
