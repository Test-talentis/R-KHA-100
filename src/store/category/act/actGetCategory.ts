import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@types";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";

const actGetCategory = createAsyncThunk("category/actGetCategory", async(_, thunkAPI) => {
    const {rejectWithValue, signal} = thunkAPI;
    try {
        const response = axios.get<TCategory[]>("/categories", {signal});
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetCategory