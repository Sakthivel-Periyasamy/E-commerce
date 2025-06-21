import { Link } from "react-router-dom";
import styles from "./styles/nav.module.css";
import { useState } from "react";
export default function Navbar() {
  const [line, setLine] = useState();
  const [menu, setMenu] = useState("home");
  return (
    <div className={styles.nav}>
      <ul>
        <div className={styles.title}>
          <img src="src\assets\shirt logo.png " />
          <p className={styles.head}>Fashion Shirts</p>
        </div>
        <div
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/">
            <div>
              <i class="fa-solid fa-house"></i> Home{" "}
              {menu === "home" ? <hr /> : <></>}
            </div>
          </Link>
        </div>
        <div className={styles.search}>
          <i class="fa-solid fa-magnifying-glass" className={styles.glass}></i>
          <input
            type="text"
            className={styles.ip}
            placeholder="Search for Product, Brands and more"
          />
        </div>
        <div
          onClick={() => {
            setMenu("product");
          }}
        >
          <Link to="/product">
            <div>
              <i class="fa-solid fa-shirt"></i> Product
              {menu === "product" ? <hr /> : <></>}
            </div>
          </Link>
        </div>
        <div>
          <div
            onClick={() => {
              setMenu("login");
            }}
            className={styles.login}
          >
            <Link to="/login">
              <i class="fa-solid fa-right-to-bracket"> </i>
              Login
            </Link>
          </div>
          {menu === "login" ? <hr /> : <></>}
        </div>
        <div>
          <div
            onClick={() => {
              setMenu("cart");
            }}
          >
            <Link to="cart">
              <div className={styles.cart}>
                <i class="fa-solid fa-cart-shopping"></i>
                <div className={styles.cart_count}>0</div>
              </div>
            </Link>
          </div>
          {menu === "cart" ? <hr /> : <></>}
        </div>
      </ul>
    </div>
  );
}
