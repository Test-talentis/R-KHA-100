import { useCallback, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import ProductInfo from "../ProductInfo/ProductInfo";
import { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { addProductById } from "@store/cartProduct/cartProductSlice";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import styles from "./style.module.css";
import { actLikeProduct } from "@store/wishlist/wishlistSlice";
import { PopUp } from "@components/Feedback";
import { addToast } from "@store/toast/toastSlice";

const { wishlist } = styles;

type TProductProps = TProduct & {
  isProductInfoStyled?: boolean;
  isAnimated: boolean;
};

function Product({
  id,
  title,
  img,
  price,
  max,
  quantity,
  isLiked,
  isAuthenticated,
  isProductInfoStyled,
  isAnimated,
}: TProductProps) {
  const dispatch = useAppDispatch();

  // const [isLiked, setIsLiked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const quantityCalculate = (max ?? 0) - (quantity ?? 0);

  const quanityReachToMax = quantityCalculate <= 0 ? true : false;

  useEffect(() => {
    if (!isDisabledBtn) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsDisabledBtn(false);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [isDisabledBtn]);

  const handelAddProduct = () => {
    dispatch(addProductById(id));
    dispatch(
      addToast({
        type: "success",
        title: "add To Cart",
        message: `The Product ${title} add To Cart`,
      })
    );
    
    if ((quantityCalculate - 1) === 0) {
      dispatch(
        addToast({
          type: "warning",
          message: `The product ${title} reach to max:${max}`,
          delayApperance: true,
        })
      );
    }

    setIsDisabledBtn(true);
  };

  const handelLikeProduct = () => {
    if (isAuthenticated) {
      if (!isLoading) {
        setIsLoading(true);

        dispatch(actLikeProduct(id))
          .unwrap()
          .then(() => {
            setIsLoading(false);
            if (!isLiked) {
              dispatch(
                addToast({
                  type: "success",
                  message: `product ${title} is add to wishlsit`,
                })
              );
            }
          })
          .catch(() => {
            setIsLoading(false);
            dispatch(
              addToast({
                title: "unanable to add item",
                type: "danger",
                message: `there is an error to add item`,
              })
            );
          });
      }
    } else {
      setShowModal(true);
    }
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <ProductInfo
        title={title}
        img={img}
        price={price}
        quantity={quantity as number}
        isProductInfoStyled={isProductInfoStyled}
        isAnimated={isAnimated}
        direction="column">
        <div className={wishlist} onClick={handelLikeProduct}>
          {isLoading ? (
            <Spinner animation="border" size="sm" />
          ) : isLiked ? (
            <LikeFill title="like-file" />
          ) : (
            <Like title="like" />
          )}
        </div>
        <Button
          onClick={handelAddProduct}
          disabled={
            isDisabledBtn ? isDisabledBtn : quanityReachToMax ? true : false
          }>
          {isDisabledBtn ? <Spinner animation="border" size="sm" /> : "Add"}
        </Button>
      </ProductInfo>
      <PopUp
        isLaoding={isLoading}
        display={showModal}
        closeModal={closeModal}
        message="You should Login First"
      />
    </>
  );
}

export default Product;
