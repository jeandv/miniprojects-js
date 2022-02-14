'use strict';
/*
Una compañía decide realizar un ajuste de sueldo a sus empleados, para lo cual 
aplica la siguiente política:
a.- Si tiene más de 5 años de servicio en la empresa tendrá un aumento del 10% del 
sueldo base.
b.- Si tiene como mínimo 4 cursos realizados se le otorga un bono de mejoramiento 
de 25.000 Bs.

Desarrolle un programa que lea los siguientes datos de un empleado: nombre, 
sueldo base, años de servicio, números de cursos realizados, debe imprimir nombre, 
sueldo base, años de servicio, número de cursos y nuevo sueldo del empleado. 

*/
const PORC_AUMENTO_ANOS = 0.1;
const AUMENTO_X_CURSO = 25;

var nombre = "jose luis";
var sueldoBase = Math.random()*(750-250)+250;
var nroCursos = Math.random()*10;
var anosServicio = Math.random()*20;
var aumento = 0;

console.log("El sueldo base de "+nombre+" es "+sueldoBase.toFixed(0)+"$")
console.log("Años de servicio: "+anosServicio.toFixed(0));
if (anosServicio > 5 ){
    aumento = sueldoBase*PORC_AUMENTO_ANOS;
    console.log(" recibira un aumento por años de servicio de "+
                aumento.toFixed(0)+"$")
}else
    console.log(" NO recibira aumento por años de servicio");

console.log("el numero de cursos realizados fue: "+nroCursos.toFixed(0));
// intervalo entre (4,10]


if (nroCursos>4 ){  
    aumento += AUMENTO_X_CURSO;
    console.log(" recibira un bono de "+AUMENTO_X_CURSO+
                "$ por los cursos realizados");
}else
    console.log(" NO recibira un bono por numero de cursos")

var porcAumentoTotal = aumento / sueldoBase * 100;
sueldoBase+=aumento;

console.log("el aumento total es de "+aumento.toFixed(0)+"$");
console.log("el aumento representa un "+porcAumentoTotal.toFixed(2)+"% con respecto al sueldo base")
console.log("el nuevo sueldo de "+nombre+" es de "+sueldoBase.toFixed(0)+"$");

// determinar el aumento por numero de cursos
// muestren el sueldo aumentado y el porcentaje que representa el aumento total












