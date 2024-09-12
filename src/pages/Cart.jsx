import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import image from "../Imgs/image 8.jpg";
import { Link } from "react-router-dom";
import bas from "../Imgs/basket.png";
import flow from "../Imgs/flow.png";

function Cart() {
  const globalState = useContext(CartContext);
  console.log(globalState);

  const state = globalState?.state || []; // Ensure state is always an array
  const dispatch = globalState?.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="cart container">
        <h2 className="cart-title2">Оформление заказа</h2>
        <div className="cart-row2 ai">
          <div className="cart-row-wrap">
            <div className="cart-left cart-bg">
              <div className="left-top">
                <h2 className="lt-title">1. Корзина</h2>
                <button className="lt-btn">
                  <img src={bas} className="bas" alt="" /> Очистить корзину
                </button>
              </div>
              <div>
                {state.length > 0 ? (
                  state.map((item, index) => {
                    const quantity = item.quantity;
                    return (
                      <div className="cart-row" key={index}>
                        <div className="cart-leftt">
                          <img src={item.img} className="item-img" alt="" />
                          <div className="cart-leftt-texts">
                            <h2 className="cart-leftt-title">{item.title}</h2>
                            <p className="cart-leftt-text">{item.text}</p>
                          </div>
                        </div>
                        <p className="cart-price">{quantity * item.price} ₽</p>
                        <div className="cart-center">
                          <button
                            className="cart-btns"
                            onClick={() =>
                              dispatch({ type: "INCREASE", payload: item })
                            }
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
                        <div className="cart-rightt">
                          <button
                            className="x"
                            onClick={() =>
                              dispatch({ type: "REMOVE", payload: item })
                            }
                          >
                            <i className="bx bx-x"></i>
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
                        <i className="bx bx-left-arrow-alt"></i> Вернуться назад
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="cart-cernter cart-bg mt50">
              <div className="left-top">
                <h2 className="lt-title">2. Персональная информация</h2>
              </div>
              <div className="inputs-box">
                <div className="c-inp-row mbb">
                  <div className="c-inp-boxes">
                    <p className="p-label">Имя</p>
                    <input
                      type="text"
                      name=""
                      placeholder="Имя"
                      id=""
                      className="c-inps"
                    />
                  </div>
                  <div className="c-inp-boxes">
                    <p className="p-label">Фамилия</p>
                    <input
                      type="text"
                      name=""
                      placeholder="Фамилия"
                      id=""
                      className="c-inps"
                    />
                  </div>
                </div>
                <div className="c-inp-row">
                  <div className="c-inp-boxes">
                    <p className="p-label">E-Mail</p>
                    <input
                      type="email"
                      name=""
                      placeholder="E-Mail"
                      id=""
                      className="c-inps"
                    />
                  </div>
                  <div className="c-inp-boxes">
                    <p className="p-label">Телефон</p>
                    <input
                      type="tel"
                      name=""
                      placeholder="Телефон"
                      id=""
                      className="c-inps"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-bottom cart-bg mt50">
              <div className="left-top">
                <h2 className="lt-title">2. Персональная информация</h2>
              </div>
              <div className="c-inp-boxes">
                <p className="p-label">Введите адрес</p>
                <input
                  type="text"
                  name=""
                  placeholder="Введите адрес..."
                  id=""
                  className="c-inps"
                />
              </div>
              <div className="c-inp-boxes mt30">
                <p className="p-label">Комментарий к заказу</p>
                <textarea
                  name=""
                  id=""
                  placeholder="Укажите тут дополнительную информацию для курьера"
                  className="c-inps"
                ></textarea>
              </div>
              <p className="p-label mt20">Время доставки</p>
              <div className="zakaz">
                <img src={flow} alt="" />
                <select>
                  <option value="1">Доставка в 11:00</option>
                  <option value="2">Доставка в 12:00</option>
                  <option value="3">Доставка в 1:00</option>
                  <option value="4">Доставка в 2:00</option>
                </select>
              </div>
            </div>
          </div>

          <div className="payment-card">
            <div className="total-section">
              <p className="total-title">Итого:</p>
              <p className="total-price">{total} ₽</p>
            </div>

            <div className="breakdown">
              <div className="breakdown-item">
                <span className="label">Стоимость товаров:</span>
                <span className="price">2005 ₽</span>
              </div>
              <div className="breakdown-item">
                <span className="label">Налоги:</span>
                <span className="price">240 ₽</span>
              </div>
              <div className="breakdown-item">
                <span className="label">Доставка:</span>
                <span className="price">120 ₽</span>
              </div>
            </div>

            <p className="promo-text">У меня есть промокод</p>

            <button className="pay-button">Перейти к оплате</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
