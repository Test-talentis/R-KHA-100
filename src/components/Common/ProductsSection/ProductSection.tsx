import HeadingSection from "../HeadingSection/HeadingSection";
import FilterButton from "../FilterButton/FilterButton";
import GridList from "../GridList/GridList";
import { Loading } from "@components/Feedback";
import Product from "@components/Ecomme/Product/Product";
import styles from "./style.module.css";
import useProductSection from "@hooks/useProductSection";

const { product_section } = styles;

function ProductSection() {
  const {
    status,
    error,
    catName,
    category,
    fullProductData,
    isAnimated,
    handelAnimation,
    handelSelectCatName,
  } = useProductSection();

  return (
    <div className={product_section}>
      <HeadingSection title="Our Products" />
      <Loading status={status} error={error} type="product">
        <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
          <FilterButton
            category={category}
            catName={catName}
            handelSelectCatName={handelSelectCatName}
            handelAnimation={handelAnimation}
          />
        </div>
        <GridList
          positionContent={
            fullProductData.length >= 2 ? "justify-content-center" : ""
          }
          data={fullProductData}
          renderData={(item) => (
            <Product
              {...item}
              isProductInfoStyled={true}
              isAnimated={isAnimated}
            />
          )}
          emptyMessage="there no product"
        />
      </Loading>
    </div>
  );
}

export default ProductSection;
