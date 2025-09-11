import { TCategory } from "@types";
import styles from "./style.module.css";
import { memo } from "react";

type TFilterButton = {
  catName: string;
  category: TCategory[];
  handelAnimation: () => void;
  handelSelectCatName: (prefix: string) => void
};

const { filter_button, filter_button_isFill } = styles;

const  FilterButton = memo(({catName, category, handelAnimation, handelSelectCatName }: TFilterButton) => {

  const dispalyCategory = category.map((item) => (
    <button
      key={item.id}
      className={`${filter_button} ${
        item.prefix === catName ? filter_button_isFill : ""
      }`}
      onClick={() => {
        handelSelectCatName(item.prefix);
        handelAnimation();
      }}
    >
      {item.prefix}
    </button>
  ));


  return <> {dispalyCategory} </>;
})

export default FilterButton;
