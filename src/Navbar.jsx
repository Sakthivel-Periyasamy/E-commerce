import { Link } from "react-router-dom";
import styles from "./styles/nav.module.css";
import { useState } from "react";
export default function Navbar() {
    const [line,setLine]=useState()
  return (
    <div className={styles.nav}>
      <ul>
        <div className={styles.title} >
            <img src="src\assets\2-removebg-preview.png" />
          <p className={styles.head}>Fashion Shirts</p>
        </div>
        <Link  to="/">
          <i class="fa-solid fa-house"></i> Home
        </Link>
        <div className={styles.search}>
          <i class="fa-solid fa-magnifying-glass" className={styles.glass}></i>
          <input
            type="text"
            className={styles.ip}
            placeholder="Search for Product, Brands and more"
          />
        </div>
        <Link to="/product">
          <i class="fa-solid fa-shirt"></i> Product
        </Link>
        <div className={styles.login}>
        <i class="fa-solid fa-right-to-bracket">  </i>
          <Link to="/login">  Login</Link>
        </div>
        <Link to="cart">
          <i class="fa-solid fa-cart-shopping"></i> Cart
        </Link>
      </ul>
    </div>
  );
}
