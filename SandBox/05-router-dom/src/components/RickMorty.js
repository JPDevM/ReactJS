import React,  {useState, useEffect} from 'react';

function RickMorty () {
	const [characters, setCharacters] = useState([]);

	useEffect(function () {
		fetch('https://rickandmortyapi.com/api/character')
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results);
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<React.Fragment>
			<h2>Rick & Morty</h2>
			<div className="row">
				{
					characters.map(function (oneCharacter, i) {
						return (
							<div className="col-6" key={i}>
								<img src={oneCharacter.image} width="100%" alt={oneCharacter.name}/>
								{oneCharacter.name}
							</div>
						)
					})
				}
			</div>
		</React.Fragment>
	)
}

export default RickMorty;