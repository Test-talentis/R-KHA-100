import { TProduct } from "./product.type"

export type TOrders = {
    id: number,
    items: TProduct[],
    subTotal: number
}