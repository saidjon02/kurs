import React from "react";
import Filter from "../Components/Filter";
import Aside from "../Components/Aside";
import Products from "../Components/Products";

function Home({ searchQuery }) {
  // Receive searchQuery from App.jsx
  return (
    <>
      <Filter />
      <div className="wrap-row container">
        <Aside />
        <Products searchQuery={searchQuery} />{" "}
        {/* Pass searchQuery to Products */}
      </div>
    </>
  );
}

export default Home;
