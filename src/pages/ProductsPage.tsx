import GridList from "@components/Common/GridList/GridList";
import Product from "@components/Ecomme/Product/Product";
import { Loading } from "@components/Feedback";
import { TProduct } from "@types";
import useProducts from "@hooks/useProducts";
import { BackgroundImage, Heading } from "@components/ui";

import useAnimated from "@hooks/useAnimated";
import { Container } from "react-bootstrap";

function ProductsPage() {
  const { isAnimated } = useAnimated();

  const { fullProductData, status, error, prefix } = useProducts();

  return (
    <>
      <BackgroundImage title="products"/>
      <Container>
      <Loading status={status} error={error} type="product">
        <Heading title={prefix ? `Product ${prefix}` : ""} level={1} />
        <GridList<TProduct>
          data={fullProductData}
          renderData={(product) => (
            <Product {...product} isAnimated={isAnimated} />
          )}
          emptyMessage="There are no Product"
        />
      </Loading>
    </Container>
    </>
 
  );
}

export default ProductsPage;
