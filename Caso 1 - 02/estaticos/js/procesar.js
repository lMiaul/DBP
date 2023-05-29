document.getElementById("procesar").addEventListener('click',function(){
    let pri = parseFloat(document.getElementById("price").value);
    let num = parseInt(document.getElementById("number").value);
    let IC = pri * num;
    let discount;
    let men;
    let IP;

    if(num > 10){
        discount = IC*0.15;
    }
    else{
        discount = IC*0.05;
    }

    IP = IC - discount;

    if(IP > 200){
        men = "Si, una agenda.";
    }
    else{
        men = "No, pero para la próxima será.";
    }

    document.getElementById("resultado").value = "El importe de compra es: S/" + IC + "\n"
                                                +"El importe de descuento es: S/." + discount + "\n"
                                                +"El importe a pagar es: S/." + IP + "\n"
                                                +"Ganaste un regalo? " + men + "\n";
},false);