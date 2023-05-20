var tela = document.querySelector("#tela");
var numero = document.querySelectorAll("#container_numeros .numero");

function mostra() {
  tela.innerHTML = numero;
  mostra();
}

function pegaNumero(numero) {
  switch (numero) {
    case "1":
      console.log(1);
      break;

    default:
      break;
  }
}
