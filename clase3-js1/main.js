'use strict';

// alt + shift + F
// objetivo 1


let nombre;
let edad;
let promedio;

function resultados(){
     // crear una funcion que lea 3 notas y calcule el promedio.
    // la funcion se debe crear en el archivo funciones.js
    // llamar la funcion en el archivo main.js
    if (nombre == undefined)
        alert("Debe leer el nombre antes");
    else
        alert("Su nombre es " + nombre.toUpperCase());

    if (edad == undefined)
        alert("Debe leer la edad antes");
    else{
        if (edad >= 18)
            alert("Es mayor de edad");
        else
            alert("Es menor de edad");

        if (confirm("Desea aumentar la edad ?"))
            edad += 10;

        alert("La nueva edad es " + edad)
    }
}
