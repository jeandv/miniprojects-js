
function numeroAleatorio(min,max){
    let valor;
    if (min<max)
        valor= Math.random()*(max-min)+min;
    else
        valor= Math.random()*(min-max)+max;

    return Number(valor.toFixed(2))
}

function determinarEstatus(des,exa){
    if (des>=80 && exa>=80)
        return true;
    else
        return false;
}

let cedulas=["19.591.449","25.145.158","30.004.187","27.025.604",
            "24.397.188","32.149.142","27.746.977"];
let nombres=["Jose M.","Juan Jose","Jean Antony","Daniel",
            "Danieli","Karles","Jesus"]

window.onload=()=>{
   
    let tabla=document.getElementById("datos")

    for (i=0;i<nombres.length;i++){
        let fila=tabla.insertRow(-1);
        let celda=fila.insertCell(-1);
        celda.innerHTML=cedulas[i];
        celda=fila.insertCell(-1);
        celda.innerHTML=nombres[i];
        celda=fila.insertCell(-1);
        
        let desafios=numeroAleatorio(50,100);
        celda.innerHTML=desafios;
        celda=fila.insertCell(-1);
        let examen=numeroAleatorio(50,100);
        celda.innerHTML=examen;
        celda=fila.insertCell(-1);
        if (determinarEstatus(desafios,examen))
            celda.innerHTML="Aprobado";
        else{
            celda.innerHTML="Reprobado";
            fila.style.backgroundColor="yellow"
        }
    }

    let btnAgregar = document.getElementsByName("btn-agregar")[0]
    btnAgregar.onclick=()=>{
        if (!estaVacio(document.form1.cedula,"Falta la cedula"))
            if (!estaVacio(document.form1.nombre,"Falta el nombre"))
                if (!estaVacio(document.form1.desafios,"Falta la nota de los desafios"))
                    if (!estaVacio(document.form1.examen,"Falta la nota del examen")){
                        let fila=tabla.insertRow(-1);
                        
                        let celda=fila.insertCell(-1);
                        celda.innerHTML=document.form1.cedula.value;
                        
                        celda=fila.insertCell(-1);
                        celda.innerHTML=document.form1.nombre.value;

                        celda=fila.insertCell(-1);
                        let desafios=document.form1.desafios.value;
                        celda.innerHTML=desafios;

                        celda=fila.insertCell(-1);
                        let examen=document.form1.examen.value;
                        celda.innerHTML=examen;
                        
                        celda=fila.insertCell(-1);
                        if (determinarEstatus(desafios,examen))
                            celda.innerHTML="Aprobado";
                        else{
                            celda.innerHTML="Reprobado";
                            fila.style.backgroundColor="yellow"
                        }
                        document.form1.reset();
                        document.form1.cedula.focus()
                    }
    }

    let boton=document.getElementById("btn-valores")
    boton.onclick = ()=>{
        
        for (let i=1;i<tabla.rows.length;i++){
            let desafios=numeroAleatorio(50,100);
            tabla.rows[i].cells[2].innerHTML=desafios
            let examen=numeroAleatorio(50,100);
            tabla.rows[i].cells[3].innerHTML=examen
            if (determinarEstatus(desafios,examen))
                tabla.rows[i].cells[4].innerHTML="Aprobado";
            else
                tabla.rows[i].cells[4].innerHTML="Reprobado";
        }
    }
}

function estaVacio(input,mensajeError){
    if (input.value.trim().length == 0 ){
        alert(mensajeError)
        input.focus()
        return true
    }else
        return false
}