// Para este exercicio aplique a lógica necessário para 
//mostrar os anos que são realmente bissextos, 
//respeitando a regra: Os anos bissextos são múltiplos de 4, 
//não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400
// (2000 é bissexto).

for(var a=1004; a<=2017; a++){
 if(a%4 === 0 && a%400 === 0 ){
    document.write(a + "<br>");
 }else{
    if(a%100 === 0){
    document.write("não é bisexto")
    }
 }
}