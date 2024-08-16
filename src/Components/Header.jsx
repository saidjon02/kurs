import React from "react";
import logo from "../Imgs/logo.png";
import man from "../Imgs/man.png";
import cart from "../Imgs/cart.png";
function Header() {
  return (
    <div className="Header container pt40 pb40">
      <div className="header-left">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="header-center">
        <input type="text" className="search" placeholder="Поиск пиццы..." />
      </div>
      <div className="header-right">
        <button className="btn-orange hover">
          <img src={man} className="btn-img" alt="" />
          Войти
        </button>
        <button className="btn-orange">
          <img src={cart} className="btn-img" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header;
