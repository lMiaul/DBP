document.getElementById("price").focus();
/*Traer todas las variables*/
var pri = document.getElementById("price");
var num = document.getElementById("tickets");
var cand = 0;

function restar(a, b){
    return a-b;
}
function multiplicacion(a, b){
    return a*b;
}

function calcular(){
    /*variables auxiliares y parseVariable*/
    var priAux = parseFloat(pri.value);
    var numAux = parseFloat(num.value);

    var IC = multiplicacion(priAux, numAux).toFixed(2);
    var discount = multiplicacion(IC, 0.07).toFixed(2);
    var IP = restar(IC, discount).toFixed(2);
    var cand = multiplicacion(numAux, 3);

    document.getElementById("text").innerHTML = "Importe de compra: S/" + IC + "<br>"
                                               +"Importe de descuento: S/" + discount + "<br>"
                                               +"Importe de venta: S/" + IP + "<br>"
                                               +"Número de chocolates: " + cand;

    return false;
}

