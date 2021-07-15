import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';


import TestHooks from './TestHooks';
import TestLifeCycle from './TestLifeCycle';
import List from './List';

const AppTest = () => {
	return (
		<div style={{ color: 'white' }} className="test">
			
			<h3>Componente inicial AppTest</h3>

			<List dataList={['Pera', 'Banana', 'Frutilla']} />
			
			<List dataList={['Juan', 'Pedro', 'Mariano']} />

			<Link to='/life-cycle'>Ir a Life Cycle</Link>
			<br/>
			<Link to='/hooks'>Ir a Hooks</Link>

			<Switch>
				<Route path='/life-cycle' component={TestLifeCycle} />
				<Route path='/hooks' component={TestHooks} />
			</Switch>
		</div>
	)
}

export default AppTest