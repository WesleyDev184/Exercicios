let NaveName = prompt("Qual o nome da nave?")
let oldCaracter = prompt("Qual Caracter Deseja Substituir?")
let newcaracter = prompt("Para qual caracter deseja substituir?")
let newName = ""

for(let caracter = 0; caracter < NaveName.length; caracter++){
    if(NaveName[caracter] == oldCaracter){
        newName += newcaracter
    }else{
        newName += NaveName[caracter]
    }
}

alert("Novo nome da Nave e " + newName)