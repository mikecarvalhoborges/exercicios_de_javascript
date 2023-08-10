function temperatura() {
    var temp = window.prompt("Qual a temperatura em graus Celsius?")

    var fahr = ((9 * temp) / 5) + 32

    window.alert(`Essa temperatura, em graus Fahrenheit, é ${fahr}°F.`)
}

temperatura()