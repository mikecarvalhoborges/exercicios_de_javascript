function numeroPrimo(){
    var numero = parseInt(prompt(""))

    divisores = 0

    for (contador = 1; contador <= numero; contador++){
        if (numero % contador == 0) {
            divisores++
        }
    }

    if (divisores == 2) {
        alert("O número é primo.")
    } else {
        alert ("O número não é primo.")
    }
}

numeroPrimo()