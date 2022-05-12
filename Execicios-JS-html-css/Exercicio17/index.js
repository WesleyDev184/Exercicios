const hitchedSpaceships = [
    ["fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
]

let crew = hitchedSpaceships.filter(element => {
    return element[1] >= 9 
}).map(element => {
    return element[0]
})

let falseHitched = hitchedSpaceships.findIndex(element => {
    return element[2] == false
})

let spaceshipNameUPcase = hitchedSpaceships.map(element => {
    return element[0].toUpperCase()
})

let menssage = "Espaçonaves com mais de 9 tripulantes: " + crew.join(", ")
menssage += "\nPlataforma com processo de engate: " + (falseHitched + 1)
menssage += "\nEspaço naves destacadas: " + spaceshipNameUPcase.join(", ")

alert(menssage)