import { TProduct } from "@types";
import CartItem from "../CartItem/CartItem";

type TCartItemList = {
  products: TProduct[];
  changeQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number) => void;
};

function CartItemList({
  products,
  changeQuantity,
  removeProduct,
}: TCartItemList) {
  const displayProduct = products.map((product) => {
    return (
      <CartItem
        {...product}
        key={product.id}
        changeQuantity={changeQuantity}
        removeProduct={removeProduct}
      />
    );
  });
  return <div>{displayProduct}</div>;
}

export default CartItemList;
