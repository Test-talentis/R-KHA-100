import { createSlice} from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actGetBestSellersProducts from "./act/actGetBestSellersProducts";

interface IBestSellersProducts {
    bestSellerProducts: TProduct[],
    status: TLoading,
    error: null | string
}

const initialState : IBestSellersProducts = {
    bestSellerProducts: [],
    status: "idle",
    error: null
}

const bestSellersSlice = createSlice({
    name: "bestSellers",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(actGetBestSellersProducts.pending, (state) => {
            state.status = "pending";
            state.error = null
        }),
        builder.addCase(actGetBestSellersProducts.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.bestSellerProducts = action.payload;
        }),
        builder.addCase(actGetBestSellersProducts.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
})
export {actGetBestSellersProducts}

export default bestSellersSlice.reducer;