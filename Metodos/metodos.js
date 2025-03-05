// En Programación Orientada a Objetos (POO) en JavaScript, los métodos son funciones dentro de una clase u objeto
// Permite que los objetos puedan hacer alguna accion: correr, marchar, volar, retroceder

function correr() {
  return "Correr maratones";
}

// podemos poner la funcion para el metodo dentro del objeto

const usuario = {
  nombre: "Melany", // --> propiedades
  apellido: "Flores", // --> propiedades
  edad: 22, // --> propiedades

  // Metodo o accion del objeto
  metodoCorrer: correr, // metodo --> pasamos la funcion correr()

  // Metodo con funcion dentro
  metodoLeer: function () {
    return "Leer libros y periodicos.";
  },

  // otra forma de definir un metodo en JavaScript, mas corta
  metodoBailar() {
    return "le gusta bailar";
  },
};

console.log(usuario.metodoCorrer());
console.log(usuario.metodoLeer());

console.log(
  `Nombre ${usuario.nombre} le gusta como hobbit: ${usuario.metodoLeer()}`,
);

console.log(
  `A ${usuario.nombre} ${usuario.apellido}, tambien ${usuario.metodoBailar()}.`,
);
