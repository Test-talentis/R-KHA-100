import { Heading } from "@components/ui";
import GridList from "@components/Common/GridList/GridList";
import Product from "@components/Ecomme/Product/Product";
import { Loading } from "@components/Feedback";
import useWishlist from "@hooks/useWishlist";
import { Container } from "react-bootstrap";


function WishlistPage() {
  const { wishlistFullProduct, status, error } = useWishlist();
  
  return (
    <Container>
    <Loading status={status} error={error}>
      <Heading title="Wishlist" level={1}/>
      <GridList
        data={wishlistFullProduct}
        renderData={(item) => <Product {...item} isAnimated={true} />}
        emptyMessage="There are no Product"
      />
    </Loading>
    </Container>
  );
}

export default WishlistPage;
