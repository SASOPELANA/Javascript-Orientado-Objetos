// Subtype Polimosfismo

// Clase Persona
class Persona {
  // Constructor
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
}

// Clase Programador --> uso de herencia
class Programador extends Persona {
  // Constructor
  constructor(skil1, skil2, nombre, apellido) {
    // uso del método super()
    super(nombre, apellido);
    this._skil1 = skil1;
    this._skil2 = skil2;
  }
}

const p1 = new Persona("Prota", "Developer");
const pro1 = new Programador("JavaScript", "Astro", "Alejandro", "Elpro");
console.log(p1);
console.log(pro1);

// Método de subtipo de polimorfismo.
function mostrarNombreCompleto(p) {
  console.log(p._nombre + " " + p._apellido);
}

// Método mostrar nombre completo.
mostrarNombreCompleto(p1);
mostrarNombreCompleto(pro1);

/*
class Persona {
  // Constructor
  constructor(nombre, apellido, edad) {
    // atributos o campo de clase
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;

    // Métodos saludar
    this.getSaludar = function () {
      return ` Hola soy ${this._nombre} ${this._apellido} y tengo ${this._edad} años. `;
    };

    this.setNombre = function (nombre) {
      this._nombre = nombre;
    };

    this.setApellido = function (apellido) {
      this._apellido = apellido;
    };

    this.setEdad = function (edad) {
      this._edad = edad;
    };
  }
}

const p1 = new Persona("Prota", "Developer", 32);
console.log(p1.getSaludar());

const p2 = new Persona();
p2.setNombre("Juan");
p2.setApellido("Luna");
p2.setEdad(33);
console.log(p2.getSaludar());
*/
