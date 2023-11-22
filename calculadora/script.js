

// var valor = "";
// var n1 = document.getElementById("#container_numeros .numero");

// function mostra() {
//     var tela = document.getElementById("#tela");
//     tela.innerHTML = n1;
// }

// function pegaNumero(numero) {
//     switch (numero) {
//         case '1':
//             n1 = '1';
//             break;
//     }
//     mostra();
// }
// var n1 = document.querySelector("#container_numeros .numero");

// function mostra() {
//     var tela = document.querySelector("#tela");
//     tela.textContent = n1.textContent;
// }

// function pegaNumero(numero) {
//     switch (numero) {
//         case '0':
//             n1.textContent = '0';
//             break;
//         case '1':
//             n1.textcontent = '1';
//             break;
//         case '2':
//             n1.textContent = '2';
//             break;
//         case '3':
//             n1.textContent = '3';
//             break;
//         case '4':
//             n1.textContent = '4';
//             break;
//         case '5':
//             n1.textContent = '5';
//             break;
//         case '6':
//             n1.textContent = '6';
//             break;
//         case '7':
//             n1.textContent = '7';
//             break;
//         case '8':
//             n1.textContent = '8';
//             break;
//         case '9':
//             n1.textContent = '9';
//             break;
//     }
//     mostra();
// }
//pedir para o usuário digitar um numero
var n1 = parseInt(prompt("digite um numero: "));
var n2 = parseInt(prompt("digite o segundo numero: "));
if (n1 == n2) {
    alert(" o primeiro jogador digitou o numero: "+ n1 + 
            "\n" + " o segundo jogador digitou o numero: "+ n2 + "\n" +
            "\n DEU EMPATE!!");
} else {
        var nSorteado = parseInt(Math.random() * 2);
        if (nSorteado == 0 && n1 < n2) {
            alert(" o primeiro jogador digitou o numero: "+ n1 + 
                  "/n o segundo jogador digitou o numero: "+ n2 + "/n" +
                  "o numero sorteado foi: " + nSorteado + 
                  "/n o vencedor foi o primeiro jogador");
        } else {
            alert(" o primeiro jogador digitou o numero: "+ n1 + 
            "\n" + " o segundo jogador digitou o numero: "+ n2 + "\n" +
            "o numero sorteado foi: " + nSorteado + 
            "\n o vencedor foi o segundo jogador");
        }
    }