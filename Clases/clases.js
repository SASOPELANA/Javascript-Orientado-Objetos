// Class en JavaScript
// es un conjunto de metodos que permite definir un objeto.

/*
function Perosna() {
  this.nombre = "";
  this.apellido = "";
  this.edad = 0;
}
*/

// este metodo es mas legible y mas entendible
class Persona {
  constructor(nombre, apellido, edad) {
    // propiedades o campos de clases
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  // metodos
  saludar() {
    return `Hola, soy ${this._nombre} ${this._apellido} y tengo ${this._edad} años.`;
  }
}

// Creamos un objeto o instanciamos una clase
const p1 = new Persona("Sergio", "Devs", 30);
const p2 = new Persona("Alejandro", "Hello", 25);

console.log(p1.saludar());
console.log(p2.saludar());

console.log(typeof Persona);
console.log(Persona.prototype);
