import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const initialState = () => {
  const initialCart = localStorage.getItem("cart");
  return initialCart ? JSON.parse(initialCart) : [];
};

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const exists = state.some((item) => item.id === action.payload.id);
        if (exists) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "INCREASE":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      case "DECREASE":
        return state
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

      case "REMOVE":
        return state.filter((item) => item.id !== action.payload.id);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, [], initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const info = { state, dispatch };

  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
