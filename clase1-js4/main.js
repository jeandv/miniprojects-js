
$(document).ready(()=>{
    let ajaxImg = new XMLHttpRequest();
    let ajaxHtml = new XMLHttpRequest();
    let ajaxJson = new XMLHttpRequest();
    let ajaxUrl = new XMLHttpRequest();

    $("#btnUrl").click(()=>{
        console.log("click")
        
        ajaxUrl.open("GET","http://cadif1.com",true)
        ajaxUrl.send()
    })
    $("#btnJson").click(()=>{
        console.log("click")
        
        ajaxJson.open("GET","datos.json",true)
        ajaxJson.send()
    })
    ajaxJson.onreadystatechange = function(){

        if (this.readyState == 4){
            if (this.status == 404)
                console.log("Error. No existe");
            else
                if (this.status == 200){
                   let datos=JSON.parse(this.response);
                   console.log(datos)
                   document.title=datos.alumnos[0].nombre
                }
        }
    }
    $("#btnHtml").click(()=>{
        console.log("click")
        
        ajaxHtml.open("GET","archivo.html",true)
        ajaxHtml.send()
    })
    ajaxHtml.onreadystatechange = function(){

        if (this.readyState == 4){
            if (this.status == 404)
                console.log("Error. No existe");
            else
                if (this.status == 200)
                {
                   $("#respuesta").html(this.response)
                }
        }
    }
    $("#btnConsultar").click(()=>{
        console.log("click")
        
        ajaxImg.open("GET","excel.jpg",true)
        ajaxImg.send()
    })
    // cuando llega la respuesta del servidor
    ajaxImg.onreadystatechange = function(){
        console.log("llegando respuesta "+this.readyState)
        console.log("status:"+this.status)
        console.log(this)
        if (this.readyState == 4){
            if (this.status == 404)
                console.log("Error. No existe");
            else
                if (this.status == 200)
                {
                    console.log(this)
                    console.log("finalmente la respuest")
                    // this.response es el contenido 
                    // de la respuesta

                    $("#imagen").attr("src","excel.jpg")
                }
        }
    }
    // cuando hay errores de comunicacion con 
    // el servidor
    ajaxImg.onerror = ()=>{
        console.log("Error en la peticion")
    }
    // cuando hay conexion con el servidor
    // pero el tiempo de la respuesta tarda
    // mas de lo esperado por defecto
    ajaxImg.ontimeout = ()=>{
        console.log("se acabo el tiempo")
    }
})