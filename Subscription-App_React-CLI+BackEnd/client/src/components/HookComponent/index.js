import { Fragment, useState, useEffect } from 'react';


const HookComponent = () => {
	// Component State
	let [name, setName] = useState('Juan Pablo');
	let [lastName, setLastName] = useState('Dev');

	/* Life Cycle */ 

	return (
		<Fragment >
			<h2>Soy un componente con Hook, el Developer se llama: {name} {lastName}</h2>
			<button onClick={ () => {
				setName('Javi') 
				setLastName('Herrera')
			}}
			>Haceme clic</button>
		</Fragment>
	)
}

export default HookComponent;