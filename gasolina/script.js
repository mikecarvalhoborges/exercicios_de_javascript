function gasolina(){
    var din = window.prompt("Qual a quantia que você possui?")

    /* 1 litro = R$ 5,00 */
    var litro = din / 5

    /* 20Km = 1 litro */
    var km = litro * 20

    window.alert(`A quantidade de litros que você poderá comprar é ${litro} litros.`)
    window.alert(`Com essa quantia, o seu carro irá andar ${km}Km.`)
}

gasolina()



