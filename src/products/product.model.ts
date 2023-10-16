export type Size = 'M' | 'L' | 'XL' | 'L'

export type Product = {
    title: string,
    price: number,
    createdAt: Date,
    stock: number,
    size?: Size
}