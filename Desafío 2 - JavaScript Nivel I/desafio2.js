'use strict'

var tipoFranela = (Math.random()*(4 -1)+1).toFixed(0);
var talla= (Math.random()*(3 -1)+1).toFixed(0);
var procedencia= (Math.random()*(2 -1)+ 1).toFixed(0);
var cantidadFr = (Math.random()*(50 -1)+1).toFixed(0);
if (tipoFranela == 1) {
	console.log("Tipo de franela: Playera");
} else 
	if (tipoFranela == 2) {
		console.log("Tipo de franela: Deportiva");
	} else
		if (tipoFranela == 3) {
			console.log("Tipo de franela: Casual");
		} else
			if (tipoFranela == 4) {
				console.log("Tipo de franela: Sudadera")
			}
if (talla == 1) {
	console.log("Talla: S");
} else
	if (talla == 2) {
		console.log("Talla: M");
	} else
		if (talla == 3) {
			console.log("Talla: L");
		}
if (procedencia == 1) {
	console.log("Procedencia del pedido: Nacional");
} else 
	if (procedencia == 2) {
		console.log("Procedencia del pedido: Importado");
	}
console.log("Cantidad de franelas que comprara el cliente: "+cantidadFr);
alert("Cantidad de franelas que comprara: "+cantidadFr);
//Nacional 25%
if (talla == 1 && tipoFranela == 1 && procedencia == 1) {
	var playeraS = 25000 * 0.85;
	var playeraSN = playeraS * 1.25
	var playeraSNunids = playeraSN * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${playeraS.toFixed(0)} Bs.`);
	console.log(`Recargo nacional total del 25% del costo: ${playeraSN.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela: ${playeraSN.toFixed(0)} Bs.`); 
	console.log(`Precio a pagar por numero de unidades pedidas: ${playeraSNunids.toFixed(0)} Bs.`)
	alert(`Precio a pagar por numero de unidades pedidas: ${playeraSNunids.toFixed(0)} Bs.`);
} else
	if (talla == 2 && tipoFranela == 1 && procedencia == 1) {
		var playeraM = 25000;
		var playeraMN = playeraM * 1.25;
		var playeraMNunids = playeraMN * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${playeraM.toFixed(0)} Bs.`);
		console.log(`Recargo nacional total del 25% del costo: ${playeraMN.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela: ${playeraMN.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${playeraMNunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${playeraMNunids.toFixed(0)} Bs.`);
	} else
		if (talla == 3 && tipoFranela == 1 && procedencia == 1) {
			var playeraL = 25000 * 1.25;
			var playeraLN = playeraL * 1.25;
			var playeraLNunids = playeraLN * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${playeraL.toFixed(0)} Bs.`);
			console.log(`Recargo nacional total del 25% del costo: ${playeraLN.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela: ${playeraLN.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${playeraLNunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${playeraLNunids.toFixed(0)} Bs.`);
		}
if (talla == 1 && tipoFranela == 2 && procedencia == 1) {
	var deportivaS = 50000 * 0.85;
	var deportivaSN = deportivaS * 1.25;
	var deportivaSNunids = deportivaSN * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${deportivaS.toFixed(0)} Bs.`);
	console.log(`Recargo nacional total del 25% del costo: ${deportivaSN.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela: ${deportivaSN.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${deportivaSNunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${deportivaSNunids.toFixed(0)} Bs.`);
} else
	if (talla == 2 && tipoFranela == 2 && procedencia == 1) {
		var deportivaM = 50000;
		var deportivaMN = deportivaM * 1.25;
		var deportivaMNunids = deportivaMN * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${deportivaM} Bs.`);
		console.log(`Recargo nacional total del 25% del costo: ${deportivaMN.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela: ${deportivaMN.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${deportivaMNunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${deportivaMNunids.toFixed(0)} Bs.`);
	} else
		if (talla == 3 && tipoFranela == 2 && procedencia == 1) {
			var deportivaL = 50000 * 1.25;
			var deportivaLN = deportivaL * 1.25;
			var deportivaLNunids = deportivaLN * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${deportivaL.toFixed(0)} Bs.`);
			console.log(`Recargo nacional total del 25% del costo: ${deportivaLN.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela: ${deportivaLN.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${deportivaLNunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${deportivaLNunids.toFixed(0)} Bs.`);
		}
if (talla == 1 && tipoFranela == 3 && procedencia == 1) {
	var casualS = 68900 * 0.85;
	var casualSN = casualS * 1.25;
	var casualSNunids = casualSN * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${casualS.toFixed(0)} Bs.`);
	console.log(`Recargo nacional total del 25% del costo: ${casualSN.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela: ${casualSN.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${casualSNunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${casualSNunids.toFixed(0)} Bs.`);
} else
	if (talla == 2 && tipoFranela == 3 && procedencia == 1) {
		var casualM = 68900;
		var casualMN = casualM * 1.25;
		var casualMNunids = casualMN * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${casualM.toFixed(0)} Bs.`);
		console.log(`Recargo nacional total del 25% del costo: ${casualMN.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela: ${casualMN.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${casualMNunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${casualMNunids.toFixed(0)} Bs.`);
	} else
		if (talla == 3 && tipoFranela == 3 && procedencia == 1) {
			var casualL = 68900 * 1.25;
			var casualLN = casualL * 1.25;
			var casualLNunids = casualLN * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${casualL.toFixed(0)} Bs.`);
			console.log(`Recargo nacional total del 25% del costo: ${casualLN.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela: ${casualLN.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${casualLNunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${casualLNunids.toFixed(0)} Bs.`);
		}
if (talla == 1 && tipoFranela == 4 && procedencia == 1) {
	var sudaderaS = 98900 * 0.85;
	var sudaderaSN = sudaderaS * 1.25;
	var sudaderaSNunids = sudaderaSN * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${sudaderaS.toFixed(0)} Bs.`);
	console.log(`Recargo nacional total del 25% del costo: ${sudaderaSN.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela: ${sudaderaSN.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${sudaderaSNunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${sudaderaSNunids.toFixed(0)} Bs.`);
} else
	if (talla == 2 && tipoFranela == 4 && procedencia == 1) {
		var sudaderaM = 98900;
		var sudaderaMN = sudaderaM * 1.25;
		var sudaderaMNunids = sudaderaMN * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${sudaderaM} Bs.`);
		console.log(`Recargo nacional total del 25% del costo: ${sudaderaMN} Bs.`);
		alert(`Precio a pagar por la franela: ${sudaderaMN.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${sudaderaMNunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${sudaderaMNunids.toFixed(0)} Bs.`);
	} else
		if (talla == 3 && tipoFranela == 4 && procedencia == 1) {
			var sudaderaL = 98900 * 1.25;
			var sudaderaLN = sudaderaL * 1.25;
			var sudaderaLNunids = sudaderaLN * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${sudaderaL.toFixed(0)} Bs.`);
			console.log(`Recargo nacional total del 25% del costo: ${sudaderaLN.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela: ${sudaderaLN.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${sudaderaLNunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${sudaderaLNunids.toFixed(0)} Bs.`);
		}//Importado 45%
if (talla == 1 && tipoFranela == 1 && procedencia == 2) {
	var playeraS = 25000 * 0.85;
	var playeraSI = playeraS * 1.45;
	var playeraSIunids = playeraSI * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${playeraS.toFixed(0)} Bs.`);
	console.log(`Recargo importación total del 45% del costo: ${playeraSI.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela (Importada): ${playeraSI.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${playeraSIunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${playeraSIunids.toFixed(0)} Bs.`)
} else
	if (talla == 2 && tipoFranela == 1 && procedencia == 2) {
		var playeraM = 25000;
		var playeraMI = playeraM * 1.45;
		var playeraMIunids = playeraMI * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${playeraM.toFixed(0)} Bs.`);
		console.log(`Recargo importación total del 45% del costo: ${playeraMI.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela (Importada): ${playeraMI.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${playeraMIunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${playeraMIunids.toFixed(0)} Bs.`)
	} else
		if (talla == 3 && tipoFranela == 1 && procedencia == 2) {
			var playeraL = 25000 * 1.25;
			var playeraLI = playeraL * 1.45;
			var playeraLIunids = playeraLI * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${playeraL.toFixed(0)} Bs.`);
			console.log(`Recargo importación total del 45% del costo: ${playeraLI.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela (Importada): ${playeraLI.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${playeraLIunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${playeraLIunids.toFixed(0)} Bs.`)
		}
if (talla == 1 && tipoFranela == 2 && procedencia == 2) {
	var deportivaS = 50000 * 0.85;
	var deportivaSI = deportivaS * 1.45;
	var deportivaSIunids = deportivaSI * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${deportivaS.toFixed(0)} Bs.`);
	console.log(`Recargo de importación total del 45% del costo: ${deportivaSI.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela (Importada): ${deportivaSI.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${deportivaSIunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${deportivaSIunids.toFixed(0)} Bs.`)
} else
	if (talla == 2 && tipoFranela == 2 && procedencia == 2) {
		var deportivaM = 50000;
		var deportivaMI = deportivaM * 1.45;
		var deportivaMIunids = deportivaMI * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${deportivaM.toFixed(0)} Bs.`);
		console.log(`Recargo de importación del 45% del costo: ${deportivaMI.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela (Importada): ${deportivaMI.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${deportivaMIunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${deportivaMIunids.toFixed(0)} Bs.`)
	} else
		if (talla == 3 && tipoFranela == 2 && procedencia == 2) {
			var deportivaL = 50000 * 1.25;
			var deportivaLI = deportivaL * 1.45;
			var deportivaLIunids = deportivaLI * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${deportivaL.toFixed(0)} Bs.`);
			console.log(`Recargo de importación total del 45% del costo: ${deportivaLI.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela (Importada): ${deportivaLI.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${deportivaLIunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${deportivaLIunids.toFixed(0)} Bs.`)
		}
if (talla == 1 && tipoFranela == 3 && procedencia == 2) {
	var casualS = 68900 * 0.85;
	var casualSI = casualS * 1.45;
	var casualSIunids = casualSI * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${casualS.toFixed(0)} Bs.`);
	console.log(`Recargo importación total del 45% del costo: ${casualSI.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela (Importada): ${casualSI.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${casualSIunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${casualSIunids.toFixed(0)} Bs.`)
} else
	if (talla == 2 && tipoFranela == 3 && procedencia == 2) {
		var casualM = 68900;
		var casualMI = casualM * 1.45;
		var casualMIunids = casualMI * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${casualM.toFixed(0)} Bs.`);
		console.log(`Recargo importación total del 45% del costo: ${casualMI.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela (Importada): ${casualMI.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${casualMIunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${casualMIunids.toFixed(0)} Bs.`)
	} else
		if (talla == 3 && tipoFranela == 3 && procedencia == 2) {
			var casualL = 68900 * 1.25;
			var casualLI = casualL * 1.45;
			var casualLIunids = casualLI * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${casualL.toFixed(0)} Bs.`);
			console.log(`Recargo importación total del 45% del costo: ${casualLI.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela (Importada): ${casualLI.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${casualLIunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${casualLIunids.toFixed(0)} Bs.`)
		}
if (talla == 1 && tipoFranela == 4 && procedencia == 2) {
	var sudaderaS = 98900 * 0.85;
	var sudaderaSI = sudaderaS * 1.45;
	var sudaderaSIunids = sudaderaSI * cantidadFr;
	console.log(`Costo total según talla y tipo de franela: ${sudaderaS.toFixed(0)} Bs.`);
	console.log(`Recargo importación total del 45% del costo: ${sudaderaSI.toFixed(0)} Bs.`);
	alert(`Precio a pagar por la franela (Importada): ${sudaderaSI.toFixed(0)} Bs.`);
	console.log(`Precio a pagar por numero de unidades pedidas: ${sudaderaSIunids.toFixed(0)} Bs.`);
	alert(`Precio a pagar por numero de unidades pedidas: ${sudaderaSIunids.toFixed(0)} Bs.`)
} else
	if (talla == 2 && tipoFranela == 4 && procedencia == 2) {
		var sudaderaM = 98900;
		var sudaderaMI = sudaderaM * 1.45;
		var sudaderaMIunids = sudaderaMI * cantidadFr;
		console.log(`Costo total según talla y tipo de franela: ${sudaderaM.toFixed(0)} Bs.`);
		console.log(`Recargo importación total del 45% del costo: ${sudaderaMI.toFixed(0)} Bs.`);
		alert(`Precio a pagar por la franela (Importada): ${sudaderaMI.toFixed(0)} Bs.`);
		console.log(`Precio a pagar por numero de unidades pedidas: ${sudaderaMIunids.toFixed(0)} Bs.`);
		alert(`Precio a pagar por numero de unidades pedidas: ${sudaderaMIunids.toFixed(0)} Bs.`)
	} else
		if (talla == 3 && tipoFranela == 4 && procedencia == 2) {
			var sudaderaL = 98900 * 1.25;
			var sudaderaLI = sudaderaL * 1.45;
			var sudaderaLIunids = sudaderaLI * cantidadFr;
			console.log(`Costo total según talla y tipo de franela: ${sudaderaL.toFixed(0)} Bs.`);
			console.log(`Recargo importación total del 45% del costo: ${sudaderaLI.toFixed(0)} Bs.`);
			alert(`Precio a pagar por la franela (Importada): ${sudaderaLI.toFixed(0)} Bs.`);
			console.log(`Precio a pagar por numero de unidades pedidas: ${sudaderaLIunids.toFixed(0)} Bs.`);
			alert(`Precio a pagar por numero de unidades pedidas: ${sudaderaLIunids.toFixed(0)} Bs.`)
		}//Descuento del 15% por comprar mas de 2 docenas nacional
if (cantidadFr > 24 && talla == 1 && tipoFranela == 1 && procedencia == 1) {
	var descuentoPS = playeraSN * 0.85;
	console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoPS.toFixed(0)} Bs.`);
	alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoPS.toFixed(0)} Bs.`);
	var impuestoa = (playeraSNunids * 0.12) - descuentoPS;
	console.log(`Impuesto (Nacional) 15% Descuento: ${impuestoa.toFixed(0)} Bs.`);
	alert(`Impuesto (Nacional) 15% Descuento: ${impuestoa.toFixed(0)} Bs.`);
	var montoPagar1n = playeraSNunids + impuestoa;
	console.log(`Monto a pagar total (Nacional): ${montoPagar1n.toFixed(0)} Bs.`);
	alert(`Monto a pagar total (Nacional): ${montoPagar1n.toFixed(0)} Bs.`);
} else
	if (cantidadFr > 24 && talla == 2 && tipoFranela == 1 && procedencia == 1) {
		var descuentoPM = playeraMN * 0.85;
		console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoPM.toFixed(0)} Bs.`);
		alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoPM.toFixed(0)} Bs.`);
		var impuestob = (playeraMNunids * 0.12) - descuentoPM;
		console.log(`Impuesto (Nacional) 15% Descuento: ${impuestob.toFixed(0)} Bs.`);
		alert(`Impuesto (Nacional) 15% Descuento: ${impuestob.toFixed(0)} Bs.`);
		var montoPagar2n = playeraMNunids + impuestob;
		console.log(`Monto a pagar total (Nacional): ${montoPagar2n.toFixed(0)} Bs.`);
		alert(`Monto a pagar total (Nacional): ${montoPagar2n.toFixed(0)} Bs.`);
	} else 
		if (cantidadFr > 24 && talla == 3 && tipoFranela == 1 && procedencia == 1) {
			var descuentoPL = playeraLN * 0.85;
			console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoPL.toFixed(0)} Bs.`);
			alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoPL.toFixed(0)} Bs.`);
			var impuestoc = (playeraLNunids * 0.12) - descuentoPL;
			console.log(`Impuesto (Nacional) 15% Descuento: ${impuestoc.toFixed(0)} Bs.`);
			alert(`Impuesto (Nacional) 15% Descuento: ${impuestoc.toFixed(0)} Bs.`);
			var montoPagar3n = playeraLNunids + impuestoc;
			console.log(`Monto a pagar total (Nacional): ${montoPagar3n.toFixed(0)} Bs.`);
			alert(`Monto a pagar total (Nacional): ${montoPagar3n.toFixed(0)} Bs.`);
		} else 
			if (cantidadFr > 24 && talla == 1 && tipoFranela == 2 && procedencia == 1) {
				var descuentoDS = deportivaSN * 0.85;
				console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoDS.toFixed(0)} Bs.`);
				alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoDS.toFixed(0)} Bs.`);
				var impuestod = (deportivaSNunids * 0.12) - descuentoDS;
				console.log(`Impuesto (Nacional) 15% Descuento: ${impuestod.toFixed(0)} Bs.`);
				alert(`Impuesto (Nacional) 15% Descuento: ${impuestod.toFixed(0)} Bs.`);
				var montoPagar4n = deportivaSNunids + impuestod;
				console.log(`Monto a pagar total (Nacional): ${montoPagar4n.toFixed(0)} Bs.`);
				alert(`Monto a pagar total (Nacional): ${montoPagar4n.toFixed(0)} Bs.`);
			} else
				if (cantidadFr > 24 && talla == 2 && tipoFranela == 2 && procedencia == 1) {
					var descuentoDM = deportivaMN * 0.85;
					console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoDM.toFixed(0)} Bs.`);
					alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoDM.toFixed(0)} Bs.`);
					var impuestoe = (deportivaMNunids * 0.12) - descuentoDM;
					console.log(`Impuesto (Nacional) 15% Descuento: ${impuestoe.toFixed(0)} Bs.`);
					alert(`Impuesto (Nacional) 15% Descuento: ${impuestoe.toFixed(0)} Bs.`);
					var montoPagar5n = deportivaMNunids + impuestoe;
					console.log(`Monto a pagar total (Nacional): ${montoPagar5n.toFixed(0)} Bs.`);
					alert(`Monto a pagar total (Nacional): ${montoPagar5n.toFixed(0)} Bs.`);
				} else
					if (cantidadFr > 24 && talla == 3 && tipoFranela == 2 && procedencia == 1) {
						var descuentoDL = deportivaLN * 0.85;
						console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoDL.toFixed(0)} Bs.`);
						alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoDL.toFixed(0)} Bs.`);
						var impuestof = (deportivaLNunids * 0.12) - descuentoDL;
						console.log(`Impuesto (Nacional) 15% Descuento: ${impuestof.toFixed(0)} Bs.`);
						alert(`Impuesto (Nacional) 15% Descuento: ${impuestof.toFixed(0)} Bs.`);
						var montoPagar6n = deportivaLNunids + impuestof;
						console.log(`Monto a pagar total (Nacional): ${montoPagar6n.toFixed(0)} Bs.`);
						alert(`Monto a pagar total (Nacional): ${montoPagar6n.toFixed(0)} Bs.`);
					} else 
						if (cantidadFr > 24 && talla == 1 && tipoFranela == 3 && procedencia == 1) {
							var descuentoCS = casualSN * 0.85;
							console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoCS.toFixed(0)} Bs.`);
							alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoCS.toFixed(0)} Bs.`);
							var impuestog = (casualSNunids * 0.12) - descuentoCS;
							console.log(`Impuesto (Nacional) 15% Descuento: ${impuestog.toFixed(0)} Bs.`);
							alert(`Impuesto (Nacional) 15% Descuento: ${impuestog.toFixed(0)} Bs.`);
							var montoPagar7n = casualSNunids + impuestog;
							console.log(`Monto a pagar total (Nacional): ${montoPagar7n.toFixed(0)} Bs.`);
							alert(`Monto a pagar total (Nacional): ${montoPagar7n.toFixed(0)} Bs.`);
						} else
							if (cantidadFr > 24 && talla == 2 && tipoFranela == 3 && procedencia == 1) {
								var descuentoCM = casualMN * 0.85;
								console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoCM.toFixed(0)} Bs.`);
								alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoCM.toFixed(0)} Bs.`);
								var impuestoh = (casualMNunids * 0.12) - descuentoCM;
								console.log(`Impuesto (Nacional) 15% Descuento: ${impuestoh.toFixed(0)} Bs.`);
								alert(`Impuesto (Nacional) 15% Descuento: ${impuestoh.toFixed(0)} Bs.`);
								var montoPagar8n = casualMNunids + impuestoh;
								console.log(`Monto a pagar total (Nacional): ${montoPagar8n.toFixed(0)} Bs.`);
								alert(`Monto a pagar total (Nacional): ${montoPagar8n.toFixed(0)} Bs.`);
							} else
								if (cantidadFr > 24 && talla == 3 && tipoFranela == 3 && procedencia == 1) {
									var descuentoCL = casualLN * 0.85;
									console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoCL.toFixed(0)} Bs.`);
									alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoCL.toFixed(0)} Bs.`);
									var impuestoi = (casualLNunids * 0.12) - descuentoCL;
									console.log(`Impuesto (Nacional) 15% Descuento: ${impuestoi.toFixed(0)} Bs.`);
									alert(`Impuesto (Nacional) 15% Descuento: ${impuestoi.toFixed(0)} Bs.`);
									var montoPagar9n = casualLNunids + impuestoi;
									console.log(`Monto a pagar total (Nacional): ${montoPagar9n.toFixed(0)} Bs.`);
									alert(`Monto a pagar total (Nacional): ${montoPagar9n.toFixed(0)} Bs.`);
								} else
									if (cantidadFr > 24 && talla == 1 && tipoFranela == 4 && procedencia == 1) {
										var descuentoSS = sudaderaSN * 0.85;
										console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoSS.toFixed(0)} Bs.`);
										alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoSS.toFixed(0)} Bs.`);
										var impuestoj = (sudaderaSNunids * 0.12) - descuentoSS;
										console.log(`Impuesto (Nacional) 15% Descuento: ${impuestoj.toFixed(0)} Bs.`);
										alert(`Impuesto (Nacional) 15% Descuento: ${impuestoj.toFixed(0)} Bs.`);
										var montoPagar10n = sudaderaSNunids + impuestoj;
										console.log(`Monto a pagar total (Nacional): ${montoPagar10n.toFixed(0)} Bs.`);
										alert(`Monto a pagar total (Nacional): ${montoPagar10n.toFixed(0)} Bs.`);
									} else
										if (cantidadFr > 24 && talla == 2 && tipoFranela == 4 && procedencia == 1) {
											var descuentoSM = sudaderaMN * 0.85;
											console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoSM.toFixed(0)} Bs.`);
											alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoSM.toFixed(0)} Bs.`);
											var impuestok = (sudaderaMNunids * 0.12) - descuentoSM;
											console.log(`Impuesto (Nacional) 15% Descuento: ${impuestok.toFixed(0)} Bs.`);
											alert(`Impuesto (Nacional) 15% Descuento: ${impuestok.toFixed(0)} Bs.`);
											var montoPagar11n = sudaderaMNunids + impuestok;
											console.log(`Monto a pagar total (Nacional): ${montoPagar11n.toFixed(0)} Bs.`);
											alert(`Monto a pagar total (Nacional): ${montoPagar11n.toFixed(0)} Bs.`);
										} else
											if (cantidadFr > 24 && talla == 3 && tipoFranela == 4 && procedencia == 1) {
												var descuentoSL = sudaderaLN * 0.85;
												console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoSL.toFixed(0)} Bs.`);
												alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoSL.toFixed(0)} Bs.`);
												var impuestom = (sudaderaLNunids * 0.12) - descuentoSL;
												console.log(`Impuesto (Nacional) 15% Descuento: ${impuestom.toFixed(0)} Bs.`);
												alert(`Impuesto (Nacional) 15% Descuento: ${impuestom.toFixed(0)} Bs.`);
												var montoPagar12n = sudaderaLNunids + impuestom;
												console.log(`Monto a pagar total (Nacional): ${montoPagar12n.toFixed(0)} Bs.`);
												alert(`Monto a pagar total (Nacional): ${montoPagar12n.toFixed(0)} Bs.`);
											} else //importado
if (cantidadFr > 24 && talla == 1 && tipoFranela == 1 && procedencia == 2) {
	var descuentoiPS = playeraSI * 0.85;
	console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiPS.toFixed(0)} Bs.`);
	alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiPS.toFixed(0)} Bs.`);
	var impueston = (playeraSIunids * 0.12) - descuentoiPS;
	console.log(`Impuesto (Importado) 15% Descuento: ${impueston.toFixed(0)} Bs.`);
	alert(`Impuesto (Importado) 15% Descuento: ${impueston.toFixed(0)} Bs.`);
	var montoPagar1i = playeraSIunids + impueston;
	console.log(`Monto a pagar total (Importado): ${montoPagar1i.toFixed(0)} Bs.`);
	alert(`Monto a pagar total (Importado): ${montoPagar1i.toFixed(0)} Bs.`);
} else
	if (cantidadFr > 24 && talla == 2 && tipoFranela == 1 && procedencia == 2) {
		var descuentoiPM = playeraMI * 0.85;
		console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiPM.toFixed(0)} Bs.`);
		alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiPM.toFixed(0)} Bs.`);
		var impuestol = (playeraMIunids * 0.12) - descuentoiPM;
		console.log(`Impuesto (Importado) 15% Descuento: ${impuestol.toFixed(0)} Bs.`);
		alert(`Impuesto (Importado) 15% Descuento: ${impuestol.toFixed(0)} Bs.`);
		var montoPagar2i = playeraMIunids + impuestol;
		console.log(`Monto a pagar total (Importado): ${montoPagar2i.toFixed(0)} Bs.`);
		alert(`Monto a pagar total (Importado): ${montoPagar2i.toFixed(0)} Bs.`);
	} else 
		if (cantidadFr > 24 && talla == 3 && tipoFranela == 1 && procedencia == 2) {
			var descuentoiPL = playeraLI * 0.85;
			console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiPL.toFixed(0)} Bs.`);
			alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiPL.toFixed(0)} Bs.`);
			var impuestoo = (playeraLIunids * 0.12) - descuentoiPL;
			console.log(`Impuesto (Importado) 15% Descuento: ${impuestoo.toFixed(0)} Bs.`);
			alert(`Monto a pagar total (Importado): ${impuestoo.toFixed(0)} Bs.`);
			var montoPagar3i = playeraLIunids + impuestoo;
			console.log(`Monto a pagar total (Importado): ${montoPagar3i.toFixed(0)} Bs.`);
			alert(`Monto a pagar total (Importado): ${montoPagar3i.toFixed(0)} Bs.`);
		} else 
			if (cantidadFr > 24 && talla == 1 && tipoFranela == 2 && procedencia == 2) {
				var descuentoiDS = deportivaSI * 0.85;
				console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiDS.toFixed(0)} Bs.`);
				alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiDS.toFixed(0)} Bs.`);
				var impuestop = (deportivaSIunids * 0.12) - descuentoiDS;
				console.log(`Impuesto (Importado) 15% Descuento: ${impuestop.toFixed(0)} Bs.`);
				alert(`Monto a pagar total (Importado): ${impuestop.toFixed(0)} Bs.`);
				var montoPagar4i = deportivaSIunids + impuestop;
				console.log(`Monto a pagar total (Importado): ${montoPagar4i.toFixed(0)} Bs.`);
				alert(`Monto a pagar total (Importado): ${montoPagar4i.toFixed(0)} Bs.`);
			} else
				if (cantidadFr > 24 && talla == 2 && tipoFranela == 2 && procedencia == 2) {
					var descuentoiDM = deportivaMI * 0.85;
					console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiDM.toFixed(0)} Bs.`);
					alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiDM.toFixed(0)} Bs.`);
					var impuestoq = (deportivaMIunids * 0.12) - descuentoiDM;
					console.log(`Impuesto (Importado) 15% Descuento: ${impuestoq.toFixed(0)} Bs.`);
					alert(`Monto a pagar total (Importado): ${impuestoq.toFixed(0)} Bs.`);
					var montoPagar5i = deportivaMIunids + impuestoq;
					console.log(`Monto a pagar total (Importado): ${montoPagar5i.toFixed(0)} Bs.`);
					alert(`Monto a pagar total (Importado): ${montoPagar5i.toFixed(0)} Bs.`);
				} else
					if (cantidadFr > 24 && talla == 3 && tipoFranela == 2 && procedencia == 2) {
						var descuentoiDL = deportivaLI * 0.85;
						console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiDL.toFixed(0)} Bs.`);
						alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiDL.toFixed(0)} Bs.`);
						var impuestor = (deportivaLIunids * 0.12) - descuentoiDL;
						console.log(`Impuesto (Importado) 15% Descuento: ${impuestor.toFixed(0)} Bs.`);
						alert(`Monto a pagar total (Importado): ${impuestor.toFixed(0)} Bs.`);
						var montoPagar6i = deportivaLIunids + impuestor;
						console.log(`Monto a pagar total (Importado): ${montoPagar6i.toFixed(0)} Bs.`);
						alert(`Monto a pagar total (Importado): ${montoPagar6i.toFixed(0)} Bs.`);
					} else 
						if (cantidadFr > 24 && talla == 1 && tipoFranela == 3 && procedencia == 2) {
							var descuentoiCS = casualSI * 0.85;
							console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiCS.toFixed(0)} Bs.`);
							alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiCS.toFixed(0)} Bs.`);
							var impuestos = (casualSIunids * 0.12) - descuentoiCS;
							console.log(`Impuesto (Importado) 15% Descuento: ${impuestos.toFixed(0)} Bs.`);
							alert(`Monto a pagar total (Importado): ${impuestos.toFixed(0)} Bs.`);
							var montoPagar7i = casualSIunids + impuestos;
							console.log(`Monto a pagar total (Importado): ${montoPagar7i.toFixed(0)} Bs.`);
							alert(`Monto a pagar total (Importado): ${montoPagar7i.toFixed(0)} Bs.`);
						} else
							if (cantidadFr > 24 && talla == 2 && tipoFranela == 3 && procedencia == 2) {
								var descuentoiCM = casualMI * 0.85;
								console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiCM.toFixed(0)} Bs.`);
								alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiCM.toFixed(0)} Bs.`);
								var impuestot = (casualMIunids * 0.12) - descuentoiCM;
								console.log(`Impuesto (Importado) 15% Descuento: ${impuestot.toFixed(0)} Bs.`);
								alert(`Monto a pagar total (Importado): ${impuestot.toFixed(0)} Bs.`);
								var montoPagar8i = casualMIunids + impuestot;
								console.log(`Monto a pagar total (Importado): ${montoPagar8i.toFixed(0)} Bs.`);
								alert(`Monto a pagar total (Importado): ${montoPagar8i.toFixed(0)} Bs.`);
							} else
								if (cantidadFr > 24 && talla == 3 && tipoFranela == 3 && procedencia == 2) {
									var descuentoiCL = casualLI * 0.85;
									console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiCL.toFixed(0)} Bs.`);
									alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiCL.toFixed(0)} Bs.`);
									var impuestou = (casualLIunids * 0.12) - descuentoiCL;
									console.log(`Impuesto (Importado) 15% Descuento: ${impuestou.toFixed(0)} Bs.`);
									alert(`Monto a pagar total (Importado): ${impuestou.toFixed(0)} Bs.`);
									var montoPagar9i = casualLIunids + impuestou;
									console.log(`Monto a pagar total (Importado): ${montoPagar9i.toFixed(0)} Bs.`);
									alert(`Monto a pagar total (Importado): ${montoPagar9i.toFixed(0)} Bs.`);
								} else
									if (cantidadFr > 24 && talla == 1 && tipoFranela == 4 && procedencia == 2) {
										var descuentoiSS = sudaderaSI * 0.85;
										console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiSS.toFixed(0)} Bs.`);
										alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiSS.toFixed(0)} Bs.`);
										var impuestov = (sudaderaSIunids * 0.12) - descuentoiSS;
										console.log(`Impuesto (Importado) 15% Descuento: ${impuestov.toFixed(0)} Bs.`);
										alert(`Monto a pagar total (Importado): ${impuestov.toFixed(0)} Bs.`);
										var montoPagar10i = sudaderaSIunids + impuestov;
										console.log(`Monto a pagar total (Importado): ${montoPagar10i.toFixed(0)} Bs.`);
										alert(`Monto a pagar total (Importado): ${montoPagar10i.toFixed(0)} Bs.`);
									} else
										if (cantidadFr > 24 && talla == 2 && tipoFranela == 4 && procedencia == 2) {
											var descuentoiSM = sudaderaMI * 0.85;
											console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiSM.toFixed(0)} Bs.`);
											alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiSM.toFixed(0)} Bs.`);
											var impuestox = (sudaderaMIunids * 0.12) - descuentoiSM;
											console.log(`Impuesto (Importado) 15% Descuento: ${impuestox.toFixed(0)} Bs.`);
											alert(`Monto a pagar total (Importado): ${impuestox.toFixed(0)} Bs.`);
											var montoPagar11i = sudaderaMIunids + impuestox;
											console.log(`Monto a pagar total (Importado): ${montoPagar11i.toFixed(0)} Bs.`);
											alert(`Monto a pagar total (Importado): ${montoPagar11i.toFixed(0)} Bs.`);
										} else
											if (cantidadFr > 24 && talla == 3 && tipoFranela == 4 && procedencia == 2) {
												var descuentoiSL = sudaderaLI * 0.85;
												console.log(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiSL.toFixed(0)} Bs.`);
												alert(`Descuento del 15% por comprar mas de 2 docenas: ${descuentoiSL.toFixed(0)} Bs.`);
												var impuestoy = (sudaderaLIunids * 0.12) - descuentoiSL;
												console.log(`Impuesto (Importado) 15% Descuento: ${impuestoy.toFixed(0)} Bs.`);
												alert(`Monto a pagar total (Importado): ${impuestoy.toFixed(0)} Bs.`);
												var montoPagar12i = playeraLIunids + impuestoy;
												console.log(`Monto a pagar total (Importado): ${montoPagar12i.toFixed(0)} Bs.`);
												alert(`Monto a pagar total (Importado): ${montoPagar12i.toFixed(0)} Bs.`);
											} else
												if (cantidadFr < 24) {
													console.log("No recibira descuento del 15% por no comprar mas de 2 docenas");
													alert("No recibira descuento del 15% por no comprar mas de 2 docenas");
												}//Descuento del 5% si compra entre 6 y 11 unidades nacional
