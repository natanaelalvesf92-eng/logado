let ingressos = 50 
let vendidos = parseInt(prompt("quantos ingressos ja foram vendidos?"))
let restantes = ingressos-vendidos
if(restantes==0){
    alert("não ha mais ingressos disponiveis")
}else{
    alert("ainda ha " + restantes +"ingressos disponives")
}