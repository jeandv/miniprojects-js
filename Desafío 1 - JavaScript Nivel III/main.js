//Objetivo 1
function Alumno(nombre, cedula, nota) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.nota = nota;
}

window.onload = () => {
    let tabla = document.getElementById("tablaDatos");
    let alumnosSec = [];
    let notas = 0;
    let z = 0
    document.form.btnReg.addEventListener("click", function () {
        if (!inputVacio(document.form.nombre, "Nombre Obligatorio"))
            if (!inputVacio(document.form.cedula, "Cedula Obligatorio"))
                if (!inputVacio(document.form.nota, "Nota del desafio Obligatorio"))
                    if (!notaInva(document.form.nota, "Error. La nota debe ser del 0 al 100")) {
                        z++
                        let a = new Alumno(
                            document.form.nombre.value,
                            document.form.cedula.value,
                            document.form.nota.value
                        )
                        alumnosSec.push(a);

                        notaAlumno = parseInt(document.form.nota.value)
                        notas = notas + notaAlumno;

                        //Objetivo 4
                        let x = new Seccion("numero 3669", "Front-end Master", alumnosSec);
                        document.getElementById("nroSec").innerHTML = `<p>${x['numero']}</p>`;
                        document.getElementById("nombreCurso").innerHTML = `<p>${x['cursos']}</p>`;

                        //Objetivo 5
                        let prom = x.calcProm(notas, z);
                        document.getElementById("promSec").innerHTML = `<p>${prom}</p>`;

                        let fila = tabla.insertRow(-1);

                        let celda = fila.insertCell(-1);
                        celda.innerHTML = document.form.nombre.value;

                        celda = fila.insertCell(-1);
                        celda.innerHTML = document.form.cedula.value;

                        celda = fila.insertCell(-1);
                        celda.innerHTML = document.form.nota.value;

                        celda = fila.insertCell(-1);
                        celda.innerHTML = prom;

                    }
    });
}

window.addEventListener("load", function () {
    document.form.nombre.addEventListener("input", function (e) {
        soloTexto(this, "[a-z ]")
    });
});

window.addEventListener("load", function () {
    document.form.cedula.addEventListener("keypress", soloNumeros, false);
});

window.addEventListener("load", function () {
    document.form.nota.addEventListener("keypress", soloNumeros, false);
});

function soloTexto(input, patron) {
    let texto = input.value
    let letras = texto.split("")
    for (let x in letras) {
        let letra = letras[x];
        if (!(new RegExp(patron, "i")).test(letra)) {
            letras[x] = ""
        }
    }
    input.value = letras.join("")
}

function soloNumeros(e) {
    let key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

function inputVacio(i, m) {
    if (i.value.trim().length == 0) {
        alert(m)
        i.focus();
        return true;
    } else
        return false;
}

function notaInva(i, m) {
    if (i.value < 0 || i.value > 100) {
        alert(m)
        i.focus();
        return true;
    } else
        return false;
}