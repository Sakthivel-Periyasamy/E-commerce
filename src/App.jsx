import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-cont">
          <Navbar />
        </div>

        <div className="pagecont">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
