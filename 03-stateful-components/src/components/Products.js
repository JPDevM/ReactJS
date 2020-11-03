import React from 'react';

function Products ({ children, products }) {
	return (
		<React.Fragment>
			<h2>Listado de productos</h2>
			<div className="row">
				{
					products.map(function (oneProductFinal) {
						return (
							<div className="col-6" key={oneProductFinal.id}>
								<h2>{oneProductFinal.name}</h2>
								<p>{oneProductFinal.price}</p>
							</div>
						)
					})
				}
			</div>
			{ children }
		</React.Fragment>
	)
}

export default Products;