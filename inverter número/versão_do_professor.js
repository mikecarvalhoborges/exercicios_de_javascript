function inverteNum(num) {
    
    var inverso = 0

    while(num != 0) // Enquanto o parâmetro "num" não receber "0"
    {
        inverso = inverso * 10 // a variável "inverso" é multiplicada por 10
        inverso = inverso + num % 10 // a variável "inverso" recebe o seu valor somado ao resto da divisão do parâmetro "num" + 10. 
        
        // Qualquer número dividido por 10 terá como resto o último digito do número.

        num = Math.trunc(num / 10) // Remover casas decimais entre a divisão de "num" por 10
    }
    return inverso;
}

document.write(inverteNum(875))
