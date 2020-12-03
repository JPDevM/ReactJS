import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// CSS Styles
import './assets/css/app.css';
import './assets/css/bootstrap.min.css';

// Main Component
import App from './components/App';
ReactDOM.render(
	<Router>
		<App />
	</Router>
, document.getElementById('root'));
	
// Sandbox
// import AppTest from './components/playground/AppTest'	
// ReactDOM.render(
// 	<Router>
// 		<AppTest /> 
// 	</Router>
// , document.getElementById('root'));
