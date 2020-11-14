import React from 'react';

import { Link, Route } from 'react-router-dom';

import ProfileDetail from './ProfileDetail';

let heroinas = [
	{ id: 1, url: 'daenerys-targaryen.jpg', nombre: 'Daenerys Targaryen', edad:27 },
	{ id: 2, url: 'arya-stark.jpg', nombre: 'Arya Stark' },
	{ id: 3, url: 'cersei-lannister.jpg', nombre: 'Cersei Lannister' },
	{ id: 4, url: 'black-widow.jpg', nombre: 'Black Widow' },
];

const Profiles = () => {
	return (
		<React.Fragment>
			<h2>Profiles</h2>

			{
				heroinas.map(heroina => {
					return (
						<Link to={`/profiles/${heroina.id}/${heroina.edad ? heroina.edad : '' }`} key={heroina.id }>
							<img src={`/images/${heroina.url}`} alt={`/images/${heroina.nombre}`} className="rounded img-thumbnail mx-2" width="150" />
						</Link>
					)
				})
			}

			<Route path="/profiles/:id/:edad?" render={ props => <ProfileDetail heroinasArray={heroinas} {...props} /> } />

			{/* <Link to="/profiles/1/35">
				<img src="/images/daenerys-targaryen.jpg" alt="daenerys targeryan" className="rounded img-thumbnail mx-2" width="150"/>
			</Link>
			
			<Link to="/profiles/2">
				<img src="/images/arya-stark.jpg" alt="arya stark" className="rounded img-thumbnail mx-2" width="150"/>
			</Link>

			<Link to="/profiles/3">
				<img src="/images/cersei-lannister.jpg" alt="cersei lannister" className="rounded img-thumbnail mx-2" width="150"/>
			</Link>
			
			<Link to="/profiles/4">
				<img src="/images/black-widow.jpg" alt="black widow" className="rounded img-thumbnail mx-2" width="150"/>
			</Link> */}
		</React.Fragment>
	)
}

export default Profiles;