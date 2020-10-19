import React from 'react';

// Componentes
import Navbar from './components/Navbar';
import Products from './components/Products';
import ImagesList from './components/ImagesList';

let user = {
	name: 'Jhon',
	lastName: 'Doe'
};

let heroinas = [
	{ url: 'daenerys-targaryen.jpg', alt: 'Daenerys Targaryen' },
	{ url: 'arya-stark.jpg', alt: 'Arya Stark' },
	{ url: 'cersei-lannister.jpg', alt: 'Cersei Lannister' },
	{ url: 'black-widow.jpg', alt: 'Black Widow' },
];

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

			<h1 className="text">¿Qué es JSX?</h1>
			<h2>Hoy nos visita {user.name}</h2>
			<p>JSX = Javascript extended markup</p>

			<hr/>

			<ImagesList 
				imgsArray={heroinas} 
				title="Heroinas" 
			/>

			<hr/>

			<Products products={productsList}>
				<h4>Esto viene desde App</h4>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam pariatur cupiditate molestias? Aliquid eius deleniti temporibus fugiat alias quae repudiandae? Alias sed obcaecati aliquid quas dolorum quis nesciunt dolores?</p>
				<ImagesList
					imgsArray={heroes}
					title="Heroes"
				/>
			</Products>
		</div>
	)  
}

export default App;
