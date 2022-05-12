let lightYears = prompt("Qual a distancia em Anos-Luz?")
let convert = prompt("Escolha uma forma de conversão:\n1 - Parsec (PC)\n2 - Unidade astronomica (Ua)\n3 - Quilometros (KM)")

switch(convert){
    case "1":
        let case1 = lightYears * 0.306601  
        alert("Distancia em nos Luz: " + lightYears + "\nDistancia em Parsecs: " + case1)
    break
    case "2":
        let case2 = lightYears * 63241.1
        alert("Distancia em nos Luz: " + lightYears + "\nDistancia em Unidade Astronomica: " + case2)
    break
    case "3":
        let case3 = lightYears * 9.5 * Math.pow(10, 12)
        alert("Distancia em nos Luz: " + lightYears + "\nDistancia em quilometros: " + case3)
    break
    default:
        alert("Opçao inexistente!")
}