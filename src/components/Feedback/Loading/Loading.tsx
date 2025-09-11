import { TLoading } from "@types";
import CartSkeleton from "../CartSkeleton/CartSkeleton";
import CategorieSkeleton from "../CategorieSkeleton/CategorieSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
const skletonsTypes = {
  cart: CartSkeleton,
  category: CategorieSkeleton,
  product: ProductSkeleton
};

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skletonsTypes;
};

function Loading({
  status,
  error,
  children,
  type = "category",
}: TLoadingProps) {
  const Component = skletonsTypes[type];
  return status === "pending" ? (
    <Component />
  ) : status === "failed" ? (
    <LottieHandler type="error" message={error as string} />
  ) : (
    children
  );
}

export default Loading;
