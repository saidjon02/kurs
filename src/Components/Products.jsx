import React from "react";
import Fetch from "../pages/Fetch";
import SkeletonCard from "../Components/Loading";
import { Link } from "react-router-dom";
import "../App.css";

function Products({ searchQuery }) {
  // Receive searchQuery from Home.jsx
  const { data } = Fetch("http://localhost:8000/items");

  // Filter data based on the search query
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home-row dg3">
        {!data
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : filteredData.map((e) => (
              <Link to={`/list/${e.id}`} key={e.id}>
                {" "}
                {/* Ensure e.id is unique */}
                <div className="pizza-card">
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
                      Цыпленок, моцарелла, сры чеддер и пармезан, сырный соус,
                      томаты, соус альфредо, чеснок
                    </p>
                    <div className="pizza-card-footer">
                      <span className="pizza-card-price">от {e.price} ₽</span>
                      <button className="pizza-card-button">Собрать</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Products;
