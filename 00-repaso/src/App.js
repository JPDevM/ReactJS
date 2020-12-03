import { Switch, Route } from 'react-router-dom';

import './assets/css/app.css';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App () {
	return (
		<>
			<Navbar/>
			<hr/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/services' component={Services} />
			</Switch>
		</>
	);
}

export default App;