( () => {
    let x: number | null
    let y: string | undefined

    type Name = string | null
    let name: Name  = null

    sayHello(name)
    sayHello('Juan')

    function sayHello( data: Name ) {
        let hello = 'Hola '
        hello += data?.toUpperCase() || 'nodoby'
        console.log(hello)
    }

} )()