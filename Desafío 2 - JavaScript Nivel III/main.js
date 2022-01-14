function Alumno(nombre, cedula, nota) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.nota = nota;
}

//Objetivo 2
let alumnosBD = {
    "alumnos": [
        {
            "nombre": "Jean Rondon",
            "cedula": "12345678"
        },
        {
            "nombre": "Luis Rodriguez",
            "cedula": "87654321"
        },
        {
            "nombre": "Marco Perez",
            "cedula": "11223344"
        },
        {
            "nombre": "Pablo Marquez",
            "cedula": "01020304"
        },
        {
            "nombre": "Juan Pereira",
            "cedula": "10203040"
        }
    ]
};

window.onload = () => {
    let tabla = document.getElementById("tablaDatos");
    let btnEliminar = document.getElementById("ReiEliCookies");
    let alumnosSec = [];
    let notas = 0;
    let z = 0;
    let x;

    //Objetivo 5
    let cookiesSec = Cookies.get('seccion');
    if (cookiesSec != undefined) {
        try {
            alumnosSec = JSON.parse(cookiesSec);
        } catch (e) {
            console.log("no se ha podido leer la seccion guardada")
        }
    }

    document.form.cedula.onkeydown = () => {
        //Objetivo 3
        for (let alumnosClase of alumnosBD.alumnos) {
            if (alumnosClase.cedula.indexOf(document.form.cedula.value) !== -1)
                document.form.nombre.value = alumnosClase.nombre;
        }
    };

    //Objetivo 1
    document.form.btnSecc.addEventListener("click", function () {
        if (!inputVacio(document.form.nombre, "Nombre Obligatorio"))
            if (!inputVacio(document.form.cedula, "Cedula Obligatorio"))
                if (!inputVacio(document.form.sec, "Número de la sección Obligatorio"))
                    if (!inputVacio(document.form.crs, "Nombre del curso Obligatorio"))
                        if (!inputVacio(document.form.nota1, "Nota del desafio 1 Obligatorio"))
                            if (!inputVacio(document.form.nota2, "Nota del desafio 2 Obligatorio"))
                                if (!inputVacio(document.form.nota3, "Nota del desafio 3 Obligatorio"))
                                    if (!inputVacio(document.form.nota4, "Nota del desafio 4 Obligatorio"))
                                        if (!notaInva(document.form.nota1, "Error. Las notas deben ser del 0 al 100"))
                                            if (!notaInva(document.form.nota2, "Error. Las notas deben ser del 0 al 100"))
                                                if (!notaInva(document.form.nota3, "Error. Las notas deben ser del 0 al 100"))
                                                    if (!notaInva(document.form.nota4, "Error. La notas deben ser del 0 al 100")) {
                                                        let numeroSec = document.form.sec.value;
                                                        let nombreCrs = document.form.crs.value;
                                                        let a = new Alumno(
                                                            document.form.nombre.value,
                                                            document.form.cedula.value,
                                                            document.form.nota1.value,
                                                            document.form.nota2.value,
                                                            document.form.nota3.value,
                                                            document.form.nota4.value
                                                        )
                                                        alumnosSec.push(a);

                                                        x = new Seccion(numeroSec, nombreCrs, alumnosSec);
                                                    }
    });

    document.form.btnReg.addEventListener("click", function () {
        if (!inputVacio(document.form.nombre, "Nombre Obligatorio"))
            if (!inputVacio(document.form.cedula, "Cedula Obligatorio"))
                if (!inputVacio(document.form.sec, "Número de la sección Obligatorio"))
                    if (!inputVacio(document.form.crs, "Nombre del curso Obligatorio"))
                        if (!inputVacio(document.form.nota1, "Nota del desafio 1 Obligatorio"))
                            if (!inputVacio(document.form.nota2, "Nota del desafio 2 Obligatorio"))
                                if (!inputVacio(document.form.nota3, "Nota del desafio 3 Obligatorio"))
                                    if (!inputVacio(document.form.nota4, "Nota del desafio 4 Obligatorio"))
                                        if (!notaInva(document.form.nota1, "Error. Las notas deben ser del 0 al 100"))
                                            if (!notaInva(document.form.nota2, "Error. Las notas deben ser del 0 al 100"))
                                                if (!notaInva(document.form.nota3, "Error. Las notas deben ser del 0 al 100"))
                                                    if (!notaInva(document.form.nota4, "Error. La notas deben ser del 0 al 100")) {
                                                        z++

                                                        let nota1 = parseInt(document.form.nota1.value);
                                                        let nota2 = parseInt(document.form.nota2.value);
                                                        let nota3 = parseInt(document.form.nota3.value);
                                                        let nota4 = parseInt(document.form.nota4.value);

                                                        let notasAlumno = (nota1 + nota2 + nota3 + nota4) / 4;
                                                        notas = notas + notasAlumno;

                                                        document.getElementById("nroSec").innerHTML = `<p>${x['numero']}</p>`;
                                                        document.getElementById("nombreCurso").innerHTML = `<p>${x['cursos']}</p>`;

                                                        let prom = x.calcProm(notas, z);
                                                        document.getElementById("promSec").innerHTML = `<p>${prom}</p>`;

                                                        let fila = tabla.insertRow(-1);

                                                        let celda = fila.insertCell(-1);
                                                        celda.innerHTML = document.form.nombre.value;

                                                        celda = fila.insertCell(-1);
                                                        celda.innerHTML = document.form.cedula.value;

                                                        celda = fila.insertCell(-1);
                                                        celda.innerHTML = document.form.nota1.value;

                                                        celda = fila.insertCell(-1);
                                                        celda.innerHTML = document.form.nota2.value;

                                                        celda = fila.insertCell(-1);
                                                        celda.innerHTML = document.form.nota3.value;

                                                        celda = fila.insertCell(-1);
                                                        celda.innerHTML = document.form.nota4.value;

                                                        celda = fila.insertCell(-1);
                                                        celda.innerHTML = prom;

                                                        //Objetivo 5
                                                        Cookies.set('seccion', JSON.stringify(alumnosSec))
                                                    }
    });
    //Objetivo 5
    btnEliminar.addEventListener("click", function () {
        let f = document.form;
        f.reset();

        document.getElementById("nroSec").innerHTML = ""
        document.getElementById("nombreCurso").innerHTML = ""
        document.getElementById("promSec").innerHTML = ""

        for (let i = tabla.rows.length - 1; i >= 1; i--) {
            tabla.deleteRow(i);
        }
    });
}

window.addEventListener("load", function () {
    document.form.nombre.addEventListener("input", function (e) {
        soloTexto(this, "[a-z ]")
    });
    document.form.cedula.addEventListener("keypress", soloNumeros, false);
    document.form.sec.addEventListener("keypress", soloNumeros, false);
    document.form.nota1.addEventListener("keypress", soloNumeros, false);
    document.form.nota2.addEventListener("keypress", soloNumeros, false);
    document.form.nota3.addEventListener("keypress", soloNumeros, false);
    document.form.nota4.addEventListener("keypress", soloNumeros, false);
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