import { useAppDispatch, useAppSelector } from "@store/hooks"
import {actGetOrdersByUserId, resetOrderStatus } from "@store/placeOrders/placeOrdersSlice";
import { TProduct } from "@types";
import { useEffect, useState } from "react";

const useOrders = () => {
    const [showModal, setShowModal] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([])

    const dispatch = useAppDispatch();
    
    const {status, error, placeOrders} =  useAppSelector(state => state.orders)
    
    useEffect(() => {
       const  promise =  dispatch(actGetOrdersByUserId())
        return() => {
            dispatch(resetOrderStatus());
            promise.abort();
        }
    },[dispatch])

    const showOrderDetail = (id:number) => {
        const getProduct = placeOrders.find(order => order.id === id);
        const productDetail = getProduct?.items ?? [];
        setShowModal(true);
        setSelectedProduct(prev => [...prev, ...productDetail])
    }

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct([]);
    }

    return{status, error, placeOrders,showModal, showOrderDetail,closeModal ,selectedProduct }
}

export default useOrders