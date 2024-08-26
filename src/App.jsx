import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import Cart from "./pages/Cart";
import "boxicons";
function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/list/:id" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
