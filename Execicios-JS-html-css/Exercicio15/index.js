let naveName = prompt("Qual o Nome da Nave?")
let naveVelocity = 0
let newVelocity
let Options 

function Menu(){
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Escolha uma das opçoes:\n1 - Acelerrar a nave em 5 km/s\n2 - Desacelerrar em 5 km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa")
    }
    return option
}

function speedUp(velocity){
    newVelocity = velocity + 5
    return newVelocity
}

function speedDown(velocity){
    if(velocity > 5){
        newVelocity = velocity - 5
    }else{
        alert("Nao pode ser desacelerrado Velocidade abaixo de 5 km/s")
    }
    return newVelocity
}

function dados(){
    alert("Nave: " + naveName + "\nVelocidade atual: " + naveVelocity)
}

do{
    Options = Menu()
    switch(Options){
        case "1":
            naveVelocity = speedUp(naveVelocity)
            break
        case "2":
            naveVelocity = speedDown(naveVelocity)
            break
        case "3":
            dados()
    }
}while(Options != "4")
