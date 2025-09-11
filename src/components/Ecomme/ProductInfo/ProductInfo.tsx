import React from "react";
import styles from "./style.module.css";

type TProductInfo = {
  title: string;
  img: string;
  price: string;
  quantity?: number;
  children?: React.ReactNode;
  direction: "row" | "column";
  isProductInfoStyled?: boolean;
  style?: React.CSSProperties;
  isAnimated: boolean;
};

function ProductInfo({
  title,
  img,
  price,
  quantity,
  children,
  isProductInfoStyled,
  direction,
  style,
  isAnimated,
}: TProductInfo) {
  
  return (
    <div
      className={`${isAnimated ? styles[`product-${direction}_animated`] : ""} ${
        styles[`product-${direction}`]
      }`}
      style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={img} alt={title} />
      </div>
      <div
        className={`${styles[`productInfo-${direction}`]} 
        ${
          isProductInfoStyled ? styles[`productInfo-${direction}_styled`] : ""
        }`}>
        <h2>{title}</h2>
        <p>
          TotalQuantity: {quantity ? (quantity * Number(price)).toFixed(2) : 0}
        </p>
        <p>Price: {Number(price).toFixed(2)}DH</p>
        {children}
      </div>
    </div>
  );
}

export default ProductInfo;
