let pilotName = prompt("Qual o nome do piloto!")
let navevelocity = 0
navevelocity = prompt("A qual velociade gostaria de acelerar a Nave?")
confirm("A nave vai viajar a " + navevelocity + "Km/s")

if(navevelocity <= 0){
    alert("A nave esta parada. considere partir e aumentar a velocidade.")
}else if(navevelocity < 40){
    alert("voçe esta devagar, podemos almentar mais.")
}else if(navevelocity >= 40 & navevelocity < 80){
    alert("Parece um boa velocidade para manter.")
}else if(navevelocity >= 80 & navevelocity < 100){
    alert("Velocidade alta, considere diminuir")
    navevelocity = prompt("A recomendacao de velocidade e entre 40 e 80 km/s")
}else if(navevelocity >= 100){
    alert("velocidade perigosa. Controle Altomatica forçado!")
    navevelocity = 80
    alert("velociade alterada para 80 km/s")
}

alert("Nave X\n\npiloto: " + pilotName + "\nVelociade atual: " + navevelocity + " km/s") 