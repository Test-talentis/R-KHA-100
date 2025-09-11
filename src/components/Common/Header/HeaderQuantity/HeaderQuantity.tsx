import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const { container, totalNum, pumpingAnimate } = styles;

type THeaderQuantity = {
  TotalQuantity: number;
  page: string;
  svgIcon: React.ReactNode;
};

const HeaderQuantity = memo(
  ({ TotalQuantity, page, svgIcon }: THeaderQuantity) => {
    const navigate = useNavigate();
    const [isAnimated, setIsAnimated] = useState(false);
    const quantityStyle = `${totalNum} ${isAnimated ? pumpingAnimate : ""} `;
    useEffect(() => {
      if (!TotalQuantity) {
        return;
      }
      setIsAnimated(true);

      const debounce = setTimeout(() => {
        setIsAnimated(false);
      }, 500);

      return () => {
        clearTimeout(debounce);
      };
    }, [TotalQuantity]);

    return (
      <div className={container} onClick={() => navigate(`/${page}`)}>
        {svgIcon}
        <div className={quantityStyle}>{TotalQuantity}</div>
      </div>
    );
  }
);

export default HeaderQuantity;
