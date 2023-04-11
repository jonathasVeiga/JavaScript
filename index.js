
var numero = parseInt(prompt("escolha um numero: "));
//i = indice
var i = 1;

while (i <= 20) {
    document.write(numero + " x "+ i +" = " + (numero * i) + "<br>");
    //isso é extremamente necessário, sem isso o browser trava;
    //apartir do momento em que o trabalho de cima for concluido, 
    //ele muda o valor da variavel i pra mais 1  
    i = i+1;
}