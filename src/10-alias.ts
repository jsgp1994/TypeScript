( () => {
    //Alias Type
    type UserId = number | string

    let user: UserId = 'Juan'

    greeting(user)

    function greeting (user: UserId) {
        if ( typeof user === 'string' ) {
            console.log(user.toUpperCase())
        }
    }

    //Literal Types
    type Sizes = 'S' | 'M' | 'L' | 'XL'

    let shirt: Sizes

    shirt = 'L'

    clothes(shirt)

    function clothes( shirt: Sizes) {
        console.log(`Ropa tamaño ${shirt}`)
    }

} )()
