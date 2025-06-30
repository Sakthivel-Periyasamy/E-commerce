import React from "react";
import styles from "../styles/popular.module.css";
import data_product from "../assets/data";
import Item from "./Item";
const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr className={styles.popular_hr} />
      <div className={styles.popular_item}>
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
