import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartItemContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);

  return (
    <CartItemContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIconContainer>
        <ShoppingIcon />
      </ShoppingIconContainer>
      <ItemCount>{count}</ItemCount>
    </CartItemContainer>
  );
};
export default CartIcon;
