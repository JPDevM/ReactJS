import React, { Component } from 'react';

class TestLifeCycle extends Component {
	// El estado de un componente se configura así:
	constructor(){
		super();
		this.state = {
			developer: 'Juan Pa'
		}
	}

	// El ciclo de vida de un componente tiene 3 etapas
	// 1er etapa - cuando el componente se monta (renderiza)
	componentDidMount() {
		console.log('Se montó el componente');
	}

	// 2da etapa - cuando el componente se actualiza
	// Importante: un componente se actualiza, cuando su estado interno ha cambiado
	componentDidUpdate() {
		console.log('Se actualizó el componente');
		if(this.state.developer === 'Javi') {
			console.log('Hola Javi');
		}
	}

	// 3er etapa - cuando el componente se desmonta (sale de la pantalla)
	// Importante: un componente se desmonta, cuando con un ruteador, decidimos que ese componente no se muestre más
	componentWillUnmount() {
		console.log('El componente se desmontó');
	}

	render () {
		return(
			<div style={{color: 'white'}}>
				<h3>Test Life Cycle</h3>
				<p>El developer es: {this.state.developer}</p>
				<button 
					onClick={ () => this.setState({developer: 'Javi'}) } 
				>Cambiar al DEV</button>
			</div>
		)
	}
}

export default TestLifeCycle;