// criação das variáveis que serão responsáveis pela soma dos elementos da sequência
let numA = 0
let numB = 1
let numC = 0
let fibonacci = " "
// variável fibonacci recebe os dois primeiros números da sequência e um espaço entre eles
fibonacci += numA + " " + numB
// função, utilizando o loop for, que vai utilizar as variáveis numA e numB, somá-las e adicioná-las à variável numC, rodando 7 vezes, pois o contador começa no 1 
for (contador = 1; contador <= 8; contador++) {
// numC recebe a soma inicial das variáveis numA e numB (0 + 1 = 1)    
    numC = numA + numB
// variável fibonacci, que já recebeu os números de numA e numB, adiciona a variável numC ao seu grupo que, repetindo-se, irá sempre aumentar seu conjunto    
    fibonacci += " " + numC
// numA virando numB e numB virando numC, a sequência de fibonacci poderá ser executada, pois sempre numA e numC irão ser somados conforme aumentando a sequência    
    numA = numB
    numB = numC
}
// varíavel é chamada para mostrar no log o resultado
console.log(fibonacci)