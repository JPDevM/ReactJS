import { log } from 'console';
import fs from 'fs';
import logInConsole, { sumar as Add } from './functions.js';

// JSON.parse(string) => retorna ese string "parseado"
let usersDB = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

logInConsole( Add(5, 8) );

logInConsole('Saludos');
logInConsole(usersDB);

// Array Methods
usersDB.forEach((oneUser, i) => {
	logInConsole(`${i + 1}. ${oneUser.email}`);
	// logInConsole(i + '. ' + oneUser.email);
});

let usersWithEUR = usersDB.filter(oneUser => oneUser.currency === 'EUR');
logInConsole(usersWithEUR)

let usersEmails = usersDB.map(oneUser => oneUser.email);
logInConsole(usersEmails);

let usersEUREmails = usersDB.filter(oneUser => oneUser.currency === 'EUR').map(user => user.email).join(', ');
logInConsole(usersEUREmails);
fs.writeFileSync('./usersEUREmails.csv', usersEUREmails);

// JavaScript Object Notation
// JSON.stringify => parsear de dato JS a string de tipo JSON
logInConsole( JSON.stringify([{name: 'Juan Pa'}, {name: 'Javi'}]) );

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);