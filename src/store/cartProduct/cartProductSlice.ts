import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actGetProductById from "./act/actGetProductById";

interface ICartProduct {
  productWithQuantity: { [keyof: string]: number };
  productsFullInfos: TProduct[];
  status: TLoading;
  error: null | string;
}

const initialState: ICartProduct = {
  productWithQuantity: {},
  productsFullInfos: [],
  status: "idle",
  error: null,
};

const cartProductSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    addProductById: (state, action) => {
      const id = action.payload;
      if (state.productWithQuantity[id]) {
        state.productWithQuantity[id] += 1;
      } else {
        state.productWithQuantity[id] = 1;
      }
    },
    resetUi: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    cleanCartProduct: (state) => {
      state.productsFullInfos = [];
    },
    cleanCartAfterAddOrders : (state) => {
      state.productWithQuantity = {}
      state.productsFullInfos = []
    },
    changeQunatitOfProduct: (state, action) => {
      const { id, quantity } = action.payload;
      state.productWithQuantity[id] = quantity;
    },
    removeProductById: (state, action) => {
      const id = action.payload;
      delete state.productWithQuantity[id];
      state.productsFullInfos = state.productsFullInfos.filter(
        (product) => product.id !== id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductById.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actGetProductById.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.productsFullInfos = action.payload;
      }),
      builder.addCase(actGetProductById.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = null;
        }
      });
  },
});

export { actGetProductById };
export const {
  resetUi,
  addProductById,
  changeQunatitOfProduct,
  removeProductById,
  cleanCartProduct,
  cleanCartAfterAddOrders
} = cartProductSlice.actions;
export default cartProductSlice.reducer;
