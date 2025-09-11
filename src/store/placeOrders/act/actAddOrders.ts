import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

const actAddOrders = createAsyncThunk("orders/actAddOrders", async(subTotal: number, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    const {auth, cartProduct} = getState() as RootState;
    const productsId = cartProduct.productWithQuantity;
    const products = cartProduct.productsFullInfos.map(product => ({
        id:product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        quantity: productsId[product.id],
        subTotal
    }))
    try {
        const response = axios.post("/orders",{
            userId: auth.user?.id,
            items: products,
            subTotal
        })
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actAddOrders;