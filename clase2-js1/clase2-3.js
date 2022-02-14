mes=Math.floor(Math.random()*(12)+1);
console.log(mes)
switch(mes){
    case 1:;
    case 12:;
    case 11:
        console.log("invierno");
        break;
    case 2:;
    case 3:;
    case 4:
        console.log("primavera");
        break;
    case 5:;
    case 6:;
    case 7:
        console.log("verano");
        break;
    case 8:;
    case 9:;
    case 10:
        console.log("otoño");
        break;
    default:
        console.log("mes invalido");
}
if (!(mes>=1 && mes<=12))
    console.log("mes invalido");
else
    if (mes >=2 && mes<=4)
        console.log("primavera");
    else
        if (mes>=5 && mes<=7)
            console.log("verano");
        else
            if (mes>=8 && mes<=10)
                console.log("otoño");
            else
                console.log("invierno");