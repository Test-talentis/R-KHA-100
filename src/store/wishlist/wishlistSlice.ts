import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actLikeProduct from "./act/actLikeProduct";
import actGetLikeProduct from "./act/actGetLikedProducts";

interface IWishlist {
  productsId: number[];
  wishlistProducts: TProduct[];
  status: TLoading;
  error: null | string;
}

const initialState: IWishlist = {
  productsId: [],
  wishlistProducts: [],
  status: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanUpWishlist: (state) => {
      state.wishlistProducts = [];
    },
    cleanUpProductsId: (state) => {
      state.productsId = [];
    },
  },
  extraReducers: (builder) => {
    // Act Get Liked Product
    builder.addCase(actGetLikeProduct.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actGetLikeProduct.fulfilled, (state, action) => {
        state.status = "fullfield";
        if (action.payload?.dataType === "productsId") {
          state.productsId = action.payload.data as number[];
        } else if (action.payload?.dataType === "productsFullInfo") {
          state.wishlistProducts = action.payload.data as TProduct[];
        }
      }),
      builder.addCase(actGetLikeProduct.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });

    // Act Like Product
    builder.addCase(actLikeProduct.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actLikeProduct.fulfilled, (state, action) => {
        state.status = "fullfield";
        const { type, productId } = action.payload;
        if (type === "delete") {
          state.productsId = state.productsId.filter(
            (itemId) => itemId !== productId
          );
          state.wishlistProducts = state.wishlistProducts.filter(
            (wishlistProduct) => wishlistProduct.id !== productId
          );
        } else if (type === "add") {
          state.productsId.push(productId as number);
        }
      }),
      builder.addCase(actLikeProduct.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
  },
});

export { actLikeProduct, actGetLikeProduct };
export const { cleanUpWishlist, cleanUpProductsId } = wishlistSlice.actions;
export default wishlistSlice.reducer;
