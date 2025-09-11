import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";


const actGetOrdersById = createAsyncThunk("orders/actGetOdersById", async(id: string, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    const {auth} = getState() as RootState;
    try {
        const response = axios.get(`/orders?userId=${auth.user?.id}&id=${id}`);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    } 
})

export default actGetOrdersById;