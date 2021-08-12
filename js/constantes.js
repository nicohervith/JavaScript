export const PI = Math.PI;

export let usuario = "Jon";

//No puedo hacer export default de const password
const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

//Exportacion por defecto solo funciones y clases
//Export default significa que cuando se exporte la función, se exporta automático en el archivo modulos.js
export default function saludar() {
  console.log("Hola Módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
