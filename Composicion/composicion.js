// Composicion es la relacion entre clases y objetos

// creamos un objeto literal

const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2025,
  caracteristicas: {
    color: "Gres",
    puertas: 4,
    motor: "Diesel",
  },
};

// un componente es un objeto dentro de otro, es decir un objeto dentro de un objeto
// no debe estar fuera del objeto principal, por que estan fuertemente relacionados
console.log(vehiculo);
