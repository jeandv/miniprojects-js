function Alumno(nombre, cedula, nota1, nota2, nota3, nota4, promAl, promSeccion, numSec, nomSec) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
    this.promedioAlumno = promAl;
    this.promedioSeccion = promSeccion;
    this.numSec = numSec;
    this.nomSec = nomSec;
}

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

//Objetivo 1
let usuariosLogin = {
    "usuarios": [
        {
            "nombre": "Jean A. Rondon B.",
            "usuario": "jeanrn",
            "password": "#12345jr"
        },
        {
            "nombre": "Luis Rodriguez",
            "usuario": "luisrodriz",
            "password": "2003luis*"
        },
        {
            "nombre": "Marco Perez",
            "usuario": "marcopz",
            "password": "perez.98"
        },
        {
            "nombre": "Pablo Marquez",
            "usuario": "marquez2021",
            "password": "1122mar"
        },
        {
            "nombre": "Juan Pereira",
            "usuario": "juanpr10",
            "password": "pereira1999."
        }
    ]
};

//Objetivo 1
$('document').ready(function () {
    let loginValido = false;
    $('#datos').hide();
    $('#btnLogin').on('click', function () {
        for (let logueados of usuariosLogin.usuarios) {
            if ($('#usu').val() == logueados.usuario && $('#pass').val() == logueados.password) {
                alert("Se ha logueado correctamente");
                $('#login').hide();
                $('#datos').show();
                //objetivo 2
                cookieLogin($('#usu').val(), $('#pass').val());
                $('#usLog').text(`Usuario logueado: ${logueados.nombre}`);
                loginValido = true;
            }
        }
        if (loginValido == false) {
            alert("Error. Usuario o Contraseña invalido y/o no existen.");
        }
    });
})

window.onload = () => {
    let tabla = document.getElementById("tablaDatos");
    let btnEliminar = document.getElementById("ReiEliCookies");
    let alumnosSec = [];
    let notas = 0;
    let z = 0;
    let x;
    var f = document.form;
    //Objetivo 3
    let existeSeccionLocalSt = localStorage.getItem("seccion");
    if (existeSeccionLocalSt) {
        InsertarDatosTablaLocalSt(JSON.parse(localStorage.getItem("seccion")));
    } else {
        console.log("no existe alumno en el local storage para inicializar")
    }

    //Objetivo 2
    $('#logout').on('click', function () {
        alert("Se ha cerrado la sesión");
        Cookies.remove('usuario');
        location.reload();
        $('#datos').hide();
        $('#login').show();
    })

    //Objetivo 4
    let existLogin = Cookies.get('usuario');

    if (existLogin != undefined) {
        $('#login').hide();
        $('#datos').show();
    } else {
        $('#datos').hide();
        $('#login').show();
    }

    document.form.cedula.onkeydown = () => {
        for (let alumnosClase of alumnosBD.alumnos) {
            if (alumnosClase.cedula.indexOf(document.form.cedula.value) !== -1)
                document.form.nombre.value = alumnosClase.nombre;
        }
    };

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
                                                        z++

                                                        let numeroSec = document.form.sec.value;
                                                        let nombreCrs = document.form.crs.value;

                                                        let nota1 = parseInt(document.form.nota1.value);
                                                        let nota2 = parseInt(document.form.nota2.value);
                                                        let nota3 = parseInt(document.form.nota3.value);
                                                        let nota4 = parseInt(document.form.nota4.value);

                                                        let notasAlumno = (nota1 + nota2 + nota3 + nota4) / 4;
                                                        notas = notas + notasAlumno;

                                                        x = new Seccion(alumnosSec);

                                                        let prom = x.calcProm(notas, z);

                                                        let a = new Alumno(
                                                            document.form.nombre.value,
                                                            document.form.cedula.value,
                                                            document.form.nota1.value,
                                                            document.form.nota2.value,
                                                            document.form.nota3.value,
                                                            document.form.nota4.value,
                                                            notasAlumno.toString(),
                                                            prom.toString(),
                                                            numeroSec.toString(),
                                                            nombreCrs.toString()
                                                        )
                                                        alumnosSec.push(a);
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

                                                        Cookies.set('seccion', JSON.stringify(x))

                                                        //Objetivo 3
                                                        localStorage.setItem("seccion", JSON.stringify(x));
                                                        let alumnoRegistrado = JSON.parse(localStorage.getItem("seccion"));

                                                        insertarDatosTabla(alumnoRegistrado);
                                                    }
    });

    btnEliminar.addEventListener("click", function () {
        f.reset();

        for (let i = tabla.rows.length - 1; i >= 1; i--) {
            tabla.deleteRow(i);
        }

        Cookies.remove('seccion');
    });

    //Objetivo 3
    function insertarDatosTabla(alumnoRegistrado) {

        let fila = tabla.insertRow(-1);

        let celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].nombre;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].cedula;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].nomSec;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].numSec;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].nota1;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].nota2;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].nota3;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].nota4;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].promedioAlumno;

        celda = fila.insertCell(-1);
        celda.innerHTML = alumnoRegistrado.alumnos[alumnoRegistrado.alumnos.length - 1].promedioSeccion;
        //Objetivo 5
        celda = fila.insertCell(-1);
        celda.innerHTML = `<button id="borrar">Eliminar</button>`;
    }
    //Objetivo 3
    function InsertarDatosTablaLocalSt(alumnoYaRegistrado) {

        let alumnoYaReg = alumnoYaRegistrado.alumnos;
        let i = alumnoYaReg.values();
        for (let t of i) {

            let fila = tabla.insertRow(-1);

            let celda = fila.insertCell(-1);
            celda.innerHTML = t.nombre;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.cedula;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.nomSec;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.numSec;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.nota1;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.nota2;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.nota3;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.nota4;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.promedioAlumno;

            celda = fila.insertCell(-1);
            celda.innerHTML = t.promedioSeccion;
            //Objetivo 5
            celda = fila.insertCell(-1);
            celda.innerHTML = `<button id="borrar">Eliminar</button>`;
        }
    }
}

//Objetivo 2
function cookieLogin(us, pass) {
    let usuarioLogueado = [us, pass];
    Cookies.set('usuario', JSON.stringify(usuarioLogueado));
}

//Objetivo 5
$(document).on('click', '#borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});

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
        alert(m);
        i.focus();
        return true;
    } else
        return false;
}

function notaInva(i, m) {
    if (i.value < 0 || i.value > 100) {
        alert(m);
        i.focus();
        return true;
    } else
        return false;
}