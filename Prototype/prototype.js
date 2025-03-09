// protitipos en javascript
// es la propiedad que nos permite heredar propiedades y metodos de un objeto a otro

// constructor
function Persona(nombre, apellido, edad) {
  // propiedades o instacias de la clase
  this._nombre = nombre;
  this._apellido = apellido;
  this._edad = edad;

  // metodos
  this.displayName = function () {
    return `${this._nombre} ${this._apellido} ${this._edad}`;
  };
}

const p1 = new Persona("Prota", "devs", 20);
p1._nombre = "Sergio";
p1._apellido = "Desvelopment";
p1._edad = 30;
const p2 = new Persona("Developer", "Prota", 25);

// console.log(p1.displayName());
// console.log(p2.displayName());

const p3 = new Persona("Juan", "Perez", 30);
const p4 = new Persona("Maria", "Lopez", 25);

// Asi como podemos agegar propiedades, podemos agregar metodos.
// con este metodo modifiacmos el constructor por defecto
Persona.prototype.Saludar = function () {
  return `Hola mi nombre es ${this._nombre}`;
};

console.log("\n");

console.log(p1.Saludar());
console.log(p2.Saludar());
console.log(p3.Saludar());
console.log(p4.Saludar());

// Modifiacmos el constructor por defecto
console.log("\n-----------------------------------------------------");

const s = new String("Hello world");

// Asi como podemos agegar propiedades, podemos agregar metodos.
String.prototype.concatenar = function () {
  return this + " " + "Prota devs";
};

console.log(s.concatenar());

console.log(`Soy un programador de javascript`.concatenar());

// Con prototype podemos modificar el constructor por defecto que viene de la libreria de javascript
// libreria de javascript
// String, Array, Object, Function
