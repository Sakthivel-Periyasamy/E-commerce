import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";
export default function Home() {
  const imageList = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.landcont}>
          <div className={styles.left}></div>
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
      </div>
    </>
  );
}
