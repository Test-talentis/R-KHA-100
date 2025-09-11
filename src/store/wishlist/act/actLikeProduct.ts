import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";



const actLikeProduct = createAsyncThunk("wishlist/actLikeProduct", async(productId:number, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    const {auth} = getState() as RootState;
    try {
        const isProductLiked =  axios.get(`/wishlist?userId=${auth.user?.id}&productId=${productId}`);
        if((await isProductLiked).data.length > 0) {
            await axios.delete(`/wishlist/${(await isProductLiked).data[0].id}`);
            return {type:"delete", productId};
        } else {
             await axios.post(`/wishlist`,{
                userId: auth.user?.id,
                productId
            });
            return {type: "add" , productId}
        }
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actLikeProduct;