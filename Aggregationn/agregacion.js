// Agregacion en JavaScript

const compania = {
  nombre: "Don Pollo",
  empleados: [],
};

class Persona {
  // Constructor
  constructor(nombre, apellido, edad) {
    // Atributos de la clase
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
}

const p1 = new Persona("Juan", "Perez", 30);
const p2 = new Persona("Maria", "Lopez", 25);

// metodo para agregar objetos a un arreglo
compania.empleados.push(p1, p2);

console.log(p1);
console.log(p2);

console.log("\n");

console.log(compania);
