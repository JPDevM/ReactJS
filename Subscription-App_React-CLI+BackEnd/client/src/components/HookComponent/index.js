import { Fragment, useState, useEffect } from 'react';


const HookComponent = () => {
	let initialNickName = localStorage.getItem('nickname');
	// Component State
	let [name, setName] = useState(initialNickName || 'Juan Pablo');
	let [lastName, setLastName] = useState('Dev');

	/* Life Cycle - DidMount */ 
	useEffect(() => {
		console.log('El componente HookComponent se montó');
	}, [])

	/* Life Cycle - DidUpdate */ 
	useEffect(() => {
		console.log(`Se actualizó el name o el lastName: ${name} ${lastName}`);
	}, [name, lastName])

	/* Life Cycle - willUnmount */
	useEffect(() => {
		return () => {
			localStorage.setItem('nickname', 'Abandonador');
		};
	}, [])

	return (
		<Fragment >
			<h2>Soy un componente con Hook, el Developer se llama: {name} {lastName}</h2>
			<button onClick={ () => setName('Javi') }>Cambiar Nombre</button>
			<button onClick={ () => setLastName('Herrera') }>Cambiar Apellido</button>
		</Fragment>
	)
}

export default HookComponent;