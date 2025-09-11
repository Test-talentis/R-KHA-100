import { Heading } from "@components/ui/index";
import { CartSubtTotal } from "@components/Ecomme";
import CartItemList from "@components/Ecomme/CartItemList/CartItemList";
import { Loading } from "@components/Feedback";
import LottieHandler from "@components/Feedback/LottieHandler/LottieHandler";
import useCartProduct from "@hooks/useCartProduct";
import { Container } from "react-bootstrap";

function CartProductPage() {
  const {
    productsFullData,
    status,
    error,
    accessToken,
    orderStatus,
    changeQuantity,
    removeProduct,
  } = useCartProduct();

  return (
    <Container>
    <Loading status={status} error={error}>
      
      <Heading title="CartProducts" level={1}/>
      {productsFullData.length > 0 ? (
        <>
          <CartItemList
            products={productsFullData}
            changeQuantity={changeQuantity}
            removeProduct={removeProduct}
          />
          <CartSubtTotal
            products={productsFullData}
            accessToken={accessToken}
          />
        </>
      ) : orderStatus === "fullfield" ? (
        <LottieHandler type="success" message="The Order Add Successfuly" />
      ) : (
        <LottieHandler type="shopCartEmpty" message="there are no Product" />
      )}
    </Loading>
    </Container>
  );
}

export default CartProductPage;
