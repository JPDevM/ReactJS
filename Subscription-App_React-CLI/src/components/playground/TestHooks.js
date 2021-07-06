import React, { useState, useEffect } from 'react';

/* 
	Hooks en React traen muchas cosas. 
		- Lo primero es el ciclo de vida
			Dentro del ciclo de vida de un componente, se encuentran 3 etapas:
			1. Componente montado
			2. Componente actualizado
			3. Componente desmontado
		
			- El uso del estado - useState
				useState es una función que sirve para configurar un estado y para reconfigurar el mismo.
*/

const TestHooks = () => {
	/*
	const developer = useState('Juan Pa'); // Array
	const getDev = developer[0]; // Obtengo el valor inicial
	const setDev = developer[1]; // Fn - Permite volver a setear el estado "dev"
	*/

	const [getApi, setApi] = useState(true); 
	const [getDev, setDev] = useState('Juan Pa'); 
	const [getDay, setDay] = useState('Lunes'); 

	const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

	const chooseRandomDay = () => {
		let choosenDay = weekDays[Math.floor(Math.random() * 7)];
		if (getDay !== choosenDay) {
			setDay(choosenDay);
		} else {
			console.log('Salío el mismo día');
		}
	}

	// es como el componentDidMount
	useEffect(() => {
		console.log('Esto se ejecuta como componentDidMount');
	}, [])
	
	// es como el componentDidUpdate
	useEffect(() => {
		console.log('Esto se ejecuta como componentDidUpdate');
	})
	
	// es como el componentDidUpdate - pero solo para el estado getDay
	useEffect(() => {
		console.log('Esto se ejecuta cuando el componente actualiza el estado getDay');
	}, [getDay])

	// es como el componentWillUnmount
	useEffect(() => {
		return function cleanup() {
			console.log('Se desmontó el componente de HOOKS');
		}
	}, []) // El array vació permite que NO esté pendiente del cambio de ningún estado

	return (
		<div style={{color: 'white'}}>
			{
				getApi ?
				<>
					<h3>Test React Hooks</h3>
					<p>El desarrollador de esta aplicación fue: {getDev}</p>
					<p>Hoy es: {getDay}</p>
					<button onClick={ () => setDev('Javi') }>Cambiar al DEV</button>
					<button onClick={ () => chooseRandomDay() }>Cambiar el DIA</button>
				</>
				:
				<p>Cargando</p>
			}
		</div>
	)
}

export default TestHooks;