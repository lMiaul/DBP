document.getElementById("procesar").addEventListener('click', function(){
    let tar = parseFloat(document.getElementById("fee").value);
    let hour = parseFloat(document.getElementById("hours").value);
    let SB = tar * hour;
    let discount, SN;

    if(SB > 3500){
        discount = SB*0.15;
    }
    else{
        discount = SB*0.11; 
    }

    SN = SB - discount;

    document.getElementById("resultado").value = "El sueldo bruto es: S/" + SB + "\n"
                                                +"El descuento es: S/" + discount + "\n"
                                                +"El sueldo neto es: S/" + SN + "\n";
},false);