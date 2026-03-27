const numeros=[]
var tamanho=parseInt(prompt("tamanho"))
for(let i=0;i<tamanho;i++){
    numeros[i]=parseInt(prompt(""))
}
for(let i=0;i<tamanho;i++){
    document.writeln(numeros [i]+",")
}