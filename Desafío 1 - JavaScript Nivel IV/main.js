$(document).ready(() => {
    $('#mostrarSec').hide();

    // Objetivo 1
    let ajaxHtml = new XMLHttpRequest();
    
    let ajaxSec = new XMLHttpRequest();
    let ajaxCar = new XMLHttpRequest();
    let ajaxCur = new XMLHttpRequest();
    let ajaxCurArea = new XMLHttpRequest();

    $("#btnCarreras").click(() => {
        $('#mostrarSec').hide();
        ajaxHtml.open('GET', 'carreras.html', true);
        ajaxHtml.send();
        //Objetivo 2
        ajaxCar.open('GET', 'planificacioncarrera.json', true);
        ajaxCar.send();
    });

    $("#btnCursos").click(() => {
        $('#mostrarSec').hide();
        ajaxHtml.open('GET', 'cursos.html', true);
        ajaxHtml.send();
        //Objetivo 3
        ajaxCur.open('GET', 'curso.json', true);
        ajaxCur.send()
        //Objetivo 5
        ajaxCurArea.open('GET', 'areadeestudio.json', true);
        ajaxCurArea.send()
    });

    //Objetivo 1
    ajaxHtml.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 404)
                console.log("Error, no existe.");
            else
                if (this.status == 200) {
                    $("#contenido").html(this.response);
                }
        }
    }

    ajaxHtml.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 404)
                console.log("Error, no existe.");
            else
                if (this.status == 200) {
                    $("#contenido").html(this.response);
                }
        }
    }

    //Objetivo 2
    $("#btnMostrarSeccion").click(() => {
        $('#mostrarCar').hide();
        $('#mostrarCur').hide();
        $('#mostrarSec').show();
        ajaxSec.open('GET', 'seccion.json', true);
        ajaxSec.send();
    });

    ajaxSec.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let contenidoSec = document.querySelector("#res");
            contenidoSec.innerHTML = '';

            for (let datosSec of datos) {
                contenidoSec.innerHTML += `
                    <tr>
                        <td>${datosSec.materia}</td>
                        <td>${datosSec.id}</td>
                        <td>${datosSec.fi}</td>
                        <td>${datosSec.fechainicio}</td>
                        <td>${datosSec.fechainiciotentativa}</td>
                        <td>${datosSec.nivel}</td>
                        <td>${datosSec.estado}</td>
                        <td>${datosSec.ft}</td>
                        <td>${datosSec.codigo}</td>
                        <td>${datosSec.objetivoprincipal}</td>
                        <td>${datosSec.codigonivel}</td>
                        <td>${datosSec.idcurso}</td>
                        <td>${datosSec.modalidad}</td>
                    </tr>
                `
            }
        }
    }

    //Objetivo 3
    ajaxCar.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {

            let datos = JSON.parse(this.responseText);
            let contenidoCar = document.querySelector("#res");
            contenidoCar.innerHTML = '';

            for (let datosCar of datos.carreras) {
                contenidoCar.innerHTML += `
                    <tr>
                        <td>${datosCar.id}</td>
                        <td>${datosCar.idcarrera}</td>
                        <td>${datosCar.fechacreacion}</td>
                        <td>${datosCar.fechamodificacion}</td>
                        <td>${datosCar.nombre}</td>
                        <td>${datosCar.activo}</td>
                        <td>${datosCar.recordstatus}</td>
                        <td>${datosCar.sincronizado}</td>
                        <td>${datosCar.ultimaactualizacion}</td>
                        <td>${datosCar.ultimasincronizacion}</td>
                        <td>${datosCar.codigo}</td>
                        <td>${datosCar.registradome}</td>
                        <td>${datosCar.precioactual}</td>
                        <td>${datosCar.costoinscripcion}</td>
                        <td>${datosCar.titulo}</td>
                        <td>${datosCar.objetivoresumido}</td>
                        <td>${datosCar.activa}</td>
                        <td>${datosCar.idcoordinador}</td>
                        <td>${datosCar.nromateriasxperiodo}</td>
                        <td>${datosCar.nroperiodos}</td>
                        <td>${datosCar.idtipopaquete}</td>
                        <td>${datosCar.idpensumcarrera}</td>
                        <td>${datosCar.idturnocarrera}</td>
                        <td>${datosCar.fechainicio}</td>
                        <td>${datosCar.fecha}</td>
                        <td>${datosCar.idmodalidad}</td>
                        <td>${datosCar.idarea}</td>
                        <td>${datosCar.idlapsocarrera}</td>
                        <td>${datosCar.idmodalidadcursos}</td>
                        <td>${datosCar.modalidad}</td>
                        <td>${datosCar.fi}</td>
                    </tr>
                 `
            }
        }
    }

    //Objetivo 4
    ajaxCur.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {

            let datos = JSON.parse(this.responseText);
            let contenidoCur = document.querySelector("#res");
            contenidoCur.innerHTML = '';

            for (let datosCur of datos.cursos) {
                contenidoCur.innerHTML += `
                    <tr>
                        <td>${datosCur.id}</td>
                        <td>${datosCur.nombre}</td>
                        <td>${datosCur.titulo}</td>
                        <td>${datosCur.codigo}</td>
                        <td>${datosCur.objetivoresumido}</td>
                        <td>${datosCur.idtipoplanificacion}</td>
                        <td>${datosCur.niveles}</td>
                        <td>${datosCur.participantes}</td>
                    </tr>
                 `
            }
        }
    }

    //Objetivo 5
    ajaxCurArea.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {

            let datos = JSON.parse(this.responseText);
            let contenidoCurArea = document.querySelector("#resArea");
            contenidoCurArea.innerHTML = '';

            for (let datosCurArea of datos.areas) {
                contenidoCurArea.innerHTML += `
                    <tr>
                        <td>${datosCurArea.id}</td>
                        <td>${datosCurArea.recordstatus}</td>
                        <td>${datosCurArea.nombre}</td>
                        <td>${datosCurArea.descripcion}</td>
                        <td>${datosCurArea.idcoordinador}</td>
                        <td>${datosCurArea.activa}</td>
                        <td>${datosCurArea.sincronizado}</td>
                        <td>${datosCurArea.ultimaactualizacion}</td>
                        <td>${datosCurArea.ultimasincronizacion}</td>
                        <td>${datosCurArea.nromaterias}</td>
                    </tr>
                 `
            }
        }
    }
});