import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// CSS Styles
import './assets/css/index.css';
import './assets/css/bootstrap.min.css';

// Main Component
import App from './components/App';

ReactDOM.render(
	<Router>
	<App />
	</Router>
,document.getElementById('root'));
