import { Loading } from "@components/Feedback";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import React, { useEffect } from "react";
import GridList from "../GridList/GridList";
import Product from "@components/Ecomme/Product/Product";
import { actGetBestSellersProducts } from "@store/bestSellersProducts/bestSellersProductsSlice";
import HeadingSection from "../HeadingSection/HeadingSection";

function BestSellerSection() {
  const dispatch = useAppDispatch();
  const { bestSellerProducts, status, error } = useAppSelector(
    (state) => state.bestSellers
  );

    useEffect(() => {
        dispatch(actGetBestSellersProducts());
    },[dispatch])

  return (
    <Loading status={status} error={error}>
      <HeadingSection title="Best sellers" />
      <GridList
        positionContent={
            bestSellerProducts.length >= 2 ? "justify-content-center" : ""
          }
        data={bestSellerProducts}
        renderData={(item) => (
          <Product {...item} isAnimated={true} isProductInfoStyled={true} />
        )}
        emptyMessage="There is no Best Seller Products"
      />
    </Loading>
  );
}

export default BestSellerSection;
