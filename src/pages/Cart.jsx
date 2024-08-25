import React, { useContext } from "react";
import { CartContext } from "../Context/Context";

function Cart() {
  const globalState = useContext(CartContext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;
  const total = state.reduce((total, items) => {
    return total + items.price * items.quantity;
  }, 0);
  return (
    <div>
      {state.map((item, index) => {
        return (
          <div className="cart-row" key={index}>
            <div className="cart-left">
              <h2>{index.title}</h2>
              {/* <img src={index.img} alt="" /> */}
            </div>
            <div className="cart-center">
              <button
                className="cart-btns"
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
              <p className="cart-quan">{item.quantity}</p>
              <button
                className="cart-btns"
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </button>
            </div>
            <div className="cart-right">
              <p className="cart-price">{item.quantity * item.price}</p>
              <button
                className="x"
                onClick={dispatch({ type: "REMOVE", payload: item })}
              >
                x
              </button>
            </div>
          </div>
        );
      })}

      {state.length > 0 && (
        <div className="total">
          <h2 className="cart-total-h2">{total}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
