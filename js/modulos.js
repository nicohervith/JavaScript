/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
import saludar, { Saludar, PI, usuario } from "./constantes.js";
//Con aritmetica as calculos le "cambio el nombre" para utilizarlo diferente en este archivo
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;