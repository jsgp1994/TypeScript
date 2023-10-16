( () => {

    type Size = 'S' | 'M' | 'X' | 'XL'

    type Product = {
        title: string,
        price: number,
        createdAt: Date,
        size?: Size
    }

    let products: Product[] = []

    //Crear producto
    const addProduct = (data: Product) => {
        products.push(data)
    }

    addProduct({
        title: 'Camisa',
        price: 200,
        createdAt: new Date,
        size: 'M'
    })

    addProduct({
        title: 'pantaloneta',
        price: 200,
        createdAt: new Date
    })

    console.table(products)


} )()