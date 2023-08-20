function inverterNum() {

    var valor = window.prompt("Digite um valor de três digitos:")

    unidade = valor % 10
    dezena = Math.trunc((valor % 100) / 10)
    centena = Math.trunc(valor / 100)
    novo = (unidade * 100) + (dezena * 10) + centena

    document.write(`O valor, quando invertido, fica: ${novo}`)
}

inverterNum()