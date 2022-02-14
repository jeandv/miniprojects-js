'use strict';
const MIN = 10;
const MAX = 40;

var edad = Math.random()*(MAX-MIN)+MIN;
// convierte el valor numerico a string sin decimales
edad = edad.toFixed(0);

console.log("El valor generado fue "+edad)