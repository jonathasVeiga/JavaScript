//criei uma variavel e referenciei ele no html com o ID output
var output = document.querySelector('#output');

//inserindo algo nesse elemento html pelo javascript 
output.innerHTML='Texto inserido por javascript'

var menssagem = "";
for (var i = 0; i < 11; i++) {
    menssagem+="i: "+ i + "<br>";
}

output.innerHTML = menssagem;