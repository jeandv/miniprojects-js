'use strict'

//Objetivo-3
// function buscarCliente(nombres, nombre) {
//     if (nombres.includes(nombre)) {
//         return true;
//     } else
//         return false;
// }

let nombres = [];
let montos = [];

//Objetivo-5:
let sum = 0;
function totalMontos() {
    for (let i = 0; i < montos.length; i++) {
        sum += montos[i];
        console.log("Nombre del cliente: " + nombres[i] + " -Su Monto: " + montos[i].toFixed(2) + " Bs.");
    }

    let promedio = sum / montos.length;

    console.log("La sumatoria total de los montos es: " + sum.toFixed(2) + " Bs.");
    console.log("El promedio de los montos es: " + promedio.toFixed(2) + " Bs.");
    alert("La sumatoria total de los montos es: " + sum.toFixed(2) + " Bs.\n" +
        "El promedio de los montos es: " + promedio.toFixed(2) + " Bs.");
}