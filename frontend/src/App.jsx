import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/cart";
import PlaceOrder from "./pages/PlaceOrder/placeOrder";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
