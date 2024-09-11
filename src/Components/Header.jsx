import React, { useContext } from "react";
import logo from "../Imgs/logo.png";
import man from "../Imgs/man.png";
import cart from "../Imgs/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

function Header({ setSearchQuery }) {
  const globalState = useContext(CartContext);
  const state = globalState.state;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); // Update the search query state
  };

  return (
    <div className="Header container pt40 pb40">
      <div className="header-left">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>
      <div className="header-center">
        <input
          type="text"
          className="search"
          placeholder="Поиск пиццы..."
          onChange={handleSearch} // Call handleSearch on input change
        />
      </div>
      <div className="header-right">
        <button className="btn-orange hover">
          <img src={man} className="btn-img" alt="User" />
          Войти
        </button>
        <Link to={"cart"}>
          <button className="btn-orange">
            <span>{state.length}</span>
            <img src={cart} className="btn-img" alt="Cart" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
