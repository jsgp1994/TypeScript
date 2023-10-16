import { Product } from './product.model'

export let products: Product[] = []

export const addProduct = (product: Product):void => {
    products.push(product)
}
export const stock = (): number => {
    let tot: number = 0
    products.forEach( (data) => {
        tot += data.stock
    } )
    return tot
}