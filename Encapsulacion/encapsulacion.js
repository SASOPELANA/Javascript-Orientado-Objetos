// Encapsulamiento en javascript

// Los atributos y metodos de una clase se encapsulan dentro de la propia clase
// para que no puedan ser accedidos desde fuera de la clase
// El usario no debe acceder a los metodos y atributos de la clase, solo debe saber que funciona.

// constructor

function Compania(nombre) {
  // atributos
  this._nombre = nombre;

  let empleados = [];

  // metodos. usamos el this para accder a los atributos de la clase
  // metodos get para devolver los valores de los atributos
  this.getEmpleados = function () {
    return empleados;
  };

  // metodo set para establecer o acceder a los valores de los atributos
  this.setAgregarEmpleados = function (empleado) {
    // usamos el metodo push para agregar un nuevo empleado al vector o arreglo
    empleados.push(empleado);
  };
}

const compania = new Compania("Dom Pollo");
const compania2 = new Compania("Dom Pollo 2");
const compania3 = new Compania("Tele Cell");

console.log(compania);
console.log(compania2);
console.log(compania3);

// usamos el metodo set
compania.setAgregarEmpleados({ nombre: "Juan", apellido: "Perez" });
compania2.setAgregarEmpleados({ nombre: "Maria", apellido: "Gonzalez" });

console.log(compania.getEmpleados());
console.log(compania2.getEmpleados());
console.log(compania3.getEmpleados());
