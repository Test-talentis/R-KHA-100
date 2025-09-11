import { createSlice } from "@reduxjs/toolkit";
import { isString, TCategory, TLoading } from "@types";
import actGetCategory from "./act/actGetCategory";

interface ICategory {
    category: TCategory[];
    status: TLoading;
    error: null | string
}

const initialState: ICategory = {
    category: [],
    status: "idle",
    error: null
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        cleanUpCategories: (state) => {
            state.category = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategory.pending, (state) => {
            state.status= "pending";
            state.error = null;
        }),
        builder.addCase(actGetCategory.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.category = action.payload;
        }),
        builder.addCase(actGetCategory.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
})


export const {cleanUpCategories} = categorySlice.actions
export default categorySlice.reducer;
export {actGetCategory};