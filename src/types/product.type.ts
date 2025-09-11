export type TProduct = {
    id: number,
    title: string,
    img: string,
    price: string,
    max: number,
    quantity?: number,
    isLiked?: boolean,
    isAuthenticated?: boolean,
    subTotal?: number
}