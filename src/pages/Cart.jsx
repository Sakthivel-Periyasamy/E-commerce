import styles from "../styles/cart.module.css";
export default function Cart() {
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
    <div className={styles.container}>
      <div className={styles.itemcont}>
        <div className={styles.head}>
          <h3 className={styles.pro}>Product</h3>
          <h3 className={styles.heapri} >Price</h3>
          <h3>Quantity</h3>
          <h3>Total Price</h3>
        </div>
        <div className={styles.item}>
          {imageList.map((imgs, index) => {
            return (
              <div key={index} className={styles.card}>
                <div className={styles.imgcont}>
                  <img src={`src/assets/shirts/${imgs}`} />
                </div >
                <p className={styles.price}>$ 25.2</p>
                <p className={styles.quantity}>2</p>
                <p className={styles.total}>10</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