if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 1 && procedencia == 1) {
	var descuentodPS = playeraSN * 0.95;
	console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodPS.toFixed(0)} Bs.`);
	alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodPS.toFixed(0)} Bs.`);
	var impuestoad = (playeraSNunids * 0.12) - descuentodPS;
	console.log(`Impuesto (Nacional) 5% Descuento: ${impuestoad.toFixed(0)} Bs.`);
	alert(`Impuesto (Nacional) 5% Descuento: ${impuestoad.toFixed(0)} Bs.`);
	var montoPagar1n = playeraSNunids + impuestoad;
	console.log(`Monto a pagar total (Nacional): ${montoPagar1n.toFixed(0)} Bs.`);
	alert(`Monto a pagar total (Nacional): ${montoPagar1n.toFixed(0)} Bs.`);
} else
	if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 1 && procedencia == 1) {
		var descuentodPM = playeraMN * 0.95;
		console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodPM.toFixed(0)} Bs.`);
		alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodPM.toFixed(0)} Bs.`);
		var impuestobd = (playeraMNunids * 0.12) - descuentodPM;
		console.log(`Impuesto (Nacional) 5% Descuento: ${impuestobd.toFixed(0)} Bs.`);
		alert(`Impuesto (Nacional) 5% Descuento: ${impuestobd.toFixed(0)} Bs.`);
		var montoPagar2n = playeraMNunids + impuestobd;
		console.log(`Monto a pagar total (Nacional): ${montoPagar2n.toFixed(0)} Bs.`);
		alert(`Monto a pagar total (Nacional): ${montoPagar2n.toFixed(0)} Bs.`);
	} else 
		if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 1 && procedencia == 1) {
			var descuentodPL = playeraLN * 0.95;
			console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodPL.toFixed(0)} Bs.`);
			alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodPL.toFixed(0)} Bs.`);
			var impuestocd = (playeraLNunids * 0.12) - descuentodPL;
			console.log(`Impuesto (Nacional) 5% Descuento: ${impuestocd.toFixed(0)} Bs.`);
			alert(`Impuesto (Nacional) 5% Descuento: ${impuestocd.toFixed(0)} Bs.`);
			var montoPagar3n = playeraLNunids + impuestocd;
			console.log(`Monto a pagar total (Nacional): ${montoPagar3n.toFixed(0)} Bs.`);
			alert(`Monto a pagar total (Nacional): ${montoPagar3n.toFixed(0)} Bs.`);
		} else 
			if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 2 && procedencia == 1) {
				var descuentodDS = deportivaSN * 0.95;
				console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodDS.toFixed(0)} Bs.`);
				alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodDS.toFixed(0)} Bs.`);
				var impuestodd = (deportivaSNunids * 0.12) - descuentodDs;
				console.log(`Impuesto (Nacional) 5% Descuento: ${impuestod.toFixed(0)} Bs.`);
				alert(`Impuesto (Nacional) 5% Descuento: ${impuestod.toFixed(0)} Bs.`);
				var montoPagar4n = deportivaSNunids + impuestodd;
				console.log(`Monto a pagar total (Nacional): ${montoPagar4n.toFixed(0)} Bs.`);
				alert(`Monto a pagar total (Nacional): ${montoPagar4n.toFixed(0)} Bs.`);
			} else
				if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 2 && procedencia == 1) {
					var descuentodDM = deportivaMN * 0.95;
					console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodDM.toFixed(0)} Bs.`);
					alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodDM.toFixed(0)} Bs.`);
					var impuestoed = (deportivaMNunids * 0.12) - descuentodDM;
					console.log(`Impuesto (Nacional) 5% Descuento: ${impuestoed.toFixed(0)} Bs.`);
					alert(`Impuesto (Nacional) 5% Descuento: ${impuestoed.toFixed(0)} Bs.`);
					var montoPagar5n = deportivaMNunids + impuestoed;
					console.log(`Monto a pagar total (Nacional): ${montoPagar5n.toFixed(0)} Bs.`);
					alert(`Monto a pagar total (Nacional): ${montoPagar5n.toFixed(0)} Bs.`);
				} else
					if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 2 && procedencia == 1) {
						var descuentodDL = deportivaLN * 0.95;
						console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodDL.toFixed(0)} Bs.`);
						alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodDL.toFixed(0)} Bs.`);
						var impuestofd = (deportivaLNunids * 0.12) - descuentodDL;
						console.log(`Impuesto (Nacional) 5% Descuento: ${impuestofd.toFixed(0)} Bs.`);
						alert(`Impuesto (Nacional) 5% Descuento: ${impuestofd.toFixed(0)} Bs.`);
						var montoPagar6n = deportivaLNunids + impuestfd;
						console.log(`Monto a pagar total (Nacional): ${montoPagar6n.toFixed(0)} Bs.`);
						alert(`Monto a pagar total (Nacional): ${montoPagar6n.toFixed(0)} Bs.`);
					} else 
						if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 3 && procedencia == 1) {
							var descuentodCS = casualSN * 0.95;
							console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodCS.toFixed(0)} Bs.`);
							alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodCS.toFixed(0)} Bs.`);
							var impuestogd = (casualSNunids * 0.12) - descuentodCS;
							console.log(`Impuesto (Nacional) 5% Descuento: ${impuestogd.toFixed(0)} Bs.`);
							alert(`Impuesto (Nacional) 5% Descuento: ${impuestogd.toFixed(0)} Bs.`);
							var montoPagar7n = casualSNunids + impuestogd;
							console.log(`Monto a pagar total (Nacional): ${montoPagar7n.toFixed(0)} Bs.`);
							alert(`Monto a pagar total (Nacional): ${montoPagar7n.toFixed(0)} Bs.`);
						} else
							if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 3 && procedencia == 1) {
								var descuentodCM = casualMN * 0.95;
								console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodCM.toFixed(0)} Bs.`);
								alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodCM.toFixed(0)} Bs.`);
								var impuestohd = (casualMNunids * 0.12) - descuentodCM;
								console.log(`Impuesto (Nacional) 5% Descuento: ${impuestohd.toFixed(0)} Bs.`);
								alert(`Impuesto (Nacional) 5% Descuento: ${impuestohd.toFixed(0)} Bs.`);
								var montoPagar8n = casualMNunids + impuestohd;
								console.log(`Monto a pagar total (Nacional): ${montoPagar8n.toFixed(0)} Bs.`);
								alert(`Monto a pagar total (Nacional): ${montoPagar8n.toFixed(0)} Bs.`);
							} else
								if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 3 && procedencia == 1) {
									var descuentodCL = casualLN * 0.95;
									console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodCL.toFixed(0)} Bs.`);
									alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodCL.toFixed(0)} Bs.`);
									var impuestoid = (casualLNunids * 0.12) - descuentodCL;
									console.log(`Impuesto (Nacional) 5% Descuento: ${impuestoid.toFixed(0)} Bs.`);
									alert(`Impuesto (Nacional) 5% Descuento: ${impuestoid.toFixed(0)} Bs.`);
									var montoPagar9n = casualLNunids + impuestoid;
									console.log(`Monto a pagar total (Nacional): ${montoPagar9n.toFixed(0)} Bs.`);
									alert(`Monto a pagar total (Nacional): ${montoPagar9n.toFixed(0)} Bs.`);
								} else
									if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 4 && procedencia == 1) {
										var descuentodSS = sudaderaSN * 0.95;
										console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodSS.toFixed(0)} Bs.`);
										alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodSS.toFixed(0)} Bs.`);
										var impuestojd = (sudaderaSNunids * 0.12) - descuentodSS;
										console.log(`Impuesto (Nacional) 5% Descuento: ${impuestogd.toFixed(0)} Bs.`);
										alert(`Impuesto (Nacional) 5% Descuento: ${impuestogd.toFixed(0)} Bs.`);
										var montoPagar10n = sudaderaSNunids + impuestojd;
										console.log(`Monto a pagar total (Nacional): ${montoPagar10n.toFixed(0)} Bs.`);
										alert(`Monto a pagar total (Nacional): ${montoPagar10n.toFixed(0)} Bs.`);
									} else
										if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 4 && procedencia == 1) {
											var descuentodSM = sudaderaMN * 0.95;
											console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodSM.toFixed(0)} Bs.`);
											alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodSM.toFixed(0)} Bs.`);
											var impuestokd = (sudaderaMNunids * 0.12) - descuentodSM;
											console.log(`Impuesto (Nacional) 5% Descuento: ${impuestokd.toFixed(0)} Bs.`);
											alert(`Impuesto (Nacional) 5% Descuento: ${impuestokd.toFixed(0)} Bs.`);
											var montoPagar11n = sudaderaMNunids + impuestokd;
											console.log(`Monto a pagar total (Nacional): ${montoPagar11n.toFixed(0)} Bs.`);
											alert(`Monto a pagar total (Nacional): ${montoPagar11n.toFixed(0)} Bs.`);
										} else
											if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 4 && procedencia == 1) {
												var descuentodSL = sudaderaLN * 0.95;
												console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodSL.toFixed(0)} Bs.`);
												alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentodSL.toFixed(0)} Bs.`);
												var impuestomd = (sudaderaLNunids * 0.12) - descuentodSL;
												console.log(`Impuesto (Nacional) 5% Descuento: ${impuestomd.toFixed(0)} Bs.`);
												alert(`Impuesto (Nacional) 5% Descuento: ${impuestomd.toFixed(0)} Bs.`);
												var montoPagar12n = sudaderaLNunids + impuestomd;
												console.log(`Monto a pagar total (Nacional): ${montoPagar12n.toFixed(0)} Bs.`);
												alert(`Monto a pagar total (Nacional): ${montoPagar12n.toFixed(0)} Bs.`);
											} else //importado
