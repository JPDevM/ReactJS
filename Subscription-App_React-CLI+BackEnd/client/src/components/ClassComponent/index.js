import { Component, Fragment } from 'react';

import './_index.scss';

class ClassComponent extends Component {
	/*
		Component State
	*/ 
	constructor() {
		super();
		this.state = {
			name: 'Juan Pablo',
			lastName: 'Dev'
		}
	}

	/* 
		Life Cycle
			• componentDidMount()
			• componentDidUpdate()
			• componentWillUnmount()
	*/

	componentDidMount() {
		console.log('El componente se montó');
		console.log('El valor actual del estado name y lastName es:');
		console.log(`${this.state.name} ${this.state.lastName}`);
	}

	componentDidUpdate() {
		console.log('El componente se actualizó');
		console.log('El valor actual del estado name y lastName es:');
		console.log(`${this.state.name} ${this.state.lastName}`);
	}

	componentWillUnmount() {
		console.log('El componente se desmontó y salió de Pantalla');
	}

	// Render
	render() {
		return (
			<Fragment>
				<h2>Esto es un ClassComponent {`${this.state.name} ${this.state.lastName}`}</h2>
				<button
					onClick={ () => this.setState({name: 'Javi', lastName: 'Herrera'}) }
				>Cambiar nombre</button>
			</Fragment>
		)
	}
}

export default ClassComponent;