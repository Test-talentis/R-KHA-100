import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

interface IRegister {
    firstName: string,
    lastName: string, 
    email: string,
    password: string,
    confirmPassword: string
}

const actRegister = createAsyncThunk("auth/actRegister", async(data: IRegister, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = axios.post("/register", data);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actRegister