import styles from "../styles/item.module.css"
export default function Item(props) {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className={styles.item_price}>
        <div className={styles.item_price_new}>{props.new_price}</div>
        <div className={styles.item_price_old}>{props.old_price}</div>
      </div>
    </div>
  );
}
