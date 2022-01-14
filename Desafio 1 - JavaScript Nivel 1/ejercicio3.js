//ejercicio 3

'use strict'

const nombreCliente= "mark";

const precioVehiculo= 100000;

var cuotaInicial= precioVehiculo * 0.30;

var mesesCuota= 24;

var cuotasMensuales= (precioVehiculo * 0.70)/mesesCuota;

console.log(
	`Nombre del cliente: ${nombreCliente}
Cuota inicial: ${cuotaInicial} $
Monto de las cuotas mensuales: ${cuotasMensuales} $`);