function fatorial(num) { // o num é o parâmetro que vai ser usado no final do código para dizer qual número iremos querer que a função utilize
    var soma = 1

    if(Number.isInteger(num) == true) {
        while(num > 0) {
            soma = soma * num
            console.log(num)
            num--
        }
        return soma
    }
    else {
        alert("O parâmetro não é um número inteiro.")
        return 0
    }
}

console.log(fatorial(5))