class spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.velocity = 0
    }
    get getInfo(){
        return this.info
    }
    static get deceleration(){
        return 0.17
    }

    set Acceleration(acceleration){
        this.velocity += (acceleration * (1 - spaceship.deceleration))
    }
}
class battleSpaceship extends spaceship{
    constructor(name, crewQuantity, weapons){
        super(name, crewQuantity)
        this.weapons= weapons
        this.info = "Batalha"
    }
}
class transportSpaceship extends spaceship{
    constructor(name, crewQuantity, numberOfPlaces){
        super(name, crewQuantity)
        this.numberOfPlaces = numberOfPlaces
        this.info = "Transporte"
    }
}

function spaceshipCreate(){
    let name = prompt("Qual o nome da nave?")
    let crewQuantity = Number(prompt("Qual a quantidade de tripulantes?"))
    let type = prompt("Qual o tipo da nave?\n1 - Batalha\n2 - Transporte")
    if(type == "1"){
        let weapons = Number(prompt("Quantas armas Estao disponiveis?")) 
        return new battleSpaceship(name, crewQuantity,weapons)
    }else if(type == "2"){
        let numberOfPlaces = Number(prompt("Quantas lugares estao disponiveis na nave?"))
        return new transportSpaceship(name, crewQuantity, numberOfPlaces)
    }
}

var nave = new spaceshipCreate()

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Acelerrar nave\n" +
                                "2- Trocar a nave\n" +
                                "3- Sair e imprimir")
    }
    return chosenOption
}

let chosenOption
while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let acceleration = Number(prompt("Quanto deseja acelerrar?"))
            nave.Acceleration = acceleration
            alert("A velocidade atual da nave e " + nave.velocity)
            break
        case "2":
            nave = new spaceshipCreate()
            break
        case "3":
            let info = nave.getInfo
            switch (info) {
                case "Batalha":
                    alert("Nome: "+nave.name+"\nQuantidade de tripulantes: "+nave.crewQuantity+"\nVelocidade atual: "+nave.velocity+"km/s\nQuantidade de armas: "+nave.weapons)
                    break;
                case "Transporte":
                    alert("Nome: "+nave.name+"\nQuantidade de tripulantes: "+nave.crewQuantity+"\nVelocidade atual: "+nave.velocity+"km/s\nQuantidade de lugares: "+nave.numberOfPlaces)
                    break;
                default:
                    alert("Parou de funcionar.")
                    break;
            }
            break;
        default:
            alert("Opcao Invalida")
    }
}