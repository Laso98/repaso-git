function ejerciciosNivelOneJs() {
    var x = document.getElementById("divOne");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function viewOperacionesBasicas1() {
    var x = document.getElementById("operacionesBS1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


setTimeout(() => console.log('esta mensaje aparecera en 2 segundos'), 2000);
setTimeout(() => lloverSobreMojado(), 3000);



function sumaDosNumeros(formSuma) {
    var message = "";
    if (formSuma.numero1.value  == ""){
        message += "Ingrese el primer numero  \n";
    }
    if (formSuma.numero2.value  == ""){
        message += "Ingrese el segundo numero ";
    }
    if (message == ""){
        var suma = parseInt(formSuma.numero1.value) + parseInt(formSuma.numero2.value)
        alert("La suma de los dos numero es : " + suma);
        return true;
    }else{
        alert("Error al realizar la operacion: \n" + message);
        return false;
    }

}

function restaDosNumeros(formResta) {
    var message = "";
    if (formResta.numero1.value  == ""){
        message += "Ingrese el primer numero  \n";
    }
    if (formResta.numero2.value  == ""){
        message += "Ingrese el segundo numero ";
    }
    if (message == ""){
        var resta = parseInt(formResta.numero1.value) - parseInt(formResta.numero2.value)
        alert("La resta de los dos numero es : " + resta);
        return true;
    }else{
        alert("Error al realizar la operacion: \n" + message);
        return false;
    }
}

function lloverSobreMojado() {
    var cont = 0;
    const llueve = () => Math.random() < 0.25;
    do {
        cont++
    } while (!llueve());
    console.log('Hoy llovio ' + cont + ' veces en la T');
}