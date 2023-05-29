document.getElementById("amount").focus();
/*Traer variables del documento*/
var impTotal = document.getElementById("amount");
var wageBas = parseFloat(350.75);

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

function calcular(){
    var impTotalAux = parseFloat(impTotal.value);

    /*Hallar importe*/
    var comission = parseFloat(multiplicacion(impTotalAux, 0.05).toFixed(2));
    var SB = impTotalAux + comission + wageBas;
    var discount = parseFloat(multiplicacion(SB, 0.15).toFixed(2));
    var SN = restar(SB, discount).toFixed(2);
    document.getElementById("text").value = "Sueldo básico: S/" + wageBas + "\n"
                                               +"Comisión : S/" + comission + "\n"
                                               +"Sueldo bruto: S/" + SB + "\n"
                                               +"Descuento: S/" + discount + "\n"
                                               +"Sueldo neto: S/" + SN + "\n";
    return false;
}