let valorsaque = parseInt(prompt("informe o valor do saque(deve ser multiplicado de ):"));
let quantidadenotas=0;
while (valorsaque > 0){
    valorsaque = valorsaque-10
    quantidadenotas++
} 
alert("Receberá o valor em notas " +quantidadenotas+ "em notas de 10 R$")