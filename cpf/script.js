function pontinho(){
    var cpf = document.getElementById('cpf') /* pega o input CPF pelo ID */

    if(cpf.value.length == 3 || cpf.value.length == 7){ /* se o número do comprimento do cpf estiver igual a 3, ou se o número do comprimento do cpf estiver igual a 7, adicione um ".".*/
        cpf.value += "."
    } else if(cpf.value.length == 11){ /* senão, se o número do comprimento do cpf estiver igual a 11, adicione um "-"*/
        cpf.value += "-"
    }
}