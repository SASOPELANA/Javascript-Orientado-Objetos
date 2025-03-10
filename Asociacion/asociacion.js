// Asociacion en javascript
// Se refiere a la relacion entre objetos y metodos. --> dos objetos pueden estar relacionados entre si

// clases
class Persona {
  // constructor
  constructor(nombre, apellido, edad) {
    // atributos o campos de clases
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
}

const p1 = new Persona("Juan", "Perez", 30);
const p2 = new Persona("Maria", "Lopez", 25);

// relacion entre p1 y p2
p2.parent = p1;

console.log(p1);
console.log(p2);