if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 1 && procedencia == 2) {
	var descuentoidPS = playeraSI * 0.95;
	console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidPS.toFixed(0)} Bs.`);
	alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidPS.toFixed(0)} Bs.`);
	var impuestondI = (playeraSIunids * 0.12) - descuentoidPS;
	console.log(`Impuesto (Importado) 5% Descuento: ${impuestondI.toFixed(0)} Bs.`);
	alert(`Impuesto (Importado) 5% Descuento: ${impuestondI.toFixed(0)} Bs.`);
	var montoPagar1id = playeraSIunids + impuestondI;
	console.log(`Monto a pagar total (Importado): ${montoPagar1id.toFixed(0)} Bs.`);
	alert(`Monto a pagar total (Importado): ${montoPagar1id.toFixed(0)} Bs.`);
} else
	if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 1 && procedencia == 2) {
		var descuentoidPM = playeraMI * 0.95;
		console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidPM.toFixed(0)} Bs.`);
		alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidPM.toFixed(0)} Bs.`);
		var impuestoodI = (playeraMIunids * 0.12) - descuentoidPM;
		console.log(`Impuesto (Importado) 5% Descuento: ${impuestoodI.toFixed(0)} Bs.`);
		alert(`Impuesto (Importado) 5% Descuento: ${impuestoodI.toFixed(0)} Bs.`);
		var montoPagar2id = playeraMIunids + impuestoodI;
		console.log(`Monto a pagar total (Importado): ${montoPagar2id.toFixed(0)} Bs.`);
		alert(`Monto a pagar total (Importado): ${montoPagar2id.toFixed(0)} Bs.`);
	} else 
		if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 1 && procedencia == 2) {
			var descuentoidPL = playeraLI * 0.95;
			console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidPL.toFixed(0)} Bs.`);
			alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidPL.toFixed(0)} Bs.`);
			var impuestopdI = (playeraLIunids * 0.12) - descuentoidPL;
			console.log(`Impuesto (Importado) 5% Descuento: ${impuestopdI.toFixed(0)} Bs.`);
			alert(`Impuesto (Importado) 5% Descuento: ${impuestopdI.toFixed(0)} Bs.`);
			var montoPagar3id = playeraLIunids + impuestopdI;
			console.log(`Monto a pagar total (Importado): ${montoPagar3id.toFixed(0)} Bs.`);
			alert(`Monto a pagar total (Importado): ${montoPagar3id.toFixed(0)} Bs.`);
		} else 
			if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 2 && procedencia == 2) {
				var descuentoidDS = deportivaSI * 0.95;
				console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidDS.toFixed(0)} Bs.`);
				alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidDS.toFixed(0)} Bs.`);
				var impuestoqdI = (deportivaSIunids * 0.12) - descuentoidDs;
				console.log(`Impuesto (Importado) 5% Descuento: ${impuestoqdI.toFixed(0)} Bs.`);
				alert(`Impuesto (Importado) 5% Descuento: ${impuestoqdI.toFixed(0)} Bs.`);
				var montoPagar4id = deportivaSIunids + impuestoqdI;
				console.log(`Monto a pagar total (Importado): ${montoPagar4id.toFixed(0)} Bs.`);
				alert(`Monto a pagar total (Importado): ${montoPagar4id.toFixed(0)} Bs.`);
			} else
				if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 2 && procedencia == 2) {
					var descuentoidDM = deportivaMI * 0.95;
					console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidDM.toFixed(0)} Bs.`);
					alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidDM.toFixed(0)} Bs.`);
					var impuestordI = (deportivaMIunids * 0.12) - descuentoidDM;
					console.log(`Impuesto (Importado) 5% Descuento: ${impuestordI.toFixed(0)} Bs.`);
					alert(`Impuesto (Importado) 5% Descuento: ${impuestordI.toFixed(0)} Bs.`);
					var montoPagar5id = deportivaMIunids + impuestordI;
					console.log(`Monto a pagar total (Importado): ${montoPagar5id.toFixed(0)} Bs.`);
					alert(`Monto a pagar total (Importado): ${montoPagar5id.toFixed(0)} Bs.`);
				} else
					if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 2 && procedencia == 2) {
						var descuentoidDL = deportivaLI * 0.95;
						console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidDL.toFixed(0)} Bs.`);
						alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidDL.toFixed(0)} Bs.`);
						var impuestosdI = (deportivaLIunids * 0.12) - descuentoidDL;
						console.log(`Impuesto (Importado) 5% Descuento: ${impuestosdI.toFixed(0)} Bs.`);
						alert(`Impuesto (Importado) 5% Descuento: ${impuestosdI.toFixed(0)} Bs.`);
						var montoPagar6id = deportivaLIunids + impuestosdI;
						console.log(`Monto a pagar total (Importado): ${montoPagar6id.toFixed(0)} Bs.`);
						alert(`Monto a pagar total (Importado): ${montoPagar6id.toFixed(0)} Bs.`);
					} else 
						if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 3 && procedencia == 2) {
							var descuentoidCS = casualSI * 0.95;
							console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidCS.toFixed(0)} Bs.`);
							alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidCS.toFixed(0)} Bs.`);
							var impuestotdI = (casualSIunids * 0.12) - descuentoidCS;
							console.log(`Impuesto (Importado) 5% Descuento: ${impuestotdI.toFixed(0)} Bs.`);
							alert(`Impuesto (Importado) 5% Descuento: ${impuestotdI.toFixed(0)} Bs.`);
							var montoPagar7id = casualSIunids + impuestotdI;
							console.log(`Monto a pagar total (Importado): ${montoPagar7id.toFixed(0)} Bs.`);
							alert(`Monto a pagar total (Importado): ${montoPagar7id.toFixed(0)} Bs.`);
						} else
							if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 3 && procedencia == 2) {
								var descuentoidCM = casualMI * 0.95;
								console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidCM.toFixed(0)} Bs.`);
								alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidCM.toFixed(0)} Bs.`);
								var impuestoudI = (casualMIunids * 0.12) - descuentoidCM;
								console.log(`Impuesto (Importado) 5% Descuento: ${impuestoudI.toFixed(0)} Bs.`);
								alert(`Impuesto (Importado) 5% Descuento: ${impuestoudI.toFixed(0)} Bs.`);
								var montoPagar8id = casualMIunids + impuestoudI;
								console.log(`Monto a pagar total (Importado): ${montoPagar8id.toFixed(0)} Bs.`);
								alert(`Monto a pagar total (Importado): ${montoPagar8id.toFixed(0)} Bs.`);
							} else
								if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 3 && procedencia == 2) {
									var descuentoidCL = casualLI * 0.95;
									console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidCL.toFixed(0)} Bs.`);
									alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidCL.toFixed(0)} Bs.`);
									var impuestovdI = (casualLIunids * 0.12) - descuentoidCL;
									console.log(`Impuesto (Importado) 5% Descuento: ${impuestovdI.toFixed(0)} Bs.`);
									alert(`Impuesto (Importado) 5% Descuento: ${impuestovdI.toFixed(0)} Bs.`);
									var montoPagar9id = casualLIunids + impuestovdI;
									console.log(`Monto a pagar total (Importado): ${montoPagar9id.toFixed(0)} Bs.`);
									alert(`Monto a pagar total (Importado): ${montoPagar9id.toFixed(0)} Bs.`);
								} else
									if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 1 && tipoFranela == 4 && procedencia == 2) {
										var descuentoidSS = sudaderaSI * 0.95;
										console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidSS.toFixed(0)} Bs.`);
										alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidSS.toFixed(0)} Bs.`);
										var impuestoxdI = (sudaderaSIunids * 0.12) - descuentoidSS;
										console.log(`Impuesto (Importado) 5% Descuento: ${impuestoxdI.toFixed(0)} Bs.`);
										alert(`Impuesto (Importado) 5% Descuento: ${impuestoxdI.toFixed(0)} Bs.`);
										var montoPagar10id = sudaderaSIunids + impuestoxdI;
										console.log(`Monto a pagar total (Importado): ${montoPagar10id.toFixed(0)} Bs.`);
										alert(`Monto a pagar total (Importado): ${montoPagar10id.toFixed(0)} Bs.`);
									} else
										if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 2 && tipoFranela == 4 && procedencia == 2) {
											var descuentoidSM = sudaderaMI * 0.95;
											console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidSM.toFixed(0)} Bs.`);
											alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidSM.toFixed(0)} Bs.`);
											var impuestoydI = (sudaderaMIunids * 0.12) - descuentoidSM;
											console.log(`Impuesto (Importado) 5% Descuento: ${impuestoydI.toFixed(0)} Bs.`);
											alert(`Impuesto (Importado) 5% Descuento: ${impuestoydI.toFixed(0)} Bs.`);
											var montoPagar11id = sudaderaMIunids + impuestoydI;
											console.log(`Monto a pagar total (Importado): ${montoPagar11id.toFixed(0)} Bs.`);
											alert(`Monto a pagar total (Importado): ${montoPagar11id.toFixed(0)} Bs.`);
										} else
											if (cantidadFr >= 6 && cantidadFr <= 11 && talla == 3 && tipoFranela == 4 && procedencia == 2) {
												var descuentoidSL = sudaderaLI * 0.95;
												console.log(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidSL.toFixed(0)} Bs.`);
												alert(`Descuento del 5% por comprar entre 6 y 11 unidades: ${descuentoidSL.toFixed(0)} Bs.`);
												var impuestozdI = (sudaderaLIunids * 0.12) - descuentoidSL;
												console.log(`Impuesto (Importado) 5% Descuento: ${impuestozdI.toFixed(0)} Bs.`);
												alert(`Impuesto (Importado) 5% Descuento: ${impuestozdI.toFixed(0)} Bs.`);
												var montoPagar12id = sudaderaLIunids + impuestozdI;
												console.log(`Monto a pagar total (Importado): ${montoPagar12id.toFixed(0)} Bs.`);
												alert(`Monto a pagar total (Importado): ${montoPagar12id.toFixed(0)} Bs.`);
											} else 
												if (!(cantidadFr >= 6 && cantidadFr <= 11)) {
													console.log("No recibira descuento del 5% por no comprar entre 6 y 11 unidades");
													alert("No recibira descuento del 5% por no comprar entre 6 y 11 unidades");
												}