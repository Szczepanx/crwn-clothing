import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const deleteItemFromCart = (cartItems, itemToRemove) => {
  const newCart = cartItems.filter((item) => item !== itemToRemove);
  return newCart;
};

export const CART_ACTIONS_TYPES = {
  SET_CURRENT_CART: "SET_CURRENT_CART",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CURRENT_CART:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default:
      throw new Error("Unhandled type in reducer");
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  count: 0,
  total: 0,
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
  const [{ cartItems, isCartOpen, total, count }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    const newCartTotal = newCartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    dispatch(
      createAction(CART_ACTIONS_TYPES.SET_CURRENT_CART, {
        cartItems: newCartItems,
        total: newCartTotal,
        count: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (cartItem) => {
    const newCartItems =
      cartItem.quantity === 1
        ? deleteItemFromCart(cartItems, cartItem)
        : removeCartItem(cartItems, cartItem);
    updateCartItems(newCartItems);
  };
  const deleteItemsFromCart = (cartItem) => {
    const newCartItems = deleteItemFromCart(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

  const setIsCartOpen = (isCartOpen) => {
    dispatch(createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, isCartOpen));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    count,
    deleteItemsFromCart,
    removeItemFromCart,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
