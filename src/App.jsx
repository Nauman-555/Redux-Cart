import React from "react";
import Navbar from "./Components/Navbar";
import AllProduct from "./Components/AllProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AllProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
