import React from 'react';

import { Link } from 'react-router-dom';

function Navbar () {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/profiles">Perfiles</Link></li>
				<li><Link to="/jsx">Qué es JSX</Link></li>
				<li><Link to="/productos">Productos</Link></li>
				<li><Link to="/rick">Rick and Morty</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar;