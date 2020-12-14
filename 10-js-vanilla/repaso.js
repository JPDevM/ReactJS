let countries = ['Argentina', 'Brasil', 'Colombia', 'Uruguay'];

// Destructuring

// let arg = countries[0];
// let col = countries[2];

let [arg, , col] = countries; // por órden 

console.log(arg, col);

let user = {
	name: 'Jhon',
	age: 24,
	email: 'jhon@gmail.com',
	birthday: '2002-05-11',
}

let {email: userEmail, age: userAge} = user; // por nombre de propiedad

console.log(userEmail, userAge);

let users = [
	{
		name: 'Jhon',
		age: 24,
		email: 'jhon@gmail.com',
		birthday: '2002-05-11',
	},
	{
		name: 'Paul',
		age: 23,
		email: 'paul@gmail.com',
		birthday: '2005-08-28',
	}
];

let [jhon, paul] = users;

let {name: jhonName} = jhon;
let {email: paulEmail} = paul;

console.log(jhonName);
console.log(paulEmail);