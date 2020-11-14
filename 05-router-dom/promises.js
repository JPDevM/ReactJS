/*
	Las promesas nos ayudan a resolver el código asincrónico
	Son funciones "especiales"
*/ 

/*
const unaPromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Se rechazó la promesa');
	}, 3000)
});

unaPromesa
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	})
*/

const fetch = require('node-fetch');

// fetch('https://rickandmortyapi.com/api/character/1')
// 	.then(response => response.json())
// 	.then(data => {
// 		rick = data;
// 	})
// 	.catch(error => console.log(error));

const getData = async (endPoint) => {
	let response = await fetch(endPoint);
	return await response.json();
}

getData('https://rickandmortyapi.com/api/character/1')
	.then(data => {
		console.log(data);
	})

/*
	1. Generar el proyecto de Node - Express
	2. Definir el route system
	3. Definir el esquema los controllers
	4. Implementar Passport como middleware en algunos end points
		4.1. Quizás sea necesarias algunas vistas
	5. Implementar session como middleware de app
*/