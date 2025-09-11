import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TProduct } from "@types";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

const actGetProductById = createAsyncThunk(
  "cartProduct/actGetProductById",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI;
    const { cartProduct } = getState() as RootState;
    const getAllIdsOfProductAndConcatenated = Object.keys(cartProduct.productWithQuantity)
      .map((id) => `id=${id}`)
      .join("&");
      if(!getAllIdsOfProductAndConcatenated.length) {
        return fulfillWithValue([]);
      }
    try {
        const response = axios.get<TProduct[]>(`/products?${getAllIdsOfProductAndConcatenated}`,{signal});
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductById;