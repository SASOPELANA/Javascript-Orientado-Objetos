// new en javascript

// constructor
function Person() {
  (this.name = ""), (this.lastName = ""), (this.age = 0);
}

const p1 = new Person();
console.log(p1);

// es importante usar el new cuando creamos un objeto o instanciamos un constructor
// por que si no usamos new, nos va a dar un objeto vacio, y esto es una mala practica y dara errores

const p2 = Person(); // --> esto es una mala practica, no hacerlo
console.log(p2);
