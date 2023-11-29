import "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartItemContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);

  return (
    <CartItemContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon />
      <ItemCount>{count}</ItemCount>
    </CartItemContainer>
  );
};
export default CartIcon;
