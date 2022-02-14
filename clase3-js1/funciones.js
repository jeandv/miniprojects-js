
function leerNotas(){
    let acum=0;
    for (let i=1;i<=3;i++){
        let valido=false;
        do
        {
            nota = prompt("Nota "+i+": ");
            nota = parseInt(nota);
            if (isNaN(nota))
                alert("Error. Valor numerico invalido")
            else 
                if (nota<0 || nota >20)
                    alert("valor fuera de rango. El valor valido es de 0 a 110");
                else
                    valido=true;
        }while (!valido);
        acum+=nota;
    }
    promedio=acum/3;
}

function leerNombre(){
    let valido = false;
    do {
        nombre = prompt("Nombre: ")
        if (nombre == null)
            alert("El nombre es obligatorio");
        else
            // objetivo 3
            if (nombre.trim().length < 3)
                alert("Nombre debe tener al menos 3 caracteres");
            else
                valido = true;
    } while (valido == false); // while(!valido)
}

function leerEdad(){
    let valido=false;
    do
    {
        edad = prompt("Edad: ");
        edad = parseInt(edad);
        if (isNaN(edad))
            alert("Error. Valor numerico invalido")
        else 
            if (edad<0 || edad >=110)
                alert("valor fuera de rango. El valor valido es de 0 a 110");
            else
                valido=true;
    }while (!valido);
}