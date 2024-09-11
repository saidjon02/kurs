import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import Cart from "./pages/Cart";
import "boxicons";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Manage search query state here

  return (
    <>
      <BrowserRouter>
        <Header setSearchQuery={setSearchQuery} />{" "}
        {/* Pass setSearchQuery to Header */}
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />{" "}
          {/* Pass searchQuery to Home */}
          <Route path="cart" element={<Cart />} />
          <Route path="/list/:id" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
