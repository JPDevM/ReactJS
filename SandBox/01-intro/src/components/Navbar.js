import React from 'react';

function Navbar () {
	return (
		<nav> {/* Siempre exporta un único objeto ya sea una etiqueta HTML o React.Fragment */} 
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/">About</a></li>
				<li><a href="/">Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;