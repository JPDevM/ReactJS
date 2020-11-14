import React from 'react';

const Form = () => {
	// Handler Test
	/* const test = event => {
		let tag = event.target;
		tag.style.color = 'red';
	} */

	// Handler Value
	const isEmpty = event => {
		let element = event.target;
		let feedback = element.nextElementSibling;
		let value = element.value;
		if (value.length < 3) {
			element.classList.remove('is-valid');
			element.classList.add('is-invalid');
			feedback.classList.add('invalid-feedback');
			feedback.classList.remove('valid-feedback');
			feedback.innerText = 'Hay error';
		} else {
			element.classList.remove('is-invalid');
			element.classList.add('is-valid');
			feedback.classList.remove('invalid-feedback');
			feedback.classList.add('valid-feedback');
			feedback.innerText = 'Todo correcto';
		}
	}

	// Handler Submit
	const handlerSubmit = event => {
		// Objeto puntero que identifica si hay errores
		let errors = {};

		// Capturamos el formulario en sí
		let form = event.target;

		// Evitar que se dispare el evento por defecto
		event.preventDefault();
		
		// Capturar todos los campos del formulario
		const formElements = Array.from(form.elements);
		
		// Sacamos al botón
		formElements.pop();

		// Iterar sobre los campos. Validar si están vacíos
		formElements.forEach(oneElement => {
			if (oneElement.value.length === 0) {
				oneElement.classList.add('is-invalid');
				// Si tenemos error en un campo, informamos al puntero
				// https://medium.com/@ungalganeshtech/javascript-how-to-add-dynamic-key-to-object-19280ca70afd
				errors[oneElement.name] = true;
			} else {
				oneElement.classList.remove('is-invalid');
				// si no hay error, eliminamos este valor de puntero
				delete errors[oneElement.name];
			}
		})

		// Si el puntero (está) no tiene errores, vamos a enviar
		// Si el puntero tiene una o más claves, hay errores
		if (Object.keys(errors).length > 0) {
			alert('Tenés errores');
		} else {
			// Si no hay errores. Vamos a enviar la data
			alert('Se va a enviar la información del formulario');
			// Acá va el pedido FETCH a la api
			// ...
			// Reset del formulario
			formElements.forEach(oneElement => {
				oneElement.value = '';
				oneElement.classList.remove('is-valid');
			})
		}

	}

	return (
		<form 
			action="/subscriptions" 
			method="POST"
			onSubmit={ handlerSubmit }
		>
			<div className="form-group">
				<label>Usuario:</label>
				<input 
					onInput={ isEmpty }
					type="text" 
					name="userName"
					className="form-control" 
				/>
				<span className="invalid-feedback"></span>
			</div>
			<div className="form-group">
				<label>Contraseña:</label>
				<input 
					onInput={ isEmpty }
					type="password" 
					name="userPassword"
					className="form-control" 
				/>
				<span className="invalid-feedback"></span>
			</div>
			<button type="submit" className="btn btn-info">ENVIAR</button>
		</form>
	)
}

export default Form;