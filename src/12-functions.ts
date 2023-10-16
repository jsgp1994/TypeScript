( () => {

    type Size = 'S' | 'M' | 'L' | 'XL'

    const templateProducos = (
        name: string,
        stock: number,
        createdAt: Date,
        size?: Size
    ) => {
        return {
            name,
            stock,
            createdAt,
            size
        }
    }

    let product1 = templateProducos( 'jeans', 15, new Date)
    let product2 = templateProducos( 'jeans', 15, new Date, 'M')
    console.log( product1, product2 )

})()