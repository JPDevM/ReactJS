import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './css/app.css';
import App from './App'; 

// Importing the Bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css'; 


ReactDOM.render( 
<React.StrictMode className="bg-dark"> 
	<App /> 
</React.StrictMode>, 
document.getElementById('root') 
); 