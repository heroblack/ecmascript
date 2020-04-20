//salio en el año 2015

function newfunction(name, age, country) {
  var name = name || "fabio";
  var age = age || "38";
  var country = country || "co";
}

//es6
function newfunction2(name = "fabio", age = "32", country = "co") {
  var msn = "Hola Mundo";
  console.log(name, age, country);
}

newfunction2();
newfunction2("daniel", "8", "co");
console.log(msn);
//Template literal
let hello = "hello";
let world = "world";
let epicPhrase = `${hello} ${world}`;

console.log(epicPhrase);

let lorems =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quos magnam totam dolores doloribus laboriosam dolorum cupiditate adipisci saepe impedit sint recusandae amet molestiae iste, deleniti libero, reiciendis optio. Consequatur. \n" +
  "frase epica 2";

console.log(lorems);

//destructuring

let persona = {
  name: "Fabio Rojas",
  edad: "38",
  country: "co",
};

console.log(persona.name, persona.edad, persona.country);

let { name, edad, country } = persona;
console.log(name, edad, country);

//spread

let team1 = ["Daniel", "David"];
let team2 = ["Fabio", "Neyla"];

let education = ["davidsiano", ...team1, ...team2];

console.log(education);

let persona = {
  name: "fabio",
  edad: 38,
  peso: 77,
};

let copyPersona = persona;
//let nuevoObjeto = Object.assign({}, persona);
let nuevoObjeto = { ...persona, edad: 40 };
persona.name = "neyla";
console.log(persona);
console.log(copyPersona);
console.log(nuevoObjeto);

let persona = {
  name: "fabio",
  edad: 38,
  peso: 77,
};

function propagacion(person) {
  const { name, edad, peso } = person;
  console.log(name, edad, peso);
}

propagacion(persona);

// let vs var

{
  var msnvar = "hola soy var";
}

{
  let msnlet = "hola luy let";
}

console.log(msnvar);
console.log(msnlet);

//creacion objetos

let name = "fabio";
let edad = "edad";
let persona = { name, edad };
console.log(persona);

//iteracion

const empleados = [
  {
    name: "Fabio",
    edad: 38,
    peso: 76,
    altura: 1.72,
    cantidadDeLibros: 182,
  },
  {
    name: "neyla",
    edad: 32,
    peso: 56,
    altura: 1.62,
    cantidadDeLibros: 18,
  },
];

// for (let i = 0; i < empleados.length; i++) {
//   empleados[i].peso = 70;
//   console.log(empleados[i]);
// }
// console.log(empleados);
// map
listarEmpleados = (empleado) => ({
  ...empleado,
  altura: empleado.altura * 100,
});

let list = empleados.map(listarEmpleados);
console.log(list);

//FILTER

filterAltas = (empleado) => empleado.altura < 1.7;
let filter = empleados.filter(filterAltas);
console.log(filter);

//REDUCE
const empleados = [
  {
    name: "Fabio",
    edad: 38,
    peso: 76,
    altura: 1.72,
    cantidadDeLibros: 182,
  },
  {
    name: "neyla",
    edad: 32,
    peso: 56,
    altura: 1.62,
    cantidadDeLibros: 18,
  },
];

// for (let i = 0; i < empleados.length; i++) {
//   acum = acum + empleados[i].cantidadDeLibros;
// }

// for (empleado in empleados) {
//   acum = acum + empleados[empleado].cantidadDeLibros;
// }

// for (empleado of empleados) {
//   acum = acum + empleado.cantidadDeLibros;
// }
reducer = (acumulado, { cantidadDeLibros }) => acumulado + cantidadDeLibros;
acum = empleados.reduce(reducer, 0);

console.log(acum);
console.log(empleados);

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hello");
    } else {
      reject("Hubo error");
    }
  });
};

const worldPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("world");
    } else {
      reject("Hubo error");
    }
  });
};

helloPromise()
  .then((hello) => {
    worldPromise().then((world) => {
      console.log(`${hello} ${world}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });

console.log("final");
//clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valorA, valorB) {
    this.valueA = valorA;
    this.valueB = valorB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 3));

//modules
const hello = require("./module");
console.log(hello());

//generadores
/**
 * Generators
 */
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }

  if (true) {
    yield "World!";
  }
}
const generatorHello = helloWorld();
console.log("generatorHello first call -> ", generatorHello.next().value);
console.log("generatorHello second call -> ", generatorHello.next().value);
console.log("generatorHello third call -> ", generatorHello.next().value);
