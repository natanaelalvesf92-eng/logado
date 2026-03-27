const vtabuada = [1,2,3,4,5,6,7,8,9,10]
const vresultado = []
var numero = parseInt(prompt("numero"))
for(let i =0;i<10;i++){
    vresultado[i]=vtabuada[i]*numero
}
for(let i=0;i<10;i++){
    document.writeln (`${numero}*${vtabuada[i]} = ${vresultado[i]} <br>`)
}