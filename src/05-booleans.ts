( () => {
    let value = true
    console.log(value)

    const random = Math.random()

    value = random > 0.5
    console.log("Random > 0.5 ", value, " Porque random es: ",random)

    let value2: boolean = false

    console.log("Values2 => ", value2)

})()