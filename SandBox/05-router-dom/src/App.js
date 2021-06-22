import React from 'react';

// Router
import { Route, Switch } from 'react-router-dom';

// Componentes
import Navbar from './components/Navbar';
import Products from './components/Products';
import ImagesList from './components/ImagesList';
import RickMorty from './components/RickMorty';
import Profiles from './components/Profiles';

let user = {
	name: 'Jhon',
	lastName: 'Doe'
};

let heroes = [
	{ url: 'black-panther.jpg', alt: 'Black Panther' },
	{ url: 'captain-america.jpg', alt: 'Captain America' },
	{ url: 'darth-vader.jpg', alt: 'Darth Vader' },
];

let productsList = [
	{ id: 1, name: 'TV', price: 123 },
	{ id: 2, name: 'Smartphone', price: 456 },
	{ id: 3, name: 'PC', price: 789 },
	{ id: 4, name: 'iPad', price: 353 },
];

function App () {
	return (
		<div className="container">
			<Navbar/>

			<Switch>
				<Route path="/profiles" component={Profiles}/>

				<Route path="/" exact>
					<h1>Esta es la home</h1>
					<p>Elegí cualquier opción de la barra de navegación.</p>
				</Route>

				<Route path="/jsx">
					<h1 className="text">¿Qué es JSX?</h1>
					<h2>Hoy nos visita {user.name}</h2>
					<p>JSX = Javascript extended markup</p>
				</Route>

				<Route path="/productos">
					<Products products={productsList}>
						<h4>Esto viene desde App</h4>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam pariatur cupiditate molestias? Aliquid eius deleniti temporibus fugiat alias quae repudiandae? Alias sed obcaecati aliquid quas dolorum quis nesciunt dolores?</p>
						<ImagesList
							imgsArray={heroes}
							title="Heroes"
						/>
					</Products>
				</Route>

				<Route path="/rick" component={RickMorty} />
			</Switch>
		</div>
	)  
}

export default App;
