import React from "react";
import styles from "../../styles/offers.module.css";
import exclusive_image from "../../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button className={styles.left_button} >Check Now</button>
      </div>
      <div className={styles.offers_right}>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
