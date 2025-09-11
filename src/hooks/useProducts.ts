import { useAppDispatch, useAppSelector } from "@store/hooks"
import {actGetProductByPrefix, cleanUpProducts} from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
    const dispatch = useAppDispatch();
    
    const {products, status, error} = useAppSelector(state => state.products);
    
    const cartProductQuantity = useAppSelector(state => state.cartProduct.productWithQuantity);
    
    const {productsId} = useAppSelector(state => state.wishlist);

    const {accessToken} = useAppSelector(state => state.auth)

    const fullProductData = products.map(product => ({
        ...product,
        quantity: cartProductQuantity[product.id] || 0,
        isLiked: productsId.includes(product.id) ? true : false,
        isAuthenticated: accessToken ? true : false,
    }))

    const {prefix} = useParams()
    useEffect(() => {
        const promise = dispatch(actGetProductByPrefix(prefix as string));

        return (() => {
            dispatch(cleanUpProducts());
            promise.abort();
        })
    },[dispatch, prefix])

    const handelGetProductByPrefix = (prefix: string) => {
        dispatch(actGetProductByPrefix(prefix))
    }

    return {fullProductData, status, error, prefix, handelGetProductByPrefix}
}

export default useProducts;