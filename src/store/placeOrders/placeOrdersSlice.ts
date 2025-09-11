import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrders } from "@types";
import actAddOrders from "./act/actAddOrders";
import actGetOrdersByUserId from "./act/actGetOrdersByUserId";


interface IPlaceOrders  {
    placeOrders: TOrders[],
    status: TLoading,
    error: null | string,
    
}

const initialState: IPlaceOrders = {
    placeOrders: [],
    status: "idle",
    error: null
}

const placeOrdersSlice = createSlice({
    name: "placeOrders",
    initialState,
    reducers: {
        resetOrderStatus : (state) => {
            state.status ="idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // Act Add Orders
        builder.addCase(actAddOrders.pending, (state) => {
            state.status = 'pending';
            state.error = null
        }),
        builder.addCase(actAddOrders.fulfilled, (state) => {
            state.status = 'fullfield';
        }),
        builder.addCase(actAddOrders.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload;
            }
        })
        // Act Get Orders
        builder.addCase(actGetOrdersByUserId.pending, (state) => {
            state.status = "pending";
            state.error = null;
        }),
        builder.addCase(actGetOrdersByUserId.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.placeOrders = action.payload;
        }),
        builder.addCase(actGetOrdersByUserId.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
})

export {actAddOrders, actGetOrdersByUserId};
export const {resetOrderStatus} = placeOrdersSlice.actions
export default placeOrdersSlice.reducer;