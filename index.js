//mini calculadora 1.0

var tela = document.querySelector("#tela");
var numero = parseInt(prompt("Digite o numero a ser calculado: "));

function mostrarValor() {
    tela.innerHTML = numero;
}

//aqui ele exibe o primeiro numero 
mostrarValor();//obrigatório invocar a função.EM ALGUM MOMENTO ELA DEVE SER CHAMADA 

function somar() {
    var numero2 = parseFloat(prompt("Digite segundo numero a ser calculado: "));
    numero = numero + numero2; //aqui eu altero o valor da VARIAVEL GLOBAL numero
    //tela.innerHTML = resultado; ao invés de chamar isso eu apenas chamo a função mostrarValor.
    mostrarValor();//aqui ele chama a função mostrar com o resultado 
}

function subtrair() {
    var numero2 = parseFloat(prompt("Digite segundo numero a ser calculado: "));
    numero = numero - numero2;
    mostrarValor();
}

function multiplicar() {
    var numero2 = parseInt(prompt("Digite segundo numero a ser calculado: "));
    numero = numero * numero2;
    mostrarValor();
}

function dividir() {
    var numero2 = parseInt(prompt("Digite segundo numero a ser calculado: "));
    var numero = numero / numero2;
    mostrarValor();
}




