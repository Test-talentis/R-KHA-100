import { useState } from "react";
import { Button } from "react-bootstrap";
import { PopUp } from "@components/Feedback";
import { useAppDispatch } from "@store/hooks";
import { actAddOrders } from "@store/placeOrders/placeOrdersSlice";
import { cleanCartAfterAddOrders } from "@store/cartProduct/cartProductSlice";
import { TProduct } from "@types";
import styles from "./style.module.css";

type TCartSubTotal = {
  products: TProduct[];
  accessToken: null | string;
};

const { cartSubTotal } = styles;

function CartSubtTotal({ products, accessToken }: TCartSubTotal) {
  const [isLoading, setIsLoading] = useState(false);
  
  const [error, setError] = useState<null | string>();
  
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const totalQuantity = products
    .reduce(
      (acc, product) =>
        acc + +product.price * (product.quantity ? product.quantity : 1),
      0
    )
    .toFixed(2);


  const handelAddOrders = async () => {
    setIsLoading(true)
    dispatch(actAddOrders(+totalQuantity))
    .unwrap()
      .then(() => {
        dispatch(cleanCartAfterAddOrders());
        closeModal();
      }).catch((error) => {
        setError(error)
      }).finally(() => {
        setIsLoading(false);
      })
  };

  const closeModal = () => {
    setShowModal(false);
    setError(null);
  };

  const handelShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={cartSubTotal}>
        <h3>SubtTotal:</h3>
        <p>{totalQuantity}DH</p>
      </div>
      {accessToken && (
        <div className="d-flex align-items-center justify-content-end">
          <Button variant="primary" onClick={handelShowModal}>Place Order</Button>
        </div>
      )}

      <PopUp
        display={showModal}
        message={error ? error : `Do you Confirme Your Order with Price: ${totalQuantity}DH`}
        closeModal={closeModal}
        confirmation={handelAddOrders}
        isLaoding={isLoading}
      />
    </>
  );
}

export default CartSubtTotal;
