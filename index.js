// var output = document.querySelector("#output");
// var menssagem ="";

// function mostrarTabuada(){
//     var numero = parseInt(prompt("Digite um numero: "));
//     for (var i = 0; i<=100; i++) {
//       //menssagem += numero + "x" + i + "=" + numero *i +"<BR>";
//       menssagem            =          menssagem +                                                 (numero +"x"+ i + "=" + (numero*i)+ "<br>"); 
//     //aqui ele cria a variavel      //aqui é onde vai ficar o resultado do comando anterior     //aqui é onde ele vai execultar o comando de tabuada.

//     }

//     //mostra menssagem no output
//     output.innerHTML = menssagem; 
// }

//mini calculadora 1.0

var tela = document.querySelector("#tela");
var numero = parseInt(prompt("Digite o numero a ser calculado: "));
var resultado, numero2, numero3 = "";


function mostrarValor() {
    tela.innerHTML = numero;
}

mostrarValor();//obrigatório invocar a função.EM ALGUM MOMENTO ELA DEVE SER CHAMADA 

function somar() {
    var numero2 = parseInt(prompt("Digite segundo numero a ser calculado: "));
    var resultado = numero + " + " + numero2 + " = " + (numero + numero2);
    tela.innerHTML = resultado;
}

function subtrair() {
    var numero2 = parseInt(prompt("Digite segundo numero a ser calculado: "));
    var resultado = numero + " - " + numero2 + " = " + (numero - numero2);
    tela.innerHTML = resultado;
}

function multiplicar() {
    var numero2 = parseInt(prompt("Digite segundo numero a ser calculado: "));
    var resultado = numero + " X " + numero2 + " = " + (numero * numero2);
    tela.innerHTML = resultado;
}

function dividir() {
    var numero2 = parseInt(prompt("Digite segundo numero a ser calculado: "));
    var resultado = numero + " / " + numero2 + " = " + (numero / numero2);
    tela.innerHTML = resultado;
}






