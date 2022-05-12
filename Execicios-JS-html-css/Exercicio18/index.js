let spaceShipName = prompt("Qual o nome da nave:")
let spaceshipType = prompt("Defina o tipo da nave:")
let spaceShipMaxVelocity = Number(prompt("Defina a velociadade maxima da nave:"))

let spaceShip = {
    name: spaceShipName,
    type: spaceshipType,
    maxVelocity: spaceShipMaxVelocity,
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    },
    speedDown: function(){
        this.velocity = spaceShipMaxVelocity - 1
    }
}
function stop(){
    alert("Informacoes da nave:\n" + "Name: " + spaceShip.name + "\nTipo: " + spaceShip.type + "\nVelocidade Maxima: " + 
    spaceShip.maxVelocity)
    spaceShip.velocity = 0
}

function acelerate(){
    let accelerationValue = Number(prompt("Quanto Deseja acelerar"))
    spaceShip.speedUp(accelerationValue)
    if(spaceShip.velocity >= spaceShip.maxVelocity){
        spaceShip.speedDown()
        alert("A velocidade maxima foi ultrapasada, a velocidade atual sera definida abaixo do limite!")
    }
}

function menu(){
    let choseOption
    do {
        choseOption = prompt("Você deseja:\n1- Acelerar\n2- Parar\n3- Ver a velocidade da nave")
        switch(choseOption){
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            case "3":
                alert("A velocidade Atual da Nave e: " + spaceShip.velocity)
                break
            default:
                alert("Opçao invalida")
        }
    }while(choseOption != "2")
}
menu()