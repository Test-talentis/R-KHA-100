import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

const actGetOrdersByUserId = createAsyncThunk("orders/actGetOrdersByUserId", async(_, thunkAPI) => {
    const {rejectWithValue, getState, signal} = thunkAPI;
    const {auth} = getState() as RootState;

    try {
        const response = axios.get(`/orders?userId=${auth.user?.id}`, {signal});
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }

})

export default actGetOrdersByUserId;