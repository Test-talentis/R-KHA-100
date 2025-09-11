import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

interface ILogin  {
    email: string,
    password: string
}   



const actLogin = createAsyncThunk("auth/actLogin", async(data: ILogin, thunkApi) => {
    const {rejectWithValue} = thunkApi;
    try {
        const response = axios.post("/login", data);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actLogin;