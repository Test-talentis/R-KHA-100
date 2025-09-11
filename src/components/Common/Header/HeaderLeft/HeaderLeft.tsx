import HeaderQuantity from '../HeaderQuantity/HeaderQuantity'
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import ShoplistIcon from "@assets/svg/cart.svg?react";
import styles from "./style.module.css"
import { useAppSelector } from '@store/hooks';
import { cartTotalQuantitySelectore } from '@store/cartProduct/selectors';

const {headerLeft} = styles;

function HeaderLeft() {
  const cartProductQuantity = useAppSelector(cartTotalQuantitySelectore);
  const wishlistNumberOfLike = useAppSelector(state => state.wishlist.productsId.length);
  return (
    <div className={headerLeft}> 
        <HeaderQuantity 
            TotalQuantity={wishlistNumberOfLike}
            page='wishlist'
            svgIcon={<WishlistIcon title='Wishlist'/>}
        />
        <HeaderQuantity 
            TotalQuantity={cartProductQuantity }
            page='cartProduct'
            svgIcon={<ShoplistIcon title='shopList'/>}
        />
    </div>
  )
}

export default HeaderLeft