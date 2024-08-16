import React from "react";
import bottom from "../Imgs/bottom.png";
function Filter() {
  return (
    <div>
      <div className="wrap">
        <div className="filter container">
          <h2 className="filter-title fz35 mt20">Все пиццы</h2>
          <div className="filter-row df mt20">
            <div className="filter-left">
              <button className="filter-btn activee">Все</button>
              <button className="filter-btn">Мясные</button>
              <button className="filter-btn">Острые</button>
              <button className="filter-btn">Сладкие</button>
              <button className="filter-btn">Вегетарианские</button>
              <button className="filter-btn">С курицей</button>
              <button className="filter-btn">
                Ещё <i class="bx bx-chevron-down"></i>
              </button>
            </div>
            <div className="filter-right">
              <button className="filter-btn2">
                <img src={bottom} alt="" />
                <span>
                  Сортировка: <span className="orange cursor"> рейтингу</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
