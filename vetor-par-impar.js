const  vetorpar=[],vetorimpar=[]
let quantidade=parseInt(prompt("quantidade de números"))
var contpar=0,contimpar=0
for(let i=0;i<quantidade;i++){
    let numero=parseInt(prompt("numero"))
    if(numero %2 == 0){
        vetorpar[contpar]=numero
        contpar++
      }  else {
            vetorimpar[contimpar]=numero
            contimpar++

      }
    }
    document.writeln("vetor par <br>")
    for(let i =0;i<contpar;i++){
        document.writeln(vetorpar[i])
    }
    document.writeln("<br>vetor impar<br>")
    for(let i=0;i<contimpar;i++){
        document.writeln(vetorimpar[i]);
    }