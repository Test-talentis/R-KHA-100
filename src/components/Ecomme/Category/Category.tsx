import { TCategory } from "@types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import ArrowRight from "@assets/svg/arrow-right.svg?react"
const {
  category,
  categoryImg,
  categoryTitel,
  category_content,
  category_items,
} = styles;

function Category({ title, img, prefix }: TCategory) {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img src={img} alt={title} />
      </div>
      <div className={category_content}>
        <div className={category_items}>3 items</div>
        <h3 className={categoryTitel}>
          {title}'s <br /> collection
        </h3>
        <Link to={`products/${prefix}`}>
        shop collection
        <ArrowRight/>
        </Link>
      </div>
    </div>
  );
}

export default Category;
