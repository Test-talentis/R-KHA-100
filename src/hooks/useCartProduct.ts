import { actGetProductById, changeQunatitOfProduct, cleanCartProduct, removeProductById, resetUi } from "@store/cartProduct/cartProductSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

const useCartProduct = () => {
  
  const dispatch = useAppDispatch();

  const orderStatus = useAppSelector(state => state.orders.status);

  const { productsFullInfos, productWithQuantity ,status, error } = useAppSelector(
    (state) => state.cartProduct
  );
  const accessToken = useAppSelector(state => state.auth.accessToken);

  const productsFullData = productsFullInfos.map(product => ({
    ...product,
    quantity: productWithQuantity[product.id] || 0
  }))

  useEffect(() => {
    const promise = dispatch(actGetProductById());
    return () => {
      dispatch(cleanCartProduct());
      dispatch(resetUi());
      promise.abort();
    };
  }, [dispatch]);


  const changeQuantity = useCallback((id: number, quantity: number) => {
    dispatch(changeQunatitOfProduct({id, quantity}));
  },[dispatch]);

  const removeProduct = useCallback((id:number) => {
    dispatch(removeProductById(id))
  },[dispatch])

  return { productsFullData, status, error,accessToken, orderStatus ,changeQuantity, removeProduct };
};

export default useCartProduct;
