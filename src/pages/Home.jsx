import React from "react";
import Filter from "../Components/Filter";
import Aside from "../Components/Aside";
import Products from "../Components/Products";
function Home() {
  return (
    <>
      <Filter />
      <div className="wrap-row container">
        <Aside />
        <Products />
      </div>
    </>
  );
}

export default Home;
