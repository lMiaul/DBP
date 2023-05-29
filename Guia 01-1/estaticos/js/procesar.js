document.getElementById("price").focus();/*que es focus*/ /*Poner la barra para escribir en una caja*/
/*Traer todos los valores de las cajas a variables*/
var pri  = document.getElementById("price");
var num = document.getElementById("number");

function sumar(a ,b){
    return a+b;
}
function restar(a, b){
    return a-b;
}
function multiplicacion(a, b){
    return a*b;
}

function procesar(){
    /*parseLoquequieras(variable.value)*/ 
    var priAux = parseFloat(pri.value);
    var numAux = parseFloat(num.value);

    /*NaN significa Not a Number*/
    /*value es para mostrar lo que esta dentro de la variable*/
    
    var IC = multiplicacion(priAux, numAux).toFixed(2);
    var discount = multiplicacion(IC, 0.15).toFixed(2);
    var IP = restar(IC, discount).toFixed(2);

    document.getElementById("text").innerHTML = "Importe de la compra: S/ " + IC + "<br>"
                                                +"Importe de descuento: S/ "+ discount + "<br>"
                                                +"Importe a pagar: S/ " + IP + "<br>";
    return false;
}