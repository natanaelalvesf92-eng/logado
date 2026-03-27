const vetor=[]
let soma=0
let pessoas = parseInt(prompt("quantas pessoas ?"))
for (let i=0;i<pessoas;i++){
    vetor[i]=parseFloat(prompt("contribuição"))
    soma+=vetor[i]
}
alert(`vaquinha:R$ ${soma}`)
for(let i=0;i<pessoas;i++){
    document.writeln(vetor[i])
}

