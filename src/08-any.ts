( () => {
    let dinamycVarchar: any

    dinamycVarchar = 15
    dinamycVarchar = 'Hola'

    const rta = (dinamycVarchar as string).toLowerCase()
    console.log(rta)

    dinamycVarchar = 1212

    const rta2 = (<number> dinamycVarchar).toFixed(1)
    console.log(rta2)

})()