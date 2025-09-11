import { useAppDispatch } from "@store/hooks";
import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import useCategories from "./useCategories";
import { actGetProductByPrefix } from "@store/products/productsSlice";
import useAnimated from "./useAnimated";

const useProductSection = () => {
    const {isAnimated, handelAnimation} = useAnimated();
  const [catName, setCatName] = useState("men");
//   const [isAnimated, setIsAnimated] = useState(false);
  const dispatch = useAppDispatch();
  const { category } = useCategories();
  const { fullProductData, status, error } = useProducts();

  useEffect(() => {
    dispatch(actGetProductByPrefix(catName));
  }, [dispatch, catName]);

  const handelSelectCatName = (prefix: string) => {
    setCatName(prefix);
  };
 
  return {
    catName,
    isAnimated,
    category,
    fullProductData,
    status, 
    error,
    handelSelectCatName,
    handelAnimation
  };
};

export default useProductSection;
