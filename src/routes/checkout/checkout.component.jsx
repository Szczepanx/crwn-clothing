import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem cartItem={item} />
        ))}
      </div>
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;
