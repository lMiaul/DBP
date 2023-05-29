document.getElementById("procesar").addEventListener('click', function(){
    let num = parseFloat(document.getElementById("number").value);

    let PC = num * 11000;
    let discount, PV;

    if(num < 5){
        discount = PC * 0.1;
    }
    else if(num >= 5 && num < 10){
        discount = PC*0.2; 
    }
    else if(num >= 10){
        discount = PC*0.4; 
    }

    PV = PC - discount;

    document.getElementById("resultado").value = "El precio de compra es: S/" + PC + "\n"
                                                +"El descuento es: S/" + discount + "\n"
                                                +"El precio de venta es: S/" + PV + "\n";
},false);