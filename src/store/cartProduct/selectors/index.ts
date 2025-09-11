import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

export const cartTotalQuantitySelectore = createSelector(
  (state: RootState) => state.cartProduct.productWithQuantity,
  (items) => {
    console.log("invoke crtTotalQuantity")
    const cartQuantity = Object.values(items).reduce(
      (acc, itemQuntity) => acc + itemQuntity,
      0
    );
    return cartQuantity;
  }
);
