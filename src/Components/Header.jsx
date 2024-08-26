import React, { useContext } from "react";
import logo from "../Imgs/logo.png";
import man from "../Imgs/man.png";
import cart from "../Imgs/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
function Header() {
  const globalState = useContext(CartContext);
  const state = globalState.state;
  return (
    <div className="Header container pt40 pb40">
      <div className="header-left">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="" />
        </Link>
      </div>
      <div className="header-center">
        <input type="text" className="search" placeholder="Поиск пиццы..." />
      </div>
      <div className="header-right">
        <button className="btn-orange hover">
          <img src={man} className="btn-img" alt="" />
          Войти
        </button>
        <Link to={"cart"}>
          <button className="btn-orange">
            <span>{state.length}</span>
            <img src={cart} className="btn-img" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
