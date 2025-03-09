// Object constructor
// constructor que viene por defecto en javascript

// const Persona = new Object();
// console.log(Persona);

// Metodo mas corto para crear un Object
// es lo mismo que usar new Object();
// const Peronsa2 = {};
// console.log(Peronsa2.constructor === Object);

// console.log("\n");

// const num = new Object("Hola Mundo!!!");
// console.log(num);

const usario = {
  // Propiedades o campo de clases
  name: "Prota",
  lastName: "Manga",
  age: 25,

  // Metodos
  showName() {
    return this.name;
  },
};

console.log(Object.values(usario));

// con la palabra reservada Object --> obtemos claves y valores
// Object.keys()  --> nos permite ver las llaves de un objeto
// Object.values()  --> nos permite ver los valores de un objeto
// no es un objeto son Metodos de la palabra reservada Object()

// que son claves y valores
// console.log(Object.keys(usario));
// console.log(Object.values(usario));
