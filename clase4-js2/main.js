let timeOut;
let n=0;
const TIEMPO = 15;
window.onload=()=>{
    setTimeout(()=>{
        document.bgColor="yellow"
    },10000)
    setInterval(()=>{
        n++;
        document.title = "quedan "+(TIEMPO - n)+" segundos"
        if (n == 15)
            location="http://google.com"
    },1000)
    document.datos.pais.selectedIndex=-1
    document.datos.correo.onblur = ()=>{
        if (document.datos.correo.value=="")
            document.datos.correo.style.background="red"
        else
            document.datos.correo.style.background="white"
    }
    document.datos.edad.onkeydown = ()=>{
        console.log("keydown: "+event.keyCode)
        console.log(event.target.value)
        if (event.keyCode>=96 && event.keyCode<=105)
            return true;
        if (event.keyCode>=48 && event.keyCode<=57)
            return true;
        if (event.keyCode==8)
            return true;

        let caracter=String.fromCharCode(event.keyCode)
        
        if ("&%=?¡¿!#\"/*-@ .-,".indexOf(caracter)!=-1)
            return false;
    }
    document.datos.edad.onkeypress = ()=>{
        console.log("keypress: "+event.keyCode)
        console.log(event.target.value)
    }
    document.datos.edad.onkeyup=()=>{
        console.log("keyup: "+event.keyCode)
        console.log(event.target.value)
    }
    document.datos.btnRegistrar.onclick=()=>{
        let rx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!rx.test(document.datos.correo.value))
            alert("El correo es invalido")
        else
            if (document.datos.pais.selectedIndex==-1)
                alert("Debe seleccionar el pais")
            else
                if (numeroCheckMarcados("idioma")==0)
                    alert("Debe seleccionar al menos un idioma")
                else{
                    n=0;
                    alert("Ud vide en "+document.datos.pais.value+
                        " Y habla "+getValuesCheckboxes("idioma"))
                }
    }
}

function getValuesCheckboxes(nombre){
    let values=[];
    let inputs=document.getElementsByName(nombre)
    for (let i=0;i<inputs.length;i++)
        if (inputs[i].checked)
            values.push(inputs[i].value)

    return values;
}

function numeroCheckMarcados(nombre){
    let n=0;
    let inputs=document.getElementsByName(nombre)
    for (let i=0;i<inputs.length;i++)
        if (inputs[i].checked)
            n++;

    return n;
}