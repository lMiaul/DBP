document.getElementById("hours").focus();

/*Traer los valores del documento*/
var hour = document.getElementById("hours");
var rate = document.getElementById("rate"); //rate = tarifa

function restar(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

function calcular(){
    /*parsear las variables*/
    var hourAux = parseFloat(hour.value);
    var rateAux = parseFloat(rate.value);

    /*hallar el sueldo bruto*/
    var SB = multiplicacion(hourAux, rateAux).toFixed(2);

    /*hallar el descuento*/
    var D = multiplicacion(SB, 0.15).toFixed(2);

    /*hallar el sueldo neto*/
    var SN = restar(SB, D).toFixed(2);

    document.getElementById("text").innerHTML = "Sueldo bruto: S/" + SB + "<br>"
                                               +"Descuento: S/" + D + "<br>"
                                               +"Sueldo neto: S/" + SN + "<br>";
    return false;
}