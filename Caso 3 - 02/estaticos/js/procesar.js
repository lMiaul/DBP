document.getElementById("ValidarFormulario").addEventListener('submit',function(evt){

    evt.preventDefault();
    let p1 = parseFloat(document.getElementById("_p1").value).toFixed(2);
    let p2 = parseFloat(document.getElementById("_p2").value).toFixed(2);
    let p3 = parseFloat(document.getElementById("_p3").value).toFixed(2);
    let mess;
    let PF = parseFloat(p1*0.2 + p2*0.35 + p3*0.45).toFixed(2);

    if(PF >= 13.0){
        mess = "aprobado.";
    }
    else{
        mess = "desaprobado.";
    }

    document.getElementById("resultado").value = "La nota final es " + PF +
                                                ", por lo cual usted está " + mess + "\n"; 

},false);