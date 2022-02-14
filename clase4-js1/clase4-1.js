'use strict';

const DIAS_SEMANA = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
];
const PRECIOS = [
    150, /* posicion 0 */
    55,  /* posicion 1 */
    80,
    55,
    100,
    35,
    35   /* posicion 6 */
];
/*
    retorna el nombre del dia de la semana
    asociado a un numero, donde 1 es lunes y
    7 es domingo
*/
function nombreDelDia(dia){
    if (dia >= 1 && dia <= 7)
        return DIAS_SEMANA[dia - 1];
    else
        return "dia invalido";
}

/**
 * 
 * esta funcion permite leer un datos usando prompt.
 * mostrara un error si el usuario presiona cancelar o 
 * presiona aceptar sin escribir nada, y retornara null en ese caso,
 * en caso contrario, retornara la cadena en mayusculas
 */
function leerCadena(titulo) {
    let dato = prompt(titulo)
    if (dato == null || dato == "") {
        alert("Error. Valor incorrecto")
        return null;
    } else
        return dato.toUpperCase()
}

function leerCadena2(titulo) {
    let dato;
    do{
        dato = prompt(titulo)
        if (dato == null || dato == "") {
            alert("Error. Valor incorrecto")
        } else
            return dato
    }while (dato == null || dato == "")
}
/*
    crear una funcion para leer un numero
    usando prompt. Retornara un numero siempre
    y cuando sea un numero valido
*/
function leerNumero(titulo){
    let dato;
    do{
        dato = prompt(titulo)
        if (dato=="" || dato==null || isNaN(dato)) {
            alert("Error. Valor incorrecto")
        } else
            return parseInt(dato)
    }while (dato=="" || dato==null || isNaN(dato))
}

function resultados(){
    if (edades.length == 0){
        alert("Debe registrar al menos 1 elemento");
        if (confirm("Desea registrar?"))
            leerDatos()
    }else{
        let acum = 0;
        for (let i=0;i<edades.length;i++)
            acum+=edades[i];

        let promedio = acum/edades.length;
        alert("El promedio de edades es "+promedio.toFixed(2))
    }
}

let nombres = [];
let edades = [];

function leerDatos() {
    
    let nombre = leerCadena('nombre:')
    let apellido = leerCadena2('Apellido:')
    // llamar a la funcion para leer un numero
    let edad = leerNumero("edad:")

    nombres.push(nombre)
    edades.push(edad)

    // se recorre el arreglo para armar un mensaje y mostrarlo
    // al usuario al hacer prompt
    // el caracter \n genera un salto de linea
    let mensaje="";
    for (let i=0;i<7;i++)
        mensaje+=(i+1)+": "+DIAS_SEMANA[i]+"\n";
    
    console.log(mensaje)
    let dia= leerNumero("Seleccione el dia: \n"+mensaje);

    if (dia>=1 && dia <=7){
        console.log("El dia seleccionado es "+nombreDelDia(dia))
        console.log("El precio de ese dia es "+PRECIOS[dia-1])
    }

    alert("El dia seleccionado es "+nombreDelDia(dia)+"\n"+
          "El precio de ese dia es "+PRECIOS[dia-1]+"\n"+
          "El nombre es "+nombre+"\n"+
          "El apellido es "+apellido)
    if (nombre != null)
        console.log(nombre)

    if (apellido != null)
        console.log(apellido)
}