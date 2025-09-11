import { TProduct } from "@types";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Button, Form } from "react-bootstrap";
import styles from "./style.module.css";
import { memo } from "react";

type TCartItem = TProduct & {
  changeQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number) => void;
};

const { cartItem } = styles;

const CartItem = memo(
  ({
    id,
    title,
    img,
    price,
    quantity,
    max,
    changeQuantity,
    removeProduct,
  }: TCartItem) => {
    const renderOption = Array(max)
      .fill(0)
      .map((_, index) => {
        const quantity = ++index;
        return <option value={quantity}>{quantity}</option>;
      });

    const handelChangeQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +e.target.value;
      if (id && typeof id === "number") {
        changeQuantity(id, quantity);
      }
    };

    const handelRemoveProduct = () => {
      removeProduct(id);
    };

    return (
      <div className={cartItem} key={id}>
        <ProductInfo
          title={title}
          img={img}
          price={price}
          quantity={quantity}
          direction="row">
          <Button
            variant="secondary"
            style={{ width: "120px" }}
            onClick={handelRemoveProduct}>
            Remove
          </Button>
        </ProductInfo>
        <div>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={handelChangeQuantity}>
            {renderOption}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
