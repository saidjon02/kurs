import React, { useContext } from "react";
import Fetch from "../pages/Fetch";
import SkeletonCard from "../Components/Loading";
import { Link } from "react-router-dom";
import "../App.css";
import { CartContext } from "../Context/Context";
function Products() {
  const { data } = Fetch("http://localhost:8000/items");

  return (
    <div className="home">
      <div className="home-row dg3">
        {!data
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : data.map((e) => {
              return (
                <Link to={`/list/${e.id}`}>
                  <div className="pizza-card" key={e.id}>
                    <div className="pizza-card-image-container">
                      <img
                        src={e.img}
                        alt={e.title}
                        className="pizza-card-image"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="pizza-card-title">{e.title}</h3>
                      <p className="pizza-card-description">
                        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный
                        соус, томаты, соус альфредо, чеснок
                      </p>
                      <div className="pizza-card-footer">
                        <span className="pizza-card-price">от {e.price} ₽</span>
                        <button className="pizza-card-button">Собрать</button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Products;
