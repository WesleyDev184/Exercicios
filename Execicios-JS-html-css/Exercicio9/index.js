let nome1 = prompt("Nome da primeira pessoa.")
let idade1 = prompt("Idade da primeira pessoa.")
let nome2 = prompt("Nome da segunda pessoa.")
let idade2 = prompt("Idade da segunda pessoa.")
let diferenca = null
if(idade1 > idade2){
    diferenca = idade1 - idade2
} else {
    diferenca = idade2 - idade1
}
if(idade1 > idade2){
     alert("A pessoa mais velha e " + nome1 + " com " + idade1 + " anos. \nE a pessoa mais nova e " + nome2 + " com " + idade2 + " anos.")
    //  alert("A pessoa mais nova e " + nome2 + " com " + idade2 + " anos")
}else{
    alert("A pessoa mais velha e " + nome2 + " com " + idade2 + " anos. \nE a pessoa mais nova e " + nome1 + " com " + idade1 + " anos") 
    // alert("A pessoa mais nova e " + nome1 + " com " + idade1 + " anos")
}

alert("A diferença de idade e de " + diferenca + " anos")