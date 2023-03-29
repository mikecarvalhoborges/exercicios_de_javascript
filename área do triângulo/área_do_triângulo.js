/*lados do triângulo*/
var a = 5;
var b = 6;
var c = 7;

/*perímetro do triângulo*/
var perimetro = a + b + c;

/*fórmula de Heron para cálculo de área de triângulo escaleno*/
var area = (perimetro * (perimetro - a) * (perimetro - b) * (perimetro - c)) ** 0.5

/*escrevendo a solução na tela com apenas duas casas decimais*/
document.write(area.toFixed(2))