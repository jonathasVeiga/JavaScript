var output = document.querySelector("#output");
var menssagem ="";

function mostrarTabuada(){
    //perguntar o numero para o usuário
    //converter o numero 
    var numero = parseInt(prompt("Digite um numero: "));

    //criar uma variavel que serviré de indice
    /*enquanto <= 1000
      concatena na variavel menssagem*/
    for (var i = 0; i<=100; i++) {
        //var menssagem = messagem + numero + "x" + i + "=" + numero *i;
        menssagem += numero +"x"+ i + "=" + (numero*i)+ "<br>"; 
    }
    
    //mostra menssagem no output
    output.innerHTML = menssagem; 
}
