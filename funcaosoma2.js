function soma(a,b ){
    return a+b
}
function subtracao(a,b){
    return a-b
}
function multiplicao(a,b){
    return a * b
}
function divisao(a,b){
    return a/b
}  

var opcao = prompt("qual operacao:1. soma\n2. subtracao 3.multiplicacao\n4.divisao")
var a = parseInt(prompt(""))
var b = parseInt(prompt(""))
switch(opcao){
    case '1':
        alert(soma (a,b));break;
        case '2':
            alert(subtracao(a,b));break;
            case '3':
                alert(multiplicacao(a,b));break;
case '4':
    alert(divisao(a,b).toFixed(2));break;
    default:
        alert("opcao invalida")
}