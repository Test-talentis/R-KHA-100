import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetLikeProduct, cleanUpWishlist } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";


const useWishlist = () => {
    const dispatch = useAppDispatch();

    const {wishlistProducts, status, error} = useAppSelector(state => state.wishlist);
    
    const cartItem = useAppSelector(state => state.cartProduct.productWithQuantity);
    
    const wishlistFullProduct = wishlistProducts.map(product => ({
        ...product,
        quantity: cartItem[product.id] || 0,
        isLiked: true,
        isAuthenticated: true,
    }))
    
    useEffect(() => {
       const promise = dispatch(actGetLikeProduct("productsFullInfo"));
       return () => {
            dispatch(cleanUpWishlist())
            promise.abort();
       }
    },[dispatch])

   


    return {wishlistFullProduct, status, error}
}

export default useWishlist;