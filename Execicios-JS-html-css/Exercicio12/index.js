let NaveName = prompt("Qual o Nome Da Nave?")
let WarSpace = 0
let ConfirmWarpSpace = ""
ConfirmWarpSpace = prompt("Deseja entrar em dobra?\n1 - sim\n2 - Não")

while(ConfirmWarpSpace == "1"){
    WarSpace += 1
    ConfirmWarpSpace = prompt("Deseja realizar a proxima dobra?\n1 - sim\n2 - Não")
}
alert("Nave: " + NaveName + "\nQuantidade de dobras: " + WarSpace)