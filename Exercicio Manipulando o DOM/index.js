function saveHouse (){
    let numberHouse = document.querySelector("input[name ='numberHouse']").value
    let district = document.querySelector("input[name ='district']").value
    let city = document.querySelector("input[name ='city']").value
    let area = document.querySelector("input[name ='area']").value

    let newList = document.createElement("li")
    newList.innerText = area + "m², número " + numberHouse + " (" + district + " - " + city + ")"
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    
    newList.appendChild(removeButton)

    document.getElementById("houseList").appendChild(newList)
}

function removeHouse(element){
    let liRemove = element.parentNode
    document.getElementById("houseList").removeChild(liRemove)
}