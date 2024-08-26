import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import image from "../Imgs/image 8.jpg";
import { Link } from "react-router-dom";
function Cart() {
  const globalState = useContext(CartContext);
  console.log(globalState);

  const state = globalState.state;
  const dispatch = globalState.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div>
      {state.length > 0 ? (
        state &&
        state.map((item, index) => {
          const quantity = item.quantity;
          return (
            <div className="cart-row" key={index}>
              <div className="cart-left">
                <h2>{item.title}</h2>
                <img src={item.img} alt="" />
              </div>
              <div className="cart-center">
                <button
                  className="cart-btns"
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p className="cart-quan">{quantity}</p>
                <button
                  className="cart-btns"
                  onClick={() => {
                    if (quantity > 1) {
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
                <p className="cart-price">{quantity * item.price}</p>
                <button
                  className="x"
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  x
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty">
          <img src={image} alt="" />
          <h2 className="impty-title">Корзина пустая</h2>
          <p className="empty-text">
            Добавьте хотя бы одну пиццу, чтобы совершить заказ
          </p>
          <Link to={"/"}>
            <button className="btn-orange2">
              <i class="bx bx-left-arrow-alt"></i> Вернуться назад
            </button>
          </Link>
        </div>
      )}

      {state.length > 0 && (
        <div className="total">
          <h2 className="cart-total-h2">{total}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
