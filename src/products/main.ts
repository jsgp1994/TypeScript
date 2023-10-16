import { addProduct, stock, products } from './product.service'

addProduct({
    title: 'Buso Polo',
    price: 200,
    createdAt: new Date,
    stock: 10,
    size: 'M'
})

addProduct({
    title: 'Buso Blue',
    price: 400,
    createdAt: new Date,
    stock: 10
})

console.table(products)
console.log(stock())