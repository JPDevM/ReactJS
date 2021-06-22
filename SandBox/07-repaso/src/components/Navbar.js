import { Link } from 'react-router-dom';

import ReactLogo from '../assets/images/react-logo.png';

/*
	1. Generar el estado get - set, para estar pendiente de la ruta en la que estás
	2. Event handler que te permita setear el estado con la nueva ubicación
	3. useEffect para poder modificar el componente si el mismo se actualizó
*/

export default function Navbar () {
	return (
		<nav className="main-navbar">
			<Link to="/">
				<img src={ReactLogo} width="80" alt="React Logo" />
			</Link>
			
			<ul>
				<li>
					<Link 
						to="/" 
						onClick={() => console.log('home')}
					>
						Home
					</Link>
				</li>
				<li>
					<Link 
						to="/about" 
						onClick={() => console.log('about')}
					>
						About
					</Link>
				</li>
				<li>
					<Link 
						to="/services"
						onClick={() => console.log('services')}
					>
						Services
					</Link>
				</li>
			</ul>
		</nav>
	)
}