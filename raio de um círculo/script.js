
function raio(){
    
    var r = window.prompt("diga o raio do seu círculo: ");

    window.alert("O valo do raio é de: " + r);

    var p = 2 * Math.PI * r;

    window.alert("O valor do perímetro é: " + p.toFixed(2).replace('.',','));

    var a = Math.PI * (r ** 2);
    
    window.alert("O valor da área é: " + a.toFixed(2).replace('.',','));
}

raio();


