import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartContext } from "../../context/cart.context";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={product.imageUrl} alt={product.name} />
      <Footer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
