function temperatura() {
    var temp = window.prompt("Qual a temperatura em graus Fahrenheit?")

    var cels = ((temp - 32) * 5) / 9

    window.alert(`Essa temperatura, em graus Celsius, é ${cels.toFixed(2)}°C.`)
}

temperatura()