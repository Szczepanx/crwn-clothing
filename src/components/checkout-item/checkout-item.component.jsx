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
        <button className="arrow" onClick={removeItemHandler}>
          minus
        </button>
        {cartItem.quantity}
        <button className="arrow" onClick={addItemHandler}>
          plus
        </button>
      </span>

      <span className="price">{cartItem.price}</span>
      <div>
        <button className="remove-button" onClick={deleteItemHandler}>
          delete
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
