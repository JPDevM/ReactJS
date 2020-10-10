import React from 'react';

let productsList = [
	{id: 1, name: 'TV', price: 123},
	{id: 2, name: 'Smartphone', price: 456},
	{id: 3, name: 'PC', price: 789},
	{id: 4, name: 'iPad', price: 353},
]

function Products () {
	return (
		<React.Fragment>
			<h2>Listado de productos</h2>
			<section>
				{
					productsList.map(function (oneProduct) {
						return (
							<article key={oneProduct.id}>
								<h2>{oneProduct.name}</h2>
								<p>{oneProduct.price}</p>
							</article>
						)
					})
				}
			</section>
		</React.Fragment>
	)
}

export default Products;