// Crear objetos en JavaScript  -->    {}

// Crear objeto literal
// Sirve para agrupar distintos datos que le pertencen a una misma entidad y nombrarlos.
console.log({});

// crear datos de una persona, datos por datos --> clasica
let nombre = "Alejandro ";
let apellido = "Fantas";
let edad = 30;

// creamos un objeto para guardar los mismos datos de la persona
// Podemos crear un arreglo o otro objetos dentro de un objeto
const usuario = {
  nombre: "Alejandro",
  apellido: "Fantas",
  edad: 30,
  habitos: ["Leer", "Programacion", "Correr"],
  direccion: {
    calle: "Egues",
    numeroCalle: 1520,
    ciudad: "Orán",
  },
};

console.log(usuario);

// crear un objeto vacio
const objetoVacio = {};
console.log(objetoVacio);
