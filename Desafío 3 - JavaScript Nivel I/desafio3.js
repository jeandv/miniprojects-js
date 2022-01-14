//Objetivo-4:
let totalIngresos = 0;
var cantidadPasajeros = parseInt(prompt("¿Hay datos por registrar de pasajeros? Cuantos registrará?"));
for (i = 1; i <= cantidadPasajeros; i++) {
    console.log(`Registro de datos nro: ${i}`);
    let valido = false;
    do {
//Objetivo-1:
        valido = false;
        do {
            var nombre = prompt("Coloque su nombre:");
            if (nombre == null || nombre.trim().length == 0 || (Number(nombre)))
                alert("Nombre invalido. Coloque su nombre correctamente");
            else
                console.log(`Nombre del pasajero: ${nombre}`);
            valido = true;
        } while (!valido);
        valido = false;
        do {
            var cedula = prompt("Coloque su Nro. Cedula:");
            if (cedula == null || cedula.trim().length < 6 || (isNaN(cedula)))
                alert("Nro. Cedula invalido. Coloque su cedula correctamente");
            else
                console.log(`Cedula del pasajero: ${cedula}`);
            valido = true;
        } while (!valido);
        valido = false;
        do {
            var genero = prompt("Coloque su genero ([F]emenino/[M]asculino):")
            if (genero == null || genero.trim().length == 0 || (Number(genero)))
                alert("Genero invalido. Coloque su genero correctamente");
            else
                console.log(`Genero del pasajero: ${genero}`);
            valido = true;
        } while (!valido);
        valido = false;
        do {
            var destino = prompt("Coloque su lugar de destino:");
            if (destino == null || destino.trim().length == 0)
                alert("Destino invalido. Coloque el destino correctamente");
            else
                console.log(`Destino del pasajero: ${destino}`);
            valido = true;
        } while (!valido);
//Objetivo-2:
//Descuento por Nro. Cedula par y Impuesto por Nro. Cedula impar
        if (cedula % 2 === 0) {
            var cedulaNro = - 1500;
            alert("Tendra un descuento! de 1500 Bs. porque su Nro. Cedula es un numero par");
            console.log("Tendra un descuento! de 1500 Bs. porque su Nro. Cedula es un numero par");
        } else {
            var cedulaNro = + 3000;
            alert("Tendra un impuesto de 3000 Bs. porque su Nro. Cedula es un numero impar");
            console.log("Tendra un impuesto de 3000 Bs. porque su Nro. Cedula es un numero impar");
        }
//Descuento por el genero
        if (genero === 'F' || genero === 'Femenino') {
            var descuentoGenero = 0.85;
            alert("Tendra descuento! del 15% por ser genero femenino");
            console.log("Tendra descuento! del 15% por ser genero femenino");
        } else
            if (genero === 'M' || genero === 'Masculino') {
                var descuentoGenero = 0.90;
                alert("Tendra descuento! del 10% por ser genero masculino");
                console.log("Tendra descuento! del 10% por ser genero masculino");
            }
//Impuesto aplicable al pasajero
        var inglaterra = 140000;
        var suiza = 220000;
        if (destino === '4' || destino === 'Inglaterra' || destino === 'inglaterra') {
            var impuestoDestino = (inglaterra * 0.5) + 10000;
            alert("Tendra un impuesto del 5% del precio del vuelo + 10000 Bs. por elegir el destino nro:4 / Londres");
            console.log("Tendra un impuesto del 5% del precio del vuelo + 10000 Bs. por elegir el destino nro:4 / Londres");
        } else
            if (destino === '5' || destino === 'Suiza' || destino === 'suiza') {
                var impuestoDestino = (suiza * 0.5) + 10000;
                alert("Tendra un impuesto del 5% del precio del vuelo + 10000 Bs. por elegir el destino nro:5 / Suiza");
                console.log("Tendra un impuesto del 5% del precio del vuelo + 10000 Bs. por elegir el destino nro:5 / Suiza");
            }
//Objetivo-3:
//Precio base del viaje  y precio total segun el destino que elija el cliente:
        var aruba = 25000;
        var mexico = 45700;
        var miami = 50000;
        if (destino === '1' || destino === 'Aruba' || destino === 'aruba') {
            var totalPasaje = (aruba + cedulaNro) * descuentoGenero;
            alert(`El precio base del destino hacia Aruba es: ${aruba.toFixed(2)} Bs.`);
            console.log(`El precio base del destino hacia Aruba es: ${aruba.toFixed(2)} Bs.`);
            alert(`El precio total del pasaje hacia Aruba es: ${totalPasaje.toFixed(2)} Bs.`);
            console.log(`El precio total del pasaje hacia Aruba es: ${totalPasaje.toFixed(2)} Bs.`);
        } else
            if (destino === '2' || destino === 'Mexico' || destino === 'mexico') {
                var totalPasaje = (mexico + cedulaNro) * descuentoGenero;
                alert(`El precio base del destino hacia Mexico es: ${mexico.toFixed(2)} Bs.`);
                console.log(`El precio base del destino hacia Mexico es: ${mexico.toFixed(2)} Bs.`);
                alert(`El precio total del pasaje hacia Mexico es: ${totalPasaje.toFixed(2)} Bs.`);
                console.log(`El precio total del pasaje hacia Mexico es: ${totalPasaje.toFixed(2)} Bs.`);
            } else
                if (destino === '3' || destino === 'Miami' || destino === 'miami') {
                    var totalPasaje = (miami + cedulaNro) * descuentoGenero;
                    alert(`El precio base del destino hacia Miami es: ${miami.toFixed(2)} Bs.`);
                    console.log(`El precio base del destino hacia Miami es: ${miami.toFixed(2)} Bs.`);
                    alert(`El precio total del pasaje hacia Miami es: ${totalPasaje.toFixed(2)} Bs.`);
                    console.log(`El precio total del pasaje hacia Miami es: ${totalPasaje.toFixed(2)} Bs.`);
                } else
                    if (destino === '4' || destino === 'Inglaterra' || destino === 'inglaterra') {
                        var totalPasaje = (inglaterra + cedulaNro) * descuentoGenero + impuestoDestino;
                        alert(`El precio base del destino hacia Inglaterra es: ${inglaterra.toFixed(2)} Bs.`);
                        console.log(`El precio base del destino hacia Inglaterra es: ${inglaterra.toFixed(2)} Bs.`);
                        alert(`El precio total del pasaje hacia Inglaterra es: ${totalPasaje.toFixed(2)} Bs.`);
                        console.log(`El precio total del pasaje hacia Inglaterra es: ${totalPasaje.toFixed(2)} Bs.`);
                    } else
                        if (destino === '5' || destino === 'Suiza' || destino === 'suiza') {
                            var totalPasaje = (suiza + cedulaNro) * descuentoGenero + impuestoDestino;
                            alert(`El precio base del destino hacia Suiza es: ${suiza.toFixed(2)} Bs.`);
                            console.log(`El precio base del destino hacia Suiza es: ${suiza.toFixed(2)} Bs.`);
                            alert(`El precio total del pasaje hacia Suiza es: ${totalPasaje.toFixed(2)} Bs.`);
                            console.log(`El precio total del pasaje hacia Suiza es: ${totalPasaje.toFixed(2)} Bs.`);
                        } else
                            valido = true;
    } while (!valido);
    totalIngresos += totalPasaje;
    promedio = totalIngresos / cantidadPasajeros;
}
//Objetivo-5:
alert(`Se han registrado ${cantidadPasajeros} pasajeros en la agencia`);
console.log(`Se han registrado ${cantidadPasajeros} pasajeros en la agencia`);
alert(`El total de ingresos de la agencia de vuelos: ${totalIngresos.toFixed(2)} Bs.`);
console.log(`El total de ingresos de la agencia de vuelos: ${totalIngresos.toFixed(2)} Bs.`);
alert(`El promedio de ingreso es: ${promedio.toFixed(2)} Bs.`);
console.log(`El promedio de ingreso es: ${promedio.toFixed(2)} Bs.`);