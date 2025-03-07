// this en javascript

// En JavaScript, this es una palabra clave que hace referencia al objeto en el contexto actual de ejecución.
// Su valor puede variar dependiendo de cómo se llame a la función.

// Si this se usa dentro de un método de un objeto, this hace referencia al objeto en el que el método está siendo llamado.

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 34,
  metodoNombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(usuario.metodoNombreCompleto());

// Banco

const cuenta = {
  numero: "123456789123456789",
  monto: 100,
  depositar(cantidad) {
    this.monto = this.monto + cantidad;
  },
  retirar(cantidad) {
    this.monto = this.monto - cantidad;
  },
};

cuenta.depositar(100);
cuenta.depositar(200);
cuenta.depositar(150);
console.log(cuenta);

cuenta.retirar(50);
cuenta.retirar(150);
console.log(cuenta);
