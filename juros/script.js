function juros() {
    var capital = window.prompt("Qual a quantia você vai investir?")
    var tempo = window.prompt("Por quantos meses a quantia será guardada?")
    var juros = window.prompt("Informe a taxa de juros (%) mensal:")

    var montante = (capital * ((1 + tempo) ** (juros / 100))).toFixed(2).replace('.',',')

    window.alert(`O valor do retorno sobre o investimento será de R$${montante}.`)
}

juros()