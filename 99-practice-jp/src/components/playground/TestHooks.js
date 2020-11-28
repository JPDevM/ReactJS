import React, { useEffect } from 'react';

/* 
	Hooks en React traen muchas cosas. 
		- Lo primero es el ciclo de vida
		Dentro del ciclo de vida de un componente, se encuentran 3 etapas:
			1. Componente montado
			2. Componente actualizado
			3. Componente desmontado
*/

const TestHooks = () => {
	// Para manejar el Life Cycle - useEffect() es un callback que está atado al ciclo de vida
	useEffect(() => {
		console.log('Se montó el componente con HOOKS');
	});

	useEffect(() => console.log('Se desmontó el componente de HOOKS') )

	return (
		<div style={{color: 'white'}}>
			<h3>Test React Hooks</h3>
		</div>
	)
}

export default TestHooks;