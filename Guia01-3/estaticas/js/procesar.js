document.getElementById("price").focus();
/*Traer los valores del documento*/
var pri = document.getElementById("price");
var num = document.getElementById("quantity");

function restar(a, b){
    return a-b;
}

function multiplicacion(a, b){
    return a*b;
}

function calcular(){
    /*Variables auxiliares*/
    var priAux = parseFloat(pri.value);
    var numAux = parseInt(num.value);

    var IC = multiplicacion(priAux, numAux).toFixed(2);
    var firDiscount = multiplicacion(IC, 0.10);
    var secDiscount = multiplicacion(IC - firDiscount, 0.1);

    var ID = (firDiscount + secDiscount).toFixed(2);
    var IP = restar(IC, ID);
    document.getElementById("text").innerHTML = "Importe de compra: S/" + IC + "<br>"
                                               +"Imporde de descuento: S/." + ID + "<br>"
                                               +"Importe de venta: S/." + IP + "<br>";
    return false;
}