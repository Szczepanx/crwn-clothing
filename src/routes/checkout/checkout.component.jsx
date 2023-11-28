import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

export default Checkout;
