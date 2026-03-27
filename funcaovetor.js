const numeros=[]
var tamanho=parseInt(prompt())
function inserir(){
    for(let i=0;i<tamanho;i++){
        numeros[i]=parseInt(prompt())
    }
}
    function mostrar (){
    }
    for(let i=0;i<tamanho;i++){
        document.writeln(numeros[i])
    }
    inserir();mostrar()