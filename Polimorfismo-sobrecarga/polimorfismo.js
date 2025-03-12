// Polimorfismo y sobrecarga en JavaScript

// Método para contar la cantidad de caracteres de un numero y convertirlo a string
function contarItens(x) {
  return x.toString().length;
}

console.log(contarItens(1000));
console.log(contarItens("Hola Mundo"));

// sobrecarga de método en JavaScript
function sumar(a = 0, b = 0, c = 0) {
  return a + b + c;
}

let resultado = sumar(10, 5);
console.log(resultado);

resultado = sumar(10, 5, 15);
console.log(resultado);
