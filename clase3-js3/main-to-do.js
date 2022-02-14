
function agregarPendiente(pendiente){
    let pendientes=document.getElementById("lista-pendientes");
    let hijo=document.createElement("li");
    hijo.innerText=pendiente
    pendientes.appendChild(hijo)
}

// es equivalente a window.onload = function (){}
$(document).ready( function(){
    let arrPendientes = [];
    // se intenta leer la cookie
    let cookiePendientes = sessionStorage.getItem('lista-pendientes');
    if (cookiePendientes != undefined){
        try{
            // se convierte la cookie en un objeto
            arrPendientes = JSON.parse(cookiePendientes);
            console.log(arrPendientes);
            // se muestran los valores leidos de la cookie en la lista visible
            for (let i=0;i<arrPendientes.length;i++)
                agregarPendiente(arrPendientes[i])
        }catch(e){
            console.log("error al leer la lista de pendientes guardada")
        }
    }

    document.f.btnAgregar.onclick=function(){
        let pendiente=document.f.pendiente.value
        if (pendiente!=""){
            agregarPendiente(pendiente);
            arrPendientes.push(pendiente);
            sessionStorage.setItem('lista-pendientes',JSON.stringify(arrPendientes));
            document.f.pendiente.value=""
        }
    }

})