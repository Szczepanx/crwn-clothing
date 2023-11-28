import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { deleteItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const deleteItemHandler = () => {
    deleteItemFromCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>

        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
