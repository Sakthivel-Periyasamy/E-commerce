import { useState } from "react";
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
          <div className={styles.land}>
            <h1 className='text-1xl font-bold' >
              F<span className={styles.aspan}>a</span>shi
              <span className={styles.uspan}>o</span>n Shirts
            </h1>
            <span className={styles.bspan}>
              Welcomes You!! To a World of Style and Sophistication!
            </span>
          </div>
        </div>
        <marquee
          behavior="scroll"
          scrollamount="10"
          loop="infinite"
          scrolldelay="0ms"
        >
          <div className={styles.bar}>
            {imageList.map((imgs, index) => {
              return (
                <div key={index} className={styles.card}>
                  <img src={`src/assets/shirts/${imgs}`} />
                </div>
              );
            })}
          </div>
        </marquee>
      </div>
    </>
  );
}
