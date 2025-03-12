// Polimorfismo Parametrico en Javascript
// Polimorfismo Parametrico es cuando se usan diferentes objetos que tienen un mismo comportamiento pero con diferentes implementaciones.

// Constructor
function Stack() {
  // propiedades
  this._item = [];

  // Método
  this.push = function (item) {
    this._item.push(item);
  };
}

// En Javascript podemos crear múltiples objetos de la misma clase, pero con diferentes comportamientos
// y distintivos tipos de datos

const stack = new Stack();
const stack2 = new Stack();

stack.push("Hola mundo...");
stack.push(150);

stack2.push("Item 1");
stack2.push(1000);

console.log(stack);
console.log(stack2);
