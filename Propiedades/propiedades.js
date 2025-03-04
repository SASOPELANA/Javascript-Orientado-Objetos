/*  
  En JavaScript, una propiedad es un par clave-valor asociado a un objeto. 
  Las propiedades definen las características de un objeto y pueden contener cualquier 
  tipo de dato, incluyendo funciones (llamadas métodos cuando están dentro de un objeto).
 */

const usuario = {
  nombre: "Melany", // --> propiedades
  apellido: "Flores", // --> propiedades
  edad: 22, // --> propiedades
};

console.log(usuario);

// recorrer un objeto con forEach
Object.keys(usuario).forEach((clave) => {
  console.log(`${clave}: ${usuario[clave]}`);
});
