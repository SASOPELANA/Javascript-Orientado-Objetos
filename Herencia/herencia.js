// Herencia en javascript

// clases
class Persona {
  // Constructor
  constructor(nombre, apellido, edad) {
    // Atributos
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
}

// Herencia usando clases en javascript
class Programador extends Persona {
  // constructor
  constructor(lenguaje, nombre, apellido, edad) {
    // método super para hacer uso de la herencia en javascript
    super(nombre, apellido, edad);
    this._lenguaje = lenguaje;
  }
}

const p1 = new Persona("Prota", "Developer", 23);
const programador = new Programador("JavaScript", "Maria", "Perez", 25);

console.log(p1);
console.log(programador);
