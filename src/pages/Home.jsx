import { useState } from "react";
import Popular from "../components/Popular";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.landcont}>
          <div className={styles.left}>
            <img src="src\assets\new_hero.png" alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.land}>
              <span className={styles.bspan}>
                Welcomes You!! To a World of Style and Sophistication!
              </span>
              <div className={styles.shop_btn}>
                <Link to="/product">
                  <button>Shop Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Popular />
        <Offers />

        <NewCollections />
        <NewsLetter />
      </div>
    </>
  );
}
