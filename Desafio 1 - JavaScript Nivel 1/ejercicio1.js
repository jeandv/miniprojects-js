//ejercicio 1

'use strict'

var salarioBase = 500000;

var comision= 200000;

const autosVendidos= 10;

const vendedor= "pedro";

const totalVentas= 200000000;

var porcentaje= totalVentas * 0.10;

var salarioNeto= (salarioBase + comision)*autosVendidos + porcentaje;

console.log(`El salario neto de ${vendedor} es de ${salarioNeto} Bs.`);
