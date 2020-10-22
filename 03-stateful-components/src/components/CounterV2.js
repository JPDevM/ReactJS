import React, { useState, useEffect } from 'react';

function CounterV2 () {
	const [initialValue, setInitialValue] = useState(1);

	const incrementHandler = () => {
		setInitialValue(function (prevState) {
			return prevState + 1;
		})
	}
	
	const decrementHandler = () => {
		setInitialValue(function (prevState) {
			if (prevState > 0) {
				return prevState - 1;
			}
			return prevState;
		})
	}

	// Aquí tenés los 3 ciclos de vida
	useEffect(function () {
		console.log('Se montó');
		// si el array está vacío se ejecuta solamente en el mount
	}, [])

	useEffect(function () {
		console.log('Se actualizó');
		// Acá se ejecuta cada vez que el state initialValue se actualiza
	}, [initialValue])

	return (
		<React.Fragment>
			<h3>Stateful component v2</h3>
			<h2
				className="alert alert-warning"
			>
				{initialValue}
			</h2>
			<button
				className="btn btn-success"
				onClick={decrementHandler}
			>
				Decrementar
			</button>
			<button
				className="btn btn-success mx-3"
				onClick={incrementHandler}
			>
				Incrementar
			</button>
		</React.Fragment>
	)
}

export default CounterV2;