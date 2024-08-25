// Context.jsx
import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "INCREASE":
        const tempState2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempState2;

      case "DECREASE":
        const tempState3 = state
          .map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          })
          .filter((item) => item.quantity > 0);
        return tempState3;

      case "REMOVE":
        const tempState4 = state.filter(
          (item) => item.id !== action.payload.id
        );
        return tempState4;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
