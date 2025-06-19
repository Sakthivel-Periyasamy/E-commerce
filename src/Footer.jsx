import React from "react";
import styles from "./styles/footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.foot}>
      <ul>
        <div className={styles.lik}>
        <Link to="/" >Home</Link>
       <Link to="/product" >Product</Link>
       <Link to="/login" >Login</Link>
       <Link to="/cart" >Cart</Link>
        </div>
      
      </ul>
    </div>
  );
};

export default Footer;
