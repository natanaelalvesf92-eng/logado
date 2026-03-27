var notaexamefinal,estudantes=0
let notaA = parseFloat (prompt("digite a nota 1"))
let notaB = parseFloat (prompt("digie a nota 2"))
let media = (notaA + notaB)/2
if (media <4)
alert ("voce esta reprovado")
else if(media > 4 && media < 6){
    alert("voce esta de exame final")
    notaexamefinal=parseFloat(prompt("nota final"))
    media =(media + notaexamefinal )/2
    if(media>5)
        alert("Aprovado")
}
else 
    alert ("Aprovado")

        