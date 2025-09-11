import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TProduct } from "@types";

import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";

type TDataType = "productsId" | "productsFullInfo";

const actGetLikeProduct = createAsyncThunk(
  "wishlist/actGetLikeProduct",
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      
      const userWishlist = axios.get<{ productId: number }[]>(
        `/wishlist?userId=${auth.user?.id}`,
        { signal }
      );
      
      if (!(await userWishlist).data.length) {
        return { data: [], dataType: "empty" };
      }

      if (dataType === "productsId") {
      
        const arrayOfProductsId = (await userWishlist).data.map(
          (item) => item.productId
        );
      
        return { data: arrayOfProductsId, dataType: "productsId" };
      
      } else if (dataType === "productsFullInfo") {
        console.log( (await userWishlist).data)
        const concanetatedId = (await userWishlist).data
          .map((item) => `id=${item.productId}`)
          .join("&");
      
          const response = axios.get<TProduct[]>(`/products?${concanetatedId}`);
      
        return { data: (await response).data, dataType: "productsFullInfo" };
      }

    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetLikeProduct;
