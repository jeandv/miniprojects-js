let cartas = document.querySelectorAll('.carta');

let cartaInvertida = false;
let bloqCarta = false;
let primeraCarta, segundaCarta;
let cont = 0;

//Objetivo 1
function InverCarta() {

    if (bloqCarta) return;
    if (this === primeraCarta) return;

    this.classList.add('flip');

    if (!cartaInvertida) {
        cartaInvertida = true;
        primeraCarta = this;
        return;
    }

    segundaCarta = this;
    bloqCarta = true;

    cartasIguales()
}

//Objetivo 2
function cartasIguales() {

    let coincidenCartas = primeraCarta.dataset.name === segundaCarta.dataset.name;

    if (coincidenCartas) {
        //Objetivo 3
        cont++
        $('#contador').text('contador: ' + cont + '/8');
        $('#acierto').text('Acertaste!');
        cartasDisab();
    } else {
        $('#acierto').text('Fallaste!');
        cartasNoInver();
    }
    //Objetivo 4
    if (cont == 8) {
        $('#btnJugar').hide();
        $('#win').text('haz ganado!');

        finDelJuegoTiempo();
    }
}

function cartasDisab() {
    primeraCarta.removeEventListener('click', InverCarta);
    segundaCarta.removeEventListener('click', InverCarta);

    resetTabla();
}

function cartasNoInver() {
    setTimeout(() => {
        primeraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');

        resetTabla();
    }, 800);
}

function resetTabla() {
    cartaInvertida = false;
    bloqCarta = false;
    primeraCarta = null;
    segundaCarta = null;
}

(function randomPosicionCartas() {
    cartas.forEach(cartas => {
        let ramdomPos = Math.ceil(Math.random() * 12);
        $(cartas).css('order', ramdomPos);
    });
})();

//Objetivo 5 falto comparar y actualizar local storage 
function iniciarTiempoJuego() {
    cronometrar = true;
}

function finDelJuegoTiempo() {
    cronometrar = false
    let tiempoJugadorActual = $('#tiempo').text();

    localStorage.setItem("tiempo", JSON.stringify(tiempoJugadorActual));
}

let tiempoRef = Date.now()
let cronometrar = false;
let acumulado = 0;

setInterval(() => {
    let tiempo = document.getElementById("tiempo");
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef;
    }
    tiempoRef = Date.now();
    tiempo.innerHTML = tiempoEnMs(acumulado);
}, 1000 / 60);

function tiempoEnMs(tiempoMs) {
    let MS = tiempoMs % 1000;
    let S = Math.floor(((tiempoMs - MS) / 1000) % 60);
    let M = Math.floor((S / 60) % 60);
    let H = Math.floor((M / 60));

    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0);
    }
    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2) + "." + MS.ceros(3);
}

$('document').ready(function () {
    $('#btnJugarDeNuevo').hide();
    
    $('#btnJugar').on("click", function () {
        iniciarTiempoJuego()
        //Objetivo 1
        cartas.forEach(cartas => cartas.addEventListener('click', InverCarta));
    });
});