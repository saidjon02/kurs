import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Fetch from "./Fetch";
import img1 from "../Imgs/img (1).png";
import img2 from "../Imgs/img (2).png";
import img3 from "../Imgs/img (3).png";
import img4 from "../Imgs/img (4).png";
import { CartContext } from "../Context/Context";
function CardList() {
  const { id } = useParams();
  const { data } = Fetch("http://localhost:8000/items/" + id);
  const globalState = useContext(CartContext);
  const dispatch = globalState.dispatch;
  console.log(globalState);
  return (
    <div className="cardlist container">
      {data && (
        <div className="cardl-row">
          <div className="cardl-left">
            <img src={data.img} className="data-img" alt="" />
          </div>
          <div className="cardl-right">
            <h2 className="cardl-title">{data.title}</h2>
            <p className="cardl-text">{data.text}</p>
            <div className="btns">
              <button className="cardl-btns-hight active-btn">Маленькая</button>
              <button className="cardl-btns-hight">Средняя</button>
              <button className="cardl-btns-hight">Большая</button>
            </div>
            <div className="btns">
              <button className="cardl-btns-hight">Традиционное</button>
              <button className="cardl-btns-hight active-btn">Тонкое</button>
            </div>
            <div className="things">
              <h2 className="thing-title">Ингредиенты</h2>
              <div className="cardl-card-row">
                <div className="cardl-cards">
                  <img src={img1} alt="" className="cardl-card-img" />
                  <h2 className="cardl-card-title">Сырный бортик</h2>
                  <p className="cardl-card-text">179 ₽</p>
                </div>
                <div className="cardl-cards">
                  <img src={img2} alt="" className="cardl-card-img" />
                  <h2 className="cardl-card-title">Сливочная моцарелла</h2>
                  <p className="cardl-card-text">79 ₽</p>
                </div>
                <div className="cardl-cards">
                  <img src={img3} alt="" className="cardl-card-img" />
                  <h2 className="cardl-card-title">Сыры чеддер и пармезан</h2>
                  <p className="cardl-card-text">79 ₽</p>
                </div>
                <div className="cardl-cards">
                  <img src={img4} alt="" className="cardl-card-img" />
                  <h2 className="cardl-card-title">Нежный цыпленок</h2>
                  <p className="cardl-card-text">79 ₽</p>
                </div>
              </div>
              <button
                className="btn-orange2"
                onClick={() => dispatch({ type: "ADD", payload: data })}
              >
                Добавить в корзину за {data.price}₽
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardList;
