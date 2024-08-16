import React from "react";
import Filter from "../Components/Filter";
import Home from "./Home";
import Aside from "../Components/Aside";

function Wrap() {
  return (
    <>
      <Filter />
      <div className="wrap-row container">
        <Aside />
        <Home />
      </div>
    </>
  );
}

export default Wrap;
