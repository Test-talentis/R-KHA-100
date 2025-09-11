import { createAsyncThunk } from "@reduxjs/toolkit";
import { TBestSellers } from "@types";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

const actGetBestSellersProducts = createAsyncThunk("bestSellers/actGetBestSellersProducts", async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const getBestSellersProductsId = axios.get<TBestSellers[]>("/bestSelers");
        const concanitatedIds = (await getBestSellersProductsId).data.map(item => `id=${item.productId}`).join("&");
        const response = axios.get(`/products?${concanitatedIds}`)
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetBestSellersProducts