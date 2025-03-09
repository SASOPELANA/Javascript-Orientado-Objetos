// Constructor en Javascript

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 34,
  metodoNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
};

// creamos constructor de objetos. Siempre con una mayuscula

function Persona() {
  this.nombre = "";
  this.apellido = "";
  this.edad = 0;
  this.metodoNombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

// usamos el constructor con la palabra reservada --> new
// para crear un objeto nuevo
const usuario2 = new Persona();

// Asignamos valores al objeto
usuario2.nombre = "Melany";
usuario2.apellido = "Pizarro";
usuario2.edad = 18;

console.log(usuario2.metodoNombreCompleto());

// creamos varios objetos
const usuario3 = new Persona();
const usuario4 = new Persona();
usuario4.nombre = "Juan";
usuario4.apellido = "Luna";
usuario4.edad = "33";

console.log(usuario4.metodoNombreCompleto());

const usuario5 = new Persona();

console.log(usuario3, usuario4, usuario5);
