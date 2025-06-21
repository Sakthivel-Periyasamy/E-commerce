import { Link } from "react-router-dom";
import styles from "../styles/product.module.css";
export default function Product() {
  return (
    <div className={styles.container}>
      <h3 className={styles.jea}>Fashion Garments & Textiles</h3>
      <div className={styles.land}>
        <div className={styles.landcont}>
          <div className={styles.mens}>
            <Link to="/mens">
              <img src="src\assets\d3-removebg-preview.png" alt="" />
              <h2 className={styles.lett}>MENS</h2>
            </Link>
          </div>

          <div className={styles.kids}>
            <Link to="/kids" >
              <img src="src\assets\land-boys_2-removebg-preview.png" />
              <h2 className={styles.lett}>BOYS</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
