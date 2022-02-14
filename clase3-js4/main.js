
$(document).ready(()=>{
    let url="http://www.omdbapi.com/?apikey=7a711b58&s=";
    let pagina=1;
    let esperandoRespuesta=false;

    $("#resultados").hide()
    $("#loading").hide();
    $(document).on("scroll",()=>{
        let dif=document.documentElement.scrollHeight - window.pageYOffset;
        // scroll "infinito". Se verifica si el scroll esta 
        // cerca del fondo de la pagina
        if (dif < 800 && esperandoRespuesta==false){
            esperandoRespuesta=true;
            pagina++
            consultarPeliculas(pagina)
        }
    })
    $("#busqueda").keypress(()=>{
       //console.log(event)
       if (event.charCode == 13){
            $("#loading").show();
            $("#listado").empty()
            consultarPeliculas(1)
       }
    }) 

    function consultarPeliculas(pagina){
        $.getJSON(url+$("#busqueda").val()+"&page="+pagina,(resp)=>{
            esperandoRespuesta=false;
            $("#loading").hide();
            $("#resultados").show()
            if (pagina==1 && resp.totalResults == undefined){
                $("#listado").text("No hay resultados")
            }else{
                for (let i=0;i<resp.Search.length-1;i++){
                    if (resp.Search[i].Poster != "N/A")
                        $("#listado").append("<img src='"+resp.Search[i].Poster+"' />")
                    $("#listado").append("<p>"+resp.Search[i].Title+"</p>")
                }
                $("#cantidad").text(resp.totalResults);
            }
        })
        .fail(()=>{
            $("#loading").hide();
            $("#resultados").show();
            $("#listado").text("Error de comunicacion")
        })
    }

})