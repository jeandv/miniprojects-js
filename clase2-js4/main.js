
$(document).ready(()=>{
    
    $("#loading").hide();
    
    $("#btnLoadScript").click(()=>{
        // cargar en memoria un archivo JS en tiempo de ejecucion
        $.getScript("script.js",()=>{
            saludar()
        })
        .fail((resp)=>{
            console.log(resp)
        })
    })
    $("#btnLoadHtml").click(()=>{
        //saludar();
        $("#html").hide();
        $("#loading").show();
        $("#html").load("practica.html",(a,b,c)=>{
            $("#html").show()
            if (b == "error"){
                $("#html").html("<p>Error al cargar el contenido</p>")
            }
            $("#loading").hide();
            console.log("se completo la peticion")
        })
        
    })
    $("#btnCargarHtml").click(()=>{
        console.log("click de boton cargar")
        $.ajax({
            url:"practica.html",
            type:"GET",
            success: function(resp){
                console.log(resp)
                $("#html").html(resp)
            },
            error: function(resp){
                console.log("error en la peticion")
                console.log(resp)
                if (resp.status == 404)
                    console.log("No existe el archivo")
            },
            complete: function(){
                console.log("se completo la peticion")
            }
        })
    })
    $("#btnGetJson").click(()=>{
        // cargar en memoria un archivo JS en tiempo de ejecucion
        $.getJSON("datos.json",(resp)=>{
            $("#json").empty()
            $("#json").append("<h2>Curso: "+resp.curso+"</h2>")
            $("#json").append("<h2>Asesor: "+resp.asesor.nombre+"</h2>")
        })
        .fail((resp)=>{
            console.log("ocurrio un error en la peticion")
            console.log(resp)
        })
    })
    $("#btnCargarJson").click(()=>{
        $.ajax({
            url:"datos.json",
            type:"GET",
            dataType:"JSON",
            success: function(resp){
                console.log(resp)
                $("#json").empty()
                $("#json").append("<h2>Curso: "+resp.curso+"</h2>")
                $("#json").append("<h2>Asesor: "+resp.asesor.nombre+"</h2>")
            },
            error: function(resp){
                console.log("error en la peticion")
                if (resp.status == 404)
                    console.log("No existe el archivo")
                console.log(resp)
            }
        })
    })
})