import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const cartItem = cartItems.find((item) => item.id === productToAdd.id);
  if (cartItem) {
    return cartItems.map((item) =>
      cartItem.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.map((item) =>
    productToRemove.id === item.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  count: 0,
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    const newCartTotal = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    setCount(newCartCount);
    setTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItem) => {
    cartItem.quantity === 1
      ? deleteItemFromCart(cartItem)
      : setCartItems(removeCartItem(cartItems, cartItem));
  };

  const deleteItemFromCart = (itemToRemove) => {
    const newCart = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(newCart);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    count,
    deleteItemFromCart,
    removeItemFromCart,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
