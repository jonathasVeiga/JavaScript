
var numero = parseInt(prompt("escolha um numero: "));
//i = indice
var i = 1;

 do {
    document.write(numero + " x "+ i +" = " + (numero * i) + "<br>");
    //usado quando eu preciso que meu codigo seja execultado ao menos uma vez
    i = i+1;
}while(i <= 20) 
document.write("saiu do loop");