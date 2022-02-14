
$(document).ready(()=>{
    $("#btnIniciar").click(()=>{
        // se valida el formulario antes de enviar
        // se podria usar el metodo post si fuera requerido
        // por el backend
        let datosArr=$("#login-form").serializeArray();
        let datosStr=$("#login-form").serialize();

        console.log(datosArr);
        console.log(datosStr);

        $.get(
            "auth.php",
            datosArr)
        .done((resp)=>{
            $("#login-form").hide();
            $("#resp").html(resp)
        })
        .fail(()=>{
            $("#resp").html("error en la peticion")
        })
    })
})