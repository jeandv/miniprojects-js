
$(document).ready( function(){

    $("#div-datos-productos").hide();

    console.log("esto es equivalente al onload")

    $("#calcular").click(()=>{
        $("#div-datos-productos").show();
        let monto = $("[name='monto']").val();
        let iva = monto*0.16;

        $("[name='iva']").val(iva);
        $("#productos").append("<li>"+monto+"</li>")
    })

})