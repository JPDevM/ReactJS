const juana = {
	nombre: 'Juana',
	apellido: 'Ita',
	edad: 23,
	nombreCompleto: function () {
		return `${this.nombre} ${this.apellido}`;
	},
}

console.log( juana.nombreCompleto() );

class Persona {
	constructor (nom = 'Jhon', ape = 'Doe') {
		this.nombre = nom;
		this.apellido = ape;
	}

	getNombreCompleto () {
		return `${this.nombre} ${this.apellido}`;
	}
}

const juanpa = new Persona('Juan Pablo', 'Dev');
const sinNombre = new Persona();
const javi = new Persona('Javi', 'Herrera');

console.log( juanpa.getNombreCompleto() );
console.log( sinNombre.getNombreCompleto() );
console.log( javi.getNombreCompleto() );