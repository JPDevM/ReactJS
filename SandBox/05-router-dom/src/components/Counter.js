import React, { Component } from 'react';

class Counter extends Component {
	constructor () {
		super();
		this.state = {
			initialValue: 1
		}
	}

	incrementHandler = () => {
		this.setState(function (prevState) {
			return {
				initialValue: prevState.initialValue + 1
			};
		})
	}

	decrementHandler = () => {
		this.setState(function (prevState) {
			if (prevState.initialValue > 0) {
				return {
					initialValue: prevState.initialValue - 1
				};
			}
			return { initialValue: prevState.initialValue };
		})
	}

	// Aquí haces los llamados a las API's
	componentDidMount () {
		console.log('Se montó');
	}

	// Aquí estás checkeando qué pasa con el componente
	componentDidUpdate () {
		if (this.state.initialValue === 5) {
			console.log('Llegaste a 5');
		}
		console.log('Se actualizó');
	}

	// Aquí vas a hacer algo cuando se desmonta
	componentWillUnmount () {
		console.log('Se desmontó');
	}

	render () {
		const { initialValue } = this.state;
		const { text } = this.props;
		return (
			<React.Fragment>
				<h3>{text}</h3>
				<h2 
					className="alert alert-warning"
				>
					{initialValue}
				</h2>
				<button 
					className="btn btn-success"
					onClick={this.decrementHandler}
				>
					Decrementar
				</button>
				<button 
					className="btn btn-success mx-3"
					onClick={this.incrementHandler}
				>
					Incrementar
				</button>
			</React.Fragment>
		)
	}
}

export default Counter;