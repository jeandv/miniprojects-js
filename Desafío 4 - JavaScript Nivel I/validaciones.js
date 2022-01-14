'use strict'

//Objetivo-1:
function leerCadena(entrada) {
    let dato;
    do {
        dato = prompt(entrada)
        if (dato == null || parseInt(dato) || dato == "") {
            alert("Error. El dato colocado es invalido");
        } else
            return dato.toUpperCase();
    } while (dato == null || parseInt(dato) || dato == "");
}

function leerFloat(entrada) {
    let dato;
    do {
        dato = prompt(entrada);
        dato = parseInt(dato);
        if (dato == null || isNaN(dato) || dato == "" || dato <= 0) {
            alert("Error. El dato colocado es invalido");
        } else
            return parseInt(dato);
    } while (dato == null || isNaN(dato) || dato == "" || dato <= 0);
}

//Objetivo-2:
function leerDatos() {
    const nombre = leerCadena('Nombre:');
    const monto = leerFloat('Monto:');

    nombres.push(nombre);
    montos.push(monto);
}