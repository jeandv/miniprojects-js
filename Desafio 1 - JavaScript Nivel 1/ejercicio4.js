//ejercicio 4

'use strict'

const precioFabrica= 8000;

var precioVenta= (precioFabrica * 0.25)+(precioFabrica * 0.20);

var iva= precioVenta * 0.15;

console.log(
	`Precio de venta del artículo: ${precioVenta} Bs.
Monto a cancelar impuesto (IVA): ${iva} Bs.`);
