import "./cart-item.styles.jsx";
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <img src={cartItem.imageUrl} alt={cartItem.name} />
      <ItemDetails>
        <ItemName>{cartItem.name}</ItemName>
        <span>
          {cartItem.quantity} X ${cartItem.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
