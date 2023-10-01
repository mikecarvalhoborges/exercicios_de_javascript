// o método charAt retorna o caractere especificado a partir de uma string.

function contadorCaracteres(texto, letra) {

    var cont = 0
    texto = texto.toLowerCase(); //Coloca texto em minúsculas

    for (var i = 0; i < texto.length; i++) { //enquanto o i for menor que o comprimento do texto, ele irá incrementar o seu valor até ter o mesmo tamanho dele

        if (texto.charAt(i) == letra) { // o i terá o número exato do caractere que será analisado para verificar se é a letra especificada no parâmetro

            cont++ //Incrementa contagem
        }
    }
    return cont
}

document.write(contadorCaracteres("JavaScript", "a"))