function speedDown (velocity, printer){
    let desaceleration = 20

    while(velocity > 0){
        printer(velocity)
        velocity -= desaceleration
    }

    alert("A Nave esta parada, As comportaas ode ser abertas")
}

let spaceshipVelocity = 150

speedDown(spaceshipVelocity , function(velocity){
    console.log("Velocidade atual: " + velocity)
})