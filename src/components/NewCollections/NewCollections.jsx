import React from "react";
import styles from "../../styles/newcollections.module.css";
import new_collection from "../../assets/new_collections";
import Item from "../Item";
const NewCollections = () => {
  return (
    <div className={styles.new_collections}>
      <h1>NEW COLLECTIONS</h1>
      <hr className={styles.new_collections_hr} />
      <div className={styles.collections}>
        {new_collection.map((item, i) => {
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

export default NewCollections;
