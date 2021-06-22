import React from 'react';

// Componentes
import Navbar from './components/Navbar';
import Products from './components/Products';

let user = {
	name: 'Jhon',
	lastName: 'Doe'
};


function App () {
	return (
		<React.Fragment>
			<Navbar/>  {/* Renderiza el componente Navbar */}
			<h1 className="text">¿Qué es JSX?</h1>
			<h2>Hoy nos visita {user.name}</h2>
			<p>JSX = Javascript extended markup</p>
			<hr/>
			<Products/> {/* Renderiza el componente Products */}
		</React.Fragment>
	)  
}

export default App;
