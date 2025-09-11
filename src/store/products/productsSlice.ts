import { createSlice } from "@reduxjs/toolkit";
import {isString, TLoading, TProduct} from "@types"
import actGetProductByPrefix from "./act/actGetProductByPrefix";
 interface IProduct  {
    products: TProduct[],
    status: TLoading,
    error: null | string
}

const initialState : IProduct = {
    products: [],
    status: "idle",
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        cleanUpProducts : (state) => {
            state.products = []
        }
    },
    extraReducers : (builder) => {
        builder.addCase(actGetProductByPrefix.pending, (state) => {
            state.status = "pending";
            state.error = null
        }),
        builder.addCase(actGetProductByPrefix.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.products = action.payload
        }),
        builder.addCase(actGetProductByPrefix.rejected, (state, action) => {
            state.status = "failed";
           if(isString(action.payload)) {
            state.error = action.payload;
           }
        })
    }
})
export {actGetProductByPrefix}
export const {cleanUpProducts} = productsSlice.actions
export default productsSlice.reducer;