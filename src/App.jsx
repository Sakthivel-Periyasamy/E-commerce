import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Mens from "./components/Mens";
import Kids from "./components/Kids";
import Footer from "./Footer";
import Cursor from "./components/cursor";
import men_banner from "./assets/banner_mens.png"
import kids_banner from "./assets/banner_kids.png"
import ShopCategory from "./pages/ShopCategory";
function App() {
  return (
    <div className="container">
      <div>
        {/* <Cursor /> */}
      </div>
      <BrowserRouter>
        <div className="nav-cont">
          <Navbar />
        </div>

        <div className="pagecont">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
            <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />

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
