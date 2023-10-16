( () => {

    let user: string | number

    greeting('hola')
    greeting(15.15)

    function greeting (data: string  | number) {
        if ( typeof data === 'string' ) {
            console.log(data.toUpperCase())
        }else{
            console.log(data.toFixed(1))
        }
    }

} )()