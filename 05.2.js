let valor = parseInt(prompt("digite o valor que deseja sacar"))
let notas = 0
while(valor>=10){
    valor -= 10
    notas ++
}
alert("serao entregue " +notas+"notas de R$ 10,00")