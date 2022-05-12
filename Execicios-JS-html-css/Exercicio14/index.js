let NaveName = prompt("Qual o nome da nave?")
let newName = ""

for(let caracter = NaveName.length - 1; caracter >= 0 ; caracter--){
    if(NaveName[caracter] == "e"){
        break        
    }else{
        newName += NaveName[caracter]
    }  
}

alert("Nome Original da Nave: " + NaveName + "\nNome apos a inversão: " + newName)