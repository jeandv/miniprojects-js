//Objetivo 1
function notaFinal(des1, des2, des3, des4) {
    let total = (des1 + des2 + des3 + des4) / 4;
    return total;
}

//Objetivo 2
function notaAlumno(promedio, notaExamen) {
    let des1 = parseInt(document.getElementById("des1").value);
    let des2 = parseInt(document.getElementById("des2").value);
    let des3 = parseInt(document.getElementById("des3").value);
    let des4 = parseInt(document.getElementById("des4").value);

    promedio = notaFinal(des1, des2, des3, des4);
    document.datos.notaPromedio.value = promedio;

    notaExamen = parseInt(document.getElementById("examen").value);
    document.datos.notaExamen.value = notaExamen;

    if (promedio >= 80) {
        return true;
    } else {
        return false;
    }
}

let nombres = [];
let notas = [];
let cantAprobados = [];
let cantReprobados = [];
let porcAprobados = [];

//Objetivo 3
window.onload = function () {
    document.datos.btnNota.addEventListener("click", notaAlumno);

    //Objetivo 4
    document.datos.btnRegistro.addEventListener("click", () => {
        nombres.push(document.datos.nombre.value);
        notas.push(document.datos.notaPromedio.value);
        porcAprobados.push(document.datos.notaPromedio.value);

        if (document.datos.notaPromedio.value >= 80) {
            cantAprobados.push(document.datos.notaPromedio.value);
        } else {
            cantReprobados.push(document.datos.notaPromedio.value);
        }

        let sum = 0;
        for (let i = 0; i < notas.length; i++) {
            sum += parseFloat(notas[i]);
        }
        prom = sum / notas.length;
        document.getElementById("prom").innerHTML = `<b>${prom.toFixed(0)}</b>`;

        let cantidadAprobados = cantAprobados.length;
        document.getElementById("cantApro").innerHTML = `<b>${cantidadAprobados}</b>`;

        let cantidadReprobados = cantReprobados.length;
        document.getElementById("cantRepro").innerHTML = `<b>${cantidadReprobados}</b>`;

        let porcentajeApro = (cantidadAprobados * 100) / nombres.length;
        document.getElementById("porcApro").innerHTML = `<b>${porcentajeApro.toFixed(0)}</b>%`;

        //Objetivo 5
        document.datos.nombre.value = "";
        document.datos.des1.value = "";
        document.datos.des2.value = "";
        document.datos.des3.value = "";
        document.datos.des4.value = "";
        document.datos.examen.value = "";
        document.datos.notaPromedio.value = "";
        document.datos.notaExamen.value = "";
    })
}
