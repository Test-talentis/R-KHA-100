import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

const actGetProductByPrefix = createAsyncThunk("products/actGetProductByPrefix", async(prefix: string, thunkAPI) => {
    const {rejectWithValue, signal} = thunkAPI;
    try {
        console.log(prefix)
        const response =  axios.get<TProduct[]>(`/products?cat_prefix=${prefix}`,{signal});
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetProductByPrefix;